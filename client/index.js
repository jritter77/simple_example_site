
import {Home} from "./views/Home.js";
import {About} from "./views/About.js";
import { NavBar } from "./components/navbar.js";
import { Users } from "./views/Users.js";

const nav = new NavBar();

const pages = {
    home: Home,
    about: About,
    users: Users
}

function getPageFromURL() {
    const loc = location.hash.substring(1);
    return loc.split("-")[0];
    
}

// Populate contentDiv wtih retrieved HTML
function loadContent() {
    let fragmentId = getPageFromURL();
    pages[fragmentId]();
    $('.modal').modal('hide');
}

// Set to home page if no hash
if (!location.hash) {
    location.hash = '#home';
}

// initial call to load content
loadContent();

// add event listener for hash
window.addEventListener('hashchange', loadContent);