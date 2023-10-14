# Startup
Startup project called "Plate Planner" made in conjunction with CS 260 (Web Programming).
## Startup Specification
### Elevator Pitch
Imagine that it is the end of the week and your refrigerator is absolutely bare. You do not have the time to take inventory of what  little you do have and what is most important for you to get for the coming week, so you jot down a few items on a list and head to the store. While at the store, you pull out the crumpled piece of paper that was once your shopping list. You struggle through the store until you fill a shopping cart. Once home, you remember all the items you forgot you needed. And during the coming week, you find that you do not have the ingredients necessary to make actual meals--you reluctantly resolve to eating PB&Js for the rest of the week. We have all been here. Planning out future meals and making a comprehensive list BEFORE grocery shopping is the ideal, but it seems too overwhelming. With the Plate Planner application, that struggle is gone! In one, easy to use app, you can easily plan meals for an entire week. The application will then automatically generate a list of items you need at the store. It is as easy as that! 
### Design
![Image of the proposed Plate Planner application layout](https://github.com/chloekprice/startup/blob/main/startup_design.jpg?raw=true)
### Key Features & Technologies
The following key features and technologies will be employed in the creation of this startup:
- Authentification: The user will securely login over HTTPS on the main page. Once logged in, they can navigate to the calendar page which will display the user's name.
- Database Data: The application will store the meals planned for the week on the calendar page for each individual user. The calendar will remain untouched each time the user logs in, until they manually reset the calendar.
- WebSocket Data: In realtime, the application will generate an updated shopping list that corresponds to the meals planned for the coming week.
- HTML: will provide structure for the three main pages (login, calendar, and shopping list).
- CSS: will provide styling for the pages that can be adjusted to fit various screen sizes.
- JavaScript: will provide login, calendar manipulation, and shopping list editing.
## HTML Deliverable
For this deliverable I made the framework for my application using HTML.

- HTML pages - Three HTML pages that represent logging in, updating the meal calendar, and viewing/editing the shopping list.
- Links - The login page has link choices to the calendar page and shopping list page.
- Text - There is text that acts as instruction of how to use the meal calendar.
- Images - I added an image of a plate to go with the Plate Planner theme.
- Login - There is a box for the user to input their name and a submit button right next to it.
- Database - The meals on the calendar that are present when the user opens the application represents how the Database keeps record of what was inputed on the previous launch.
- WebSocket - The shopping list represents the items pulled in realtime from the meal calendar.
## CSS Deliverable
For this deliverable I styled my HTML pages for the application.

- Header, footer, and main content body
- Navigation elements - I got rid of the underline for anchor elements. I also added a hover feature to the anchor elements that highlights them in a light gray box. The default color is now white.
- Responsive to window resizing - My app adjusts to differents screen sizes. On the shopping list page, the aside disappears when the screen width is too small.
- Application elements - I made the elements of my application standout with coloring and appropriate whitespace.
- Application text content - Imported a font used consistently throughout my application.
- Application images - Move the image on the main page to a background and animated it.
# Project notes
Here is the link to the notes for this project on GitHub https://github.com/chloekprice/startup/blob/1c7604bf68cc406011c1c4a677d9435da65fed34/notes.md 
