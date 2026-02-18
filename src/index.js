import "./styles.css";
import { homePage } from "./home.js";

function intialLoad() {
    let homeHtml = homePage();
    let contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.appendChild(homeHtml);
}

intialLoad();
console.log("TESTING WEBPACK SERVER")