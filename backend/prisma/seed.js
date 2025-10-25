const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
require("dotenv").config({ path: "../.env" });

async function main() {
  const products = [
    {
      name: "Mouse Gamer",
      price: 129.99,
      stars: 5,
      imageUrl: "/images/mouse.png",
    },
    {
      name: "Teclado Mecânico",
      price: 249.99,
      stars: 4,
      imageUrl: "/images/teclado.png",
    },
    {
      name: "Monitor 24",
      price: 899.99,
      stars: 4,
      imageUrl: "/images/monitor.png",
    },
    {
      name: "Headset",
      price: 199.99,
      stars: 5,
      imageUrl: "/images/headset.png",
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
  }

  if (!exists) {
    await prisma.product.create({ data: product });
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
