// Get and store the data-nav attribute and ID of each section
let sections = document.querySelector('.page__main').children;

var navNames = [];
var navIds = [];

for (let i = 0; i < sections.length; i++) {
    let navName = sections[i].dataset.nav;
    let navId = sections[i].id;
    navNames.push(navName);
    navIds.push(navId);
}

// Select the nav list, create li elements with proper section names and append to nav list
const navMenu = document.querySelector('.nav__list');
const fragment = document.createDocumentFragment();
const navListClassName = "nav__item";

for (let i = 0; i < sections.length; i++) {
    const anchor = document.createElement('a');
    const listItem = document.createElement('li');

    anchor.href = "#" + navIds[i];
    listItem.classList.add(navListClassName);
    listItem.innerHTML = navNames[i];

    anchor.appendChild(listItem);
    fragment.appendChild(anchor);
}

navMenu.appendChild(fragment);

// create anchor element with proper href (#sectionName)
// add event listeners.


// onclick, execute this function
// function scrollToSection (sectionName) {
//     let scrollTo = document.getElementById(sectionName);
//     scrollTo.scrollIntoView({behavior: "smooth"});
// }

// // place event listener on nav__list
// navMenu.addEventListener('click', scrollToSection);