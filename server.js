const express = require("express");

const app = express();
const port = 5006;

const sickGroceryList = [
    {
        itemName: "lemons",
        amount: 5,
        nextItem: "ginger",
    },
    {
        itemName: "ginger",
        amount: 3,
        nextItem: "honey",
    },
    {
        itemName: "honey",
        amount: 2,
        nextItem: "garlic",
    },
    {
        itemName: "garlic",
        amount: 8,
        nextItem: "water",
    },
    {
        itemName: "water",
        amount: 10,
        nextItem: "mint tea",
    },
    {
        itemName: "mint tea",
        amount: 2,
        nextItem: "soap",
    },
    {
        itemName: "soap",
        amount: 2,
        nextItem: "tissues",
    },
    {
        itemName: "tissues",
        amount: 2,
        nextItem: "chocolate",
    },
    {
        itemName: "chocolate",
        amount: 3,
        nextItem: "",
    },
];

const statement = (item) => {
    switch (item) {
        case "ginger":
            return "pieces of";
            break;
        case "honey":
        case "water":
            return "bottles of";
            break;
        case "garlic":
            return "bulbs of";
            break;
        case "mint tea":
        case "tissues":
        case "soap":
            return "boxes of";
            break;
        case "chocolate":
            return "bars of";
            break;
        case "lemons":
            return "";
            break;
    }
};

// LISTENER
app.listen(port, (req, res) => {
    console.log(`Today's Express Server was brought you by the good folks at Port ${port}!`);
});

// ROUTES
app.get("/", (req, res) => {
    res.send(`<h1>My Grocery List Request When I'm Sick...</h1><br/><a href="/lemons">Check first item</a>`);
});

app.get("/:item", (req, res) => {
    const currentItem = sickGroceryList.filter(object => object.itemName === req.params.item);
    res.send(`<h1>${currentItem[0].amount} ${statement(req.params.item)} ${req.params.item}</h1><br/><a href="/${currentItem[0].nextItem}">Next Item</a>`);
});