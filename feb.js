require("dotenv").config();
const express = require("express");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Endpoint to fetch dresses
app.get("/dresses", async (req, res) => {
    try {
        const response = await axios.get("https://api.example.com/fashion/dresses", {
            params: {
                category: "dresses",
                limit: 5,
                apiKey: API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
var port=3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:3000}`);
});