const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getProducts(req, res) {
  const products = await prisma.product.findMany();
  res.json(products);
}

async function getProductById(req, res) {
  const id = parseInt(req.params.id);
  const productId = await prisma.product.findUnique({ where: { id } });
  if (!productId)
    return res.status(404).json({ error: "Produto não encontrado" });
  res.json(productId);
}

async function createProduct(req, res) {
  try {
    const { name, description, price, stars } = req.body;
    const imageUrl = req.file ? `/images/${req.file.filename}` : null;

    const product = await prisma.product.create({
      data: {
        name,
        description,
        price: parseFloat(price),
        stars: parseInt(stars),
        imageUrl,
      },
    });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getProducts, getProductById, createProduct };
