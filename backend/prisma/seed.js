require("dotenv").config({ path: "../.env" });
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const products = [
    { name: "Mouse Gamer", price: 129.99, stars: 5 },
    { name: "Teclado Mecânico", price: 249.99, stars: 4 },
    { name: "Monitor 24''", price: 899.99, stars: 4 },
    { name: "Headset", price: 199.99, stars: 5 },
  ];

  for (const product of products) {
    const exists = await prisma.product.findUnique({
      where: { name: product.name },
    });
    if (!exists) {
      await prisma.product.create({ data: product });
    }
  }

  console.log("Produtos pré-definidos adicionados ao banco!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
