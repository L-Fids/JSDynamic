// Get and store the data-nav attribute of each section
let sections = document.querySelector('.page__main').children;

var navNames = [];

for (let i = 0; i < sections.length; i++) {
    let navName = sections[i].dataset.nav;
    navNames.push(navName);
}

// Select the nav list, create li elements with proper section names and append to nav list
const navMenu = document.querySelector('.nav__list');
const fragment = document.createDocumentFragment();
const navListClassName = "nav__item";

for (const navName of navNames) {
    const listItem = document.createElement('li');
    listItem.classList.add(navListClassName);
    listItem.innerHTML = navName;
    fragment.appendChild(listItem);
}

navMenu.appendChild(fragment);