# THE HUB

>My website that ties it altogether.

The Hub uses a mixture of web components and javascript to bring a dynamic experience to the website.
- All projects and or work is displayed on the website dynamically. Each project is created via Javascript when the page
 is loaded from `main.js`.
    - A div element is create for each project in the array of objects. The element is given a set of classes and then
assigned its `innerHTML`
    - Within the elements `innerHTML` object properties are given to various elements.
    - The element is then appended to the projects section on the `index.html` file.

The Hub also makes use of web components for the navigational bar at the top of the document, theme options, help menu,
and the famous scroll to the top functionality.

### Navbar Component
The Navbar serves two functions.
- A navigational bar. The navbar has several icons that link to my Github account and social media accounts. It also has an about button that will display a simple about me section.
- A search function. The navbar also has a search functionality by clicking on the spyglass. This allows the user to search my projects and work via project name or by #tags which are indicated at the bottom of each project card.

### Theme Component
The Theme component allows the user to toggle between light and dark modes.

### Help Component
The Help component displays a help menu for the end-users.

##### Saving User Options
Both the Theme and Help component will save the users options within local storage. So if the Help menu is toggled off it will not display again on repeat visits. The theme will also be saved in local storage and applied to repeat visits.

## Usage
```
git clone https://github.com/krabfish/the-hub.git
cd the-hub
npm run start
```
