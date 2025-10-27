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
      description:
        "Mouse gamer ergonômico com sensor óptico de alta precisão, ótimo para jogos.",
    },
    {
      name: "Teclado Mecânico",
      price: 249.99,
      stars: 4,
      imageUrl: "/images/teclado.png",
      description: "Teclado mecânico com switches de resposta rápida.",
    },
    {
      name: "Monitor 24",

      price: 899.99,
      stars: 4,
      imageUrl: "/images/monitor.png",
      description:
        "Monitor de 24 polegadas Full HD com taxa de atualização de 75Hz e tecnologia antirreflexo.",
    },
    {
      name: "Headset",
      price: 199.99,
      stars: 5,
      imageUrl: "/images/headset.png",
      description:
        "Headset gamer com som surround, microfone ajustável e almofadas macias.",
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { name: product.name },
      update: {},
      create: product,
    });
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
