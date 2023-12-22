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
    const orden = await pool.query("SELECT * FROM tipo_menu");
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.get("/platillos", async (req, res) => {
  try {
    const orden = await pool.query("SELECT * FROM platillos");
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.get("/orden", async (req, res) => {
  try {
    const orden = await pool.query("SELECT * FROM  orden");
    res.json(orden.rows);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Unable to fetch products" });
  }
});

app.post("/agregar_al_carrito", async (req, res) => {
  try {
    const {
      id_platillo,
      cantidad,
      monto,
      observaciones,
    } = req.body;

    const nuevaLinea = await pool.query(
      "INSERT INTO linea_pedido (id_platillo, cantidad, monto, observaciones) VALUES ($1, $2, $3, $4) RETURNING *",
      [id_platillo, cantidad, monto, observaciones]
    );

    res.json({
      message: "Producto agregado al carrito",
      linea_pedido: nuevaLinea.rows,
    });
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
    res
      .status(500)
      .json({ error: "No se pudo agregar el producto al carrito" });
  }
});

app.post("/enviar_orden", async (req, res) => {
  try {
    const { id_mesa, id_linea_pedido } = req.body;

    const nuevaOrden = await pool.query(
      "INSERT INTO orden (id_mesa, id_linea_pedido) VALUES ($1, $2) RETURNING *",
      [id_mesa, id_linea_pedido]
    );

    res.json({
      message: "Orden enviada correctamente",
      orden: nuevaOrden.rows,
    });
  } catch (error) {
    console.error("Error al enviar la orden:", error);
    res.status(500).json({ error: "No se pudo enviar la orden" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
