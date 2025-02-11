
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
// Sample dresses data
const dresses = [
    {
        id: 1,
        name: "Red Summer Dress",
        brand: "Zara",
        price: "$45",
        image: "https://example.com/red-dress.jpg"
    },
    {
        id: 2,
        name: "Elegant Evening Gown",
        brand: "Gucci",
        price: "$250",
        image: "https://example.com/gown.jpg"
    },
    {
        id: 3,
        name: "Casual Floral Dress",
        brand: "H&M",
        price: "$35",
        image: "https://example.com/floral-dress.jpg"
    }
];

// API endpoint to get dresses
app.get("/dresses", (req, res) => {
    res.json(dresses);
});

// Start the server
app.listen(3007, () => {
    console.log(`Server running on http://localhost:3007`);
});