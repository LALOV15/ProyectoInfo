// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/ordenes_dia", async (req, res) => {
  try {
    const orden = await pool.query(
      "SELECT o.id_orden AS ID_Orden, o.id_mesa AS Mesa, lp.id_linea_pedido AS ID_Linea_Pedido, p.nombre_platillo AS Producto, lp.observaciones AS Observaciones FROM  orden o INNER JOIN  linea_pedido lp ON o.id_linea_pedido = lp.id_linea_pedido INNER JOIN platillos p ON lp.id_platillo = p.id_platillo;"
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