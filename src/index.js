import "./styles.css";
import { homePage } from "./home.js";
import { createMenu } from "./menu.js";
import { aboutPage } from "./about.js";

const contentContainer = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");

const state = {
    view: "home",
} 

function intialLoad() {
    let homeHtml = homePage();
    emptyContent(contentContainer);
    contentContainer.appendChild(homeHtml);
}

function emptyContent(element) {
    element.innerHTML = "";
    element.textContent = "";
    return;
};

function renderHome() {
    let homeHtml = homePage();
    contentContainer.appendChild(homeHtml);
};

function renderMenu() {
    let menuHtml = createMenu();
    contentContainer.appendChild(menuHtml);
};

function renderAbout() {
    let aboutHtml = aboutPage();
    contentContainer.appendChild(aboutHtml);
}

homeBtn.addEventListener("click", () => {
    if (state.view === "home") {return};
    emptyContent(contentContainer);
    renderHome();
    state.view = "home";
});

menuBtn.addEventListener("click", () => {
    if (state.view === "menu") {return};
    emptyContent(contentContainer);
    renderMenu()
    state.view = "menu";
});

aboutBtn.addEventListener("click", () => {
    if (state.view === "about") {return};
    emptyContent(contentContainer);
    renderAbout();
    state.view = "about";
})

intialLoad();