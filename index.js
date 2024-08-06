require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Smart Inventory Server is running ...");
})

app.listen(port, () => {
    console.log(`Smart Inventory Server is running on port: ${port}`);
})