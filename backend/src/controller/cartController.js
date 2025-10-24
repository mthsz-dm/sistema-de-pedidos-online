const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getCart(req, res) {
  try {
    const cart = await prisma.cartItem.findMany({
      include: { product: true },
    });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addToCart(req, res) {
  const { productId, quantity } = req.body;
  try {
    const cartItem = await prisma.cartItem.create({
      data: {
        productId: productId,
        quantity: quantity,
      },
    });
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getCart, addToCart };
