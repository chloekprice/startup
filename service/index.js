const express = require('express');
const app = express();
const DB = require('./database.js');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const authCookieName = 'token';
const { peerProxy } = require('./peerProxy.js');


// The service port. In production the frontend code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// Use the cookie parser middleware for tracking authentication tokens
app.use(cookieParser());

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the frontend static content hosting
app.use(express.static('public'));

// Trust headers that are forwarded from the proxy so we can determine IP addresses
app.set('trust proxy', true);

// Router for service endpoints
var apiRouter = express.Router();
app.use('/api', apiRouter);

apiRouter.get('/', (req, res) => {
  res.send("welcome to plate planner!");
});

// Create user with authentification
apiRouter.post('/auth/create', async (req, res) => {
  console.log("creating a new user");
  if (await DB.checkUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUserProfile(req.body.userName, req.body.email, req.body.password);
    // Set the cookie
    setAuthCookie(res, user.token);
    res.send({
      id: user._id,
    });
  }
});

// Get auth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  console.log("logging in");
  const user = await DB.checkUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Delete auth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  console.log('logging out');
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// Check user authorization
apiRouter.get('/user/me', async (req, res) => {
  console.log('getting token');
  authToken = req.cookies['token'];
  const user = await DB.getUser({ token: authToken });
  if (user) {
    res.send({ userName: user.userName });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// Get grocery list
apiRouter.get('/grocery_list', async (req, res) => {
  console.log('grocery_list');
  let user = req.query.name;
  const userList = await DB.getShoppingList(user);
  res.send(userList.groceryList);
});

// Save grocery list
apiRouter.post('/save_list', async (req, res) => {
  console.log('save_list');
  let userInfo = req.body;
  let name = userInfo['userName'];
  let list = userInfo['userList'];
  const save = await DB.saveList(name, list);
  res.send(save);
});

// Clear grocery list
apiRouter.post('/clear_list', async (req, res) => {
  let userInfo = req.body;
  let name = userInfo['userName'];
  const clear = await DB.clearList(name);
  res.send(clear);
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

peerProxy(httpService);
