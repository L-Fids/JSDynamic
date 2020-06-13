// Get and store the data-nav attribute of each section
let sections = document.querySelector('.page__main').children;

var navArray = [];

for (let i = 0; i < sections.length; i++) {
    let navName = sections[i].dataset.nav;
    navArray.push(navName);
}
