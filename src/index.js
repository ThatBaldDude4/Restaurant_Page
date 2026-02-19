import "./styles.css";
import { homePage } from "./home.js";
import { createMenu } from "./menu.js";
import { aboutPage } from "./about.js";

function intialLoad() {
    let homeHtml = homePage();
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homeHtml);
}

intialLoad();