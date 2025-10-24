const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const products = [
  { id: 1, name: "Mouse Gamer", price: 129.99, stars: 5, image: "" },
  { id: 2, name: "Teclado Mecânico", price: 249.99, stars: 4, image: "" },
  { id: 3, name: "Monitor 24''", price: 899.99, stars: 4, image: "" },
  { id: 4, name: "Headset", price: 199.99, stars: 5, image: "" },
];

async function getProducts(req, res) {
  res.json(products)
}

function getProductById(req, res) {
  const id = parseInt(req.params.id);
  const product = products.find((p) => p.id === id);
  if (!product) {
    return res.status(404).json({ error: "Produto não encontrado" });
  }
  res.json(product);
}

module.exports = { getProducts, getProductById};
