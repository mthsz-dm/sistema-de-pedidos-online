const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function getCart(req, res) {
  try {
    const cartProducts = await prisma.cartItem.findMany({
      include: { product: true },
    });
    res.json(cartProducts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function addToCart(req, res) {
  const { id, quantity } = req.body;
  try {
    const cartItem = await prisma.cartItem.create({
      data: {
        product: {
          connect: { id: id },
        },
        quantity: quantity,
      },
    });
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteItem(req, res) {
  try {
    const { id } = req.params;
    const delCartItem = await prisma.cartItem.delete({
      where: { id: Number(id) },
    });
    res.json(delCartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateItem(req, res) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const updCartItem = await prisma.cartItem.update({
      where: { id: Number(id) },
      data: { quantity: Number(quantity) },
      include: { product: true },
    });
    res.json(updCartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteAllItems(req, res) {
  try {
    const delAllCartItem = await prisma.cartItem.deleteMany();
    res.json(delAllCartItem.count);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getCart, addToCart, deleteItem, updateItem, deleteAllItems };
