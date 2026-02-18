const menuItems = [
    {
        item: "Burger",
        price: 19.90,
    },
    {
        item: "Mac & Cheese",
        price: 10.99,
    },
    {
        item: "Fried Fish",
        price: 25.00,
    },
    {
        item: "Chili",
        price: 8.99,
    },
];

export function createMenu() {
    const container = document.createElement("div");
    const table = document.createElement("table");
    const caption = document.createElement("caption");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const mainRow = document.createElement("tr");
    const itemTh = document.createElement("th");
    const priceTh = document.createElement("th");

    itemTh.textContent = "Item";
    itemTh.setAttribute("scope", "col");
    priceTh.textContent = "Price";
    priceTh.setAttribute("scope", "col");
    mainRow.appendChild(itemTh);
    mainRow.appendChild(priceTh);

    menuItems.forEach({item, price}, () => {
        let tr = document.createElement("tr");
        let th = document.createElement("th");
        let td = document.createElement("td");

        th.setAttribute("scope", "row");
        th.textContent = item;
        td.textContent = price;

        tr.appendChild(th);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });

    container.appendChild(table);
    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);

    return container;
}