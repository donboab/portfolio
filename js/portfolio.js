const preload_wrap = () => {
const fadeEffect = setInterval(() => {
  const preloader = document.querySelector('.preloader');
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.9;
  } else {
    clearInterval(fadeEffect);
    preloader.style.display = "none";
  }
}, 1200);
}
window.addEventListener('load', preload_wrap);


const open_Tab = function porfolioTab(evt, category) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(category).style.display = "block";
    evt.currentTarget.className += " active";
  }

const activate_Tab = (document.querySelector('#default-tab').click());

const contbox = function showPopup(val) {
  if (val) {
    document.querySelector('#popup').style.visibility = 'visible'
  } else {
    document.querySelector('#popup').style.visibility = 'hidden'
  }
};

const dateToday = () => {
const live_date = new Date().getFullYear();
  document.querySelector(".date-today").innerHTML = live_date;
};
dateToday();

let hero_type = () => {
var content = [ "I am a Front-end Web Developer.", "Grit Helps My Problem-solving Skills.", "I am Self-motivated.", "I Love Branding and Marketing.", "Research skills is my Secret Weapons.", "I am a Goal Getter.", "I am Open to Large or Small Projects." ];

// Current sentence being processed
let part = 0;

// Character number of the current sentence being processed
let part_index = 0;

// Holds the handle returned from setInterval
let interval_value;

// Div that holds the text
let elements = document.querySelector("#who-text");

// Typing effect
function Type() { 
	let text =  content[part].substring(0, part_index + 1);
	elements.innerHTML = text;
	part_index++;

	// If full sentence has been displayed then start to delete the sentence after some time
	if(text === content[part]) {
		clearInterval(interval_value);
		setTimeout(function() {
			interval_value = setInterval(Delete, 50);
		}, 1000);
	}
}

// deleting effect function
function Delete() {
	let text =  content[part].substring(0, part_index - 1);
	elements.innerHTML = text;
	part_index--;

// If sentence has been deleted then start to display the next sentence
if(text === '') {
		clearInterval(interval_value);

		// If last sentence then display the first one, else move to the next
		if(part == (content.length - 1))
			part = 0;
		else
			part++;
		part_index = 0;

		// Start to display the next sentence after some time
		setTimeout(function() {
			interval_value = setInterval(Type, 100);
		}, 200);
	}
}

// Start the typing effect on load
interval_value = setInterval(Type, 100);
};
hero_type();

// Site Nav Logic
const barclose = (x) => {
  x.classList.toggle("change");
  let site_menu = document.querySelector(".site-menu");
  site_menu.classList.toggle("menu-show");
  console.log(x);
};

const menu_close = () => {
  let nav_bar = document.querySelector(".nav-bar");
  nav_bar.classList.remove("change");
  let site_menu = document.querySelector(".site-menu");
  site_menu.classList.remove("menu-show");
  let edu_hide = document.querySelector(".edu-history");
  edu_hide.classList.add("hide-edu");
  let home_wrap = document.querySelector(".home-wrap");
  home_wrap.classList.remove("hide-home");
  let mbMenu = document.querySelector(".mb-menu");
  let siteNav = document.querySelector(".site-nav");
  siteNav.classList.remove("media-nav");
  mbMenu.classList.remove("change");
  let bioData = document.querySelector(".bio-data");
  bioData.classList.remove("bio-media");
};


const edu_nav = () => {
  let nav_bar = document.querySelector(".nav-bar");
  nav_bar.classList.remove("change");
  let site_menu = document.querySelector(".site-menu");
  site_menu.classList.remove("menu-show");
  let home_wrap = document.querySelector(".home-wrap");
  home_wrap.classList.add("hide-home");
  let edu_hide = document.querySelector(".edu-history");
  edu_hide.classList.remove("hide-edu");
  let mbMenu = document.querySelector(".mb-menu");
  let siteNav = document.querySelector(".site-nav");
  siteNav.classList.remove("media-nav");
  mbMenu.classList.remove("change");
  let bioData = document.querySelector(".bio-data");
  bioData.classList.remove("bio-media");
   
}

const mobileMenu = () => {
  let mbMenu = document.querySelector(".mb-menu");
  let siteNav = document.querySelector(".site-nav");
  siteNav.classList.toggle("media-nav");
  let site_menu = document.querySelector(".site-menu");
  site_menu.classList.add("menu-show");
  mbMenu.classList.toggle("change");
  let bioData = document.querySelector(".bio-data");
  bioData.classList.remove("bio-media");
}

const mobileProfile = () => {
  let mbProfile = document.querySelector(".mb-profile");
  let bioData = document.querySelector(".bio-data");
  bioData.classList.toggle("bio-media");
  let mbMenu = document.querySelector(".mb-menu");
  let siteNav = document.querySelector(".site-nav");
  siteNav.classList.remove("media-nav");
  mbMenu.classList.remove("change");
  
}