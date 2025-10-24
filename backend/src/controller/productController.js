const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getProducts(req, res) {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getProducts };
