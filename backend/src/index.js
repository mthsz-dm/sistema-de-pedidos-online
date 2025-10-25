require("dotenv").config({ path: "../.env" });
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../public/img")));
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Porta ${PORT}`));
