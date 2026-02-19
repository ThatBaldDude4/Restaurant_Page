export function homePage() {
    let container = document.createElement("div");
    let header = document.createElement("h1");
    let img = document.createElement("img");
    let text = document.createElement("p");

    container.setAttribute("id", "home-page-container");
    header.textContent = "Missouri Fresh Hot Meats";
    header.setAttribute("id", "home-page-title");
    img.setAttribute("id", "home-page-img");
    text.setAttribute("id", "home-page-description");
    text.textContent = "Here at Fresh Hot Meats we strive for perfection. Every burger, every steak, every piece of meat we handle we cook with pure tender love and care.";

    img.setAttribute("src", "");
    img.setAttribute("alt", "Juicy perfectly cooked ham and steak");

    container.setAttribute("id", "home-page-container");
    container.appendChild(header);
    container.appendChild(img);
    container.appendChild(text);

    return container;
}