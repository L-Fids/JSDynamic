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

// Give me a tight window to compute intersections.
const options = {
    root: null,
    threshold: 0.2,
    rootMargin: '-25% 0% -25% 0%'
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // don't run the code if entry is not intersecting
        if (!entry.isIntersecting) {
            return;
        }
        // select the nav item corresponding to the active section
        let navLink = entry.target.parentNode.id;
        let hrefLiteral = `a[href="#${navLink}"]`;
        let hrefSelect = document.querySelector(hrefLiteral);
        //toggle active class
        entry.target.classList.toggle('focus');
        hrefSelect.classList.toggle('nav__focus');
    })
}, options);

allSections.forEach(section => {
    observer.observe(section);
})

// Sticky NAV

window.onscroll = function() {stickyNav()};

var navbar = document.querySelector(".main__nav");
var mainContent = document.querySelector(".page__main");

var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}