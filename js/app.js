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

// INTERSECTION OBSERVER

const allSections = document.querySelectorAll(".section__container");

const options = {
    root: null, // the viewport
    threshold: 1, // a 0 - 1 scale; at 1, it will fire when 100% of the target is showing on the screen
    rootMargin: "0px 0px -100px 0px"
 };

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
           return;
        }
        console.log(entry);
        entry.target.classList.toggle('focus');
    })
}, options);

allSections.forEach(section => {
    observer.observe(section);
})
