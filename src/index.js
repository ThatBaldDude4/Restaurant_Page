import "./styles.css";
import { homePage } from "./home.js";
import { createMenu } from "./menu.js";

function intialLoad() {
    let homeHtml = createMenu();
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homeHtml);
}

intialLoad();