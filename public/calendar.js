let shopping_list = [];
let list = "";

function getUserName() {
  return localStorage.getItem('user');
}

function setUserName() {
  const userWeek = document.getElementsByTagName('h1')[1];
  this.setUserDisplay();
  const userName = localStorage.getItem('user');
  userWeek.innerText = userName + "'s Week";
}

function getMeals() {
  let meals = []
  let mon_breakfast = document.getElementById("meal1").value;
  let mon_lunch = document.getElementById("meal2").value;
  let mon_dinner = document.getElementById("meal3").value;
  let tues_breakfast = document.getElementById("meal4").value;
  let tues_lunch = document.getElementById("meal5").value;
  let tues_dinner = document.getElementById("meal6").value;
  let wed_breakfast = document.getElementById("meal7").value;
  let wed_lunch = document.getElementById("meal8").value;
  let wed_dinner = document.getElementById("meal9").value;
  let thurs_breakfast = document.getElementById("meal10").value;
  let thurs_lunch = document.getElementById("meal11").value;
  let thurs_dinner = document.getElementById("meal12").value;
  let fri_breakfast = document.getElementById("meal13").value;
  let fri_lunch = document.getElementById("meal14").value;
  let fri_dinner = document.getElementById("meal15").value;
  let sat_breakfast = document.getElementById("meal16").value;
  let sat_lunch = document.getElementById("meal17").value;
  let sat_dinner = document.getElementById("meal18").value;
  let sun_breakfast = document.getElementById("meal19").value;
  let sun_lunch = document.getElementById("meal20").value;
  let sun_dinner = document.getElementById("meal21").value;

  meals.push(mon_breakfast)
  meals.push(mon_lunch)
  meals.push(mon_dinner)
  meals.push(tues_breakfast)
  meals.push(tues_lunch)
  meals.push(tues_dinner)
  meals.push(wed_breakfast)
  meals.push(wed_lunch)
  meals.push(wed_dinner)
  meals.push(thurs_breakfast)
  meals.push(thurs_lunch)
  meals.push(thurs_dinner)
  meals.push(fri_breakfast)
  meals.push(fri_lunch)
  meals.push(fri_dinner)
  meals.push(sat_breakfast)
  meals.push(sat_lunch)
  meals.push(sat_dinner)
  meals.push(sun_breakfast)
  meals.push(sun_lunch)
  meals.push(sun_dinner)
  
  localStorage.setItem('meal1', mon_breakfast);
  localStorage.setItem('meal2', mon_lunch);
  localStorage.setItem('meal3', mon_dinner);
  localStorage.setItem('meal4', tues_breakfast);
  localStorage.setItem('meal5', tues_lunch);
  localStorage.setItem('meal6', tues_dinner);
  localStorage.setItem('meal7', wed_breakfast);
  localStorage.setItem('meal8', wed_lunch);
  localStorage.setItem('meal9', wed_dinner);
  localStorage.setItem('meal10', thurs_breakfast);
  localStorage.setItem('meal11', thurs_lunch);
  localStorage.setItem('meal12', thurs_dinner);
  localStorage.setItem('meal13', fri_breakfast);
  localStorage.setItem('meal14', fri_lunch);
  localStorage.setItem('meal15', fri_dinner);
  localStorage.setItem('meal16', sat_breakfast);
  localStorage.setItem('meal17', sat_lunch);
  localStorage.setItem('meal18', sat_dinner);
  localStorage.setItem('meal19', sun_breakfast);
  localStorage.setItem('meal20', sun_lunch);
  localStorage.setItem('meal21', sun_dinner);

  for (let i = 0; i < meals.length; i++) {
    let meal = meals[i];
    let count = 0;
    for (let x = 0; x < meal.length; x++) {
      let ingredient_start = x - count;
      if (meal.slice(x, (x + 1)) == ",") {
        shopping_list.push(meal.slice(ingredient_start, x));
        count = -1;
      }
      if (x == meal.length - 1) {
        shopping_list.push(meal.slice(ingredient_start, meal.length));
      }
      count += 1;
    }
  }
 
  localStorage.setItem("list", JSON.stringify(shopping_list));
}

