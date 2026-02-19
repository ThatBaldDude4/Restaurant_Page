export function aboutPage() {
    const container = document.createElement("div");
    const aboutSectionContainer = document.createElement("div");
    const contactSectionContainer = document.createElement("div");
    const aboutTitle = document.createElement("h2");
    const contactTitle = document.createElement("h2");
    const aboutText = document.createElement("p");
    const contactEmail = document.createElement("p");
    const contactPhone = document.createElement("p");

    aboutSectionContainer.setAttribute("id", "about-section");
    aboutTitle.textContent = "About Us";
    aboutText.textContent = "We here at Missouri Red Hot Meats we're founded in 1971 by Tikyo Amarai and John Dough. Built on servering the most loved meats for peeps like you and me.";
    aboutSectionContainer.appendChild(aboutTitle);
    aboutSectionContainer.appendChild(aboutText);

    contactSectionContainer.setAttribute("id", "contact-section");
    contactTitle.textContent = "Contact Us";
    contactEmail.textContent = "Email us @ MoRedHotMeats@redhotmeats.com";
    contactPhone.textContent = "Call us at 000-000-0000";
    contactSectionContainer.appendChild(contactTitle);
    contactSectionContainer.appendChild(contactEmail);
    contactSectionContainer.appendChild(contactPhone);

    container.appendChild(aboutSectionContainer);
    container.appendChild(contactSectionContainer);

    return container;
}