// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/tipo_menu", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT * FROM tipo_menu"
    );
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.get("/platillos", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT * FROM platillos"
    );
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.get("/orden", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT * FROM  orden"
    );
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});


app.listen(3000, () => {
   console.log("Server is running on port 3000");
 });