function displayMeals() {
  for (let i = 3; i < 24; i++) {
      let data = 'meal'
      let x = (i - 2);
      data = data + x.toString();
      let meal = document.getElementsByTagName('td')[i];
      meal.innerHTML = localStorage.getItem(data);
  }
  
}

function emptyPlates() {
  let mon_breakfast = "";
  let mon_lunch = "";
  let mon_dinner = "";
  let tues_breakfast = "";
  let tues_lunch = "";
  let tues_dinner = "";
  let wed_breakfast = "";
  let wed_lunch = "";
  let wed_dinner = "";
  let thurs_breakfast = "";
  let thurs_lunch = "";
  let thurs_dinner = "";
  let fri_breakfast = "";
  let fri_lunch = "";
  let fri_dinner = "";
  let sat_breakfast = "";
  let sat_lunch = "";
  let sat_dinner = "";
  let sun_breakfast = "";
  let sun_lunch = "";
  let sun_dinner = "";
  
  localStorage.setItem('meal1', mon_breakfast);
  localStorage.setItem('meal2', mon_lunch);
  localStorage.setItem('meal3', mon_dinner);
  localStorage.setItem('meal4', tues_breakfast);
  localStorage.setItem('meal5', tues_lunch);
  localStorage.setItem('meal6', tues_dinner);
  localStorage.setItem('meal7', wed_breakfast);
  localStorage.setItem('meal8', wed_lunch);
  localStorage.setItem('meal9', wed_dinner);
  localStorage.setItem('meal10', thurs_breakfast);
  localStorage.setItem('meal11', thurs_lunch);
  localStorage.setItem('meal12', thurs_dinner);
  localStorage.setItem('meal13', fri_breakfast);
  localStorage.setItem('meal14', fri_lunch);
  localStorage.setItem('meal15', fri_dinner);
  localStorage.setItem('meal16', sat_breakfast);
  localStorage.setItem('meal17', sat_lunch);
  localStorage.setItem('meal18', sat_dinner);
  localStorage.setItem('meal19', sun_breakfast);
  localStorage.setItem('meal20', sun_lunch);
  localStorage.setItem('meal21', sun_dinner);

  shopping_list = []
  localStorage.setItem("list", JSON.stringify(shopping_list));

}

function addInput() {
  let num = 1
  for (let y = 3; y < 24; y++) {
      let temp = '<input type="text" id="meal'
      let number = num.toString();
      temp += number;
      temp += '" placeholder="enter meal here">'
      const data = document.getElementsByTagName("td")[y];
      let html = temp;
      data.insertAdjacentHTML("beforeend", html);
      num += 1;
  }
}

function addToList() {
    console.log('adding to List');
    list = list + this.makeList();
    // this.saveIngredients(list);
    window.location.href = 'shopping_list.html';
    this.displayMeals();
}

function clearPlates() {
  console.log('clearing plates');
  this.emptyPlates();
  this.displayMeals();
  this.addInput();
}

function makeList() {
  this.getMeals();
  shopping_list = JSON.parse(localStorage.getItem('list'))
  return_str = ""
  for (i = 0; i < shopping_list.length; i++) {
    return_str = return_str + shopping_list[i] + "\n"
  }
  console.log(return_str);
  return return_str;
}

async function setUserDisplay() {
  // const userName = this.getUserName();
  // const updatedList = {name: userName, list: list};
    // try {
    //   const response = await fetch("/user_info");
    //   const person = await response.json();
    //   localStorage.setItem('user', person);
    //   return this.getUserName();
    // } catch {
    //   // If there was an error then just display last user's info
    //   return this.getUserName();
    // }
    const response = await fetch("/user_info");
    const person = await response.json();
    localStorage.setItem('user', person);
}


// TO-DO: implement this

// async function saveIngredients(list) {
//     const userName = this.getUserName();
//     const updatedList = {name: userName, list: list};
//     try {
//       const response = await fetch('/api/save', {
//         method: 'POST',
//         headers: {'content-type': 'application/json'},
//         body: JSON.stringify(updatedList)
//       });

//       const list = await response.json();
//       localStorage.setItem('list', JSON.stringify(list));
//     } catch {
//       // If there was an error then just track scores locally
//       this.addToList();
//     }
// }

function getItemsStr() {
  return localStorage.getItem("list");
}

function getItemsList() {
  return JSON.parse(localStorage.getItem('list'));
}

