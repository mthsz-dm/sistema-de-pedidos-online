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
    const cartItem = await prisma.cartItem.delete({
      where: { id: Number(id) },
    });

    console.log("Item deletado:", cartItem);
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function updateItem(req, res) {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const cartItem = await prisma.cartItem.update({
      where: { id: Number(id) },
      data: { quantity: Number(quantity) },
      include: { product: true },
    });
    res.json(cartItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

async function deleteAllItems(req, res) {
  try {
    const cartItem = await prisma.cartItem.deleteMany();
    res.json({ message: `${cartItem.count} itens deletados` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = { getCart, addToCart, deleteItem, updateItem, deleteAllItems };
