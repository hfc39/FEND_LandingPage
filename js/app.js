/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
function buildNav(){
  const navBar = document.getElementById("navbar__list");
  navBar.innerHTML = '<li><a href="#top" class="menu__link">Home</a></li>';

  for (const section of sections){
    const sectionItem = document.createElement('li');
    const sectionLink = document.createElement('a');
    const sectionName = section.getAttribute('data-nav');
    sectionLink.textContent = sectionName;
    sectionLink.setAttribute('href','#'+section.id);
    sectionLink.setAttribute('class','menu__link');
    navBar.appendChild(sectionItem);
    sectionItem.appendChild(sectionLink);

  }
}

// Add class 'active' to section when near top of viewport
function isActive(el){
  let rect = el.getBoundingClientRect();
  if (rect.top < 10){
    return true;
  }else {
    return false;
  }
}

function setCurrent(){
  for (const section of sections){
    if (isActive(section)=== true){
      section.setAttribute('class','your-active-class');
    }else {
      section.removeAttribute('class','your-active-class');
    }
  }
}
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu
document.addEventListener("DOMContentLoaded",function (event){
  buildNav();
});

// Scroll to section on link click
window.addEventListener('click',function (event){
  setCurrent();
})
window.addEventListener('scroll',function (event){
  setCurrent();
})
// Set sections as active
