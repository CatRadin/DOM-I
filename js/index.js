const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};



// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.src = "/img/logo.png"

//HEADER ELEMENTS ------------------------------------

const header = document.querySelector('header');
const links = document.querySelectorAll('nav a');
console.log(links.length);
links[0].textContent = "Services";
links[1].textContent = "Product";
links[2].textContent = "Vision";
links[3].textContent = "Features";
links[4].textContent = "About";
links[5].textContent = "Contact";

// H1 AND BUTTON -------------------------------------

const title = document.querySelector('.cta-text h1');
const titleButton = document.querySelector('.cta-text button');
const titleImg = document.getElementById("cta-img");

//able to create a break in the text using innerHTML instead of textContent
let titleString = "DOM <br />  Is  <br />  Awesome";
title.innerHTML = titleString;
titleButton.textContent = "Get Started";
titleImg.src = "/img/header-img.png";

//MAIN CONTENT ----------------------------------------

const mainContent = document.querySelector('.main-content');
const topContent = document.querySelectorAll('.top-content div');
const topH4 = document.querySelectorAll('.top-content div h4');
const topP = document.querySelectorAll('.top-content div p');
const middleImg = document.getElementById("middle-img");
const bottomH4 = document.querySelectorAll('.bottom-content div h4');
const bottomP = document.querySelectorAll('.bottom-content div p');


//top
topH4[0].textContent = "Features";
topP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
topH4[1].textContent = "About";
topP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
middleImg.src = "/img/mid-page-accent.jpg";

//bottom
bottomH4[0].textContent = "Services";
bottomP[0].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
bottomH4[1].textContent = "Product";
bottomP[1].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
bottomH4[2].textContent = "Vision";
bottomP[2].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

// CONTACT -------------------------------------------------------------

const contactH4 = document.querySelector('.contact h4');
const contactP = document.querySelectorAll('.contact p');

let contactStr = "123 Way 456 Street <br /> Somewhere, USA";

contactH4.textContent = "Contact";
contactP[0].innerHTML = contactStr;
contactP[1].textContent = "1 (888) 888-8888";
contactP[2].textContent = "sales@greatidea.io";

// FOOTER --------------------------------------------------------------

const footerP = document.querySelector('footer p');
footerP.textContent = "Copyright Great Idea! 2018"

//STRETCH GOALS -----------------------------------------------------------

//STYLE CHANGES

titleButton.style.background = "black";
titleButton.style.color = "white";
titleButton.style.borderRadius = "2rem";

//EVENT LISTENER 
titleButton.addEventListener('click',bigAlert);

//FUNCTIONS

function bigAlert(){
alert('The button has been pressed');
}



