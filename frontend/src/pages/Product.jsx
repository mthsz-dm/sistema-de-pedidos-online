import { useState } from "react";
import Img from "../assets/img/desconto.png";
import { useParams } from "react-router-dom";
import '../assets/css/Product.css'

const products = [
  { id: 1, name: "Mouse", price: "R$" + 69.99, stars: 5, description: "" },
  { id: 2, name: "Teclado", price: "R$" + 49.99, stars: 4, description: "" },
  { id: 3, name: "Monitor", price: "R$" + 199.99, stars: 4, description: "" },
];

function Product() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Produto não encontrado</h2>;

  return (
    <>
      <div>
        <img src={Img} alt={product.name} />
        <h1>{product.name}</h1>
        <h2>{product.price}</h2>
        <p>{"⭐".repeat(product.stars)}</p>
        <button>Adicionar para carrinho</button>
        <button>Comprar agora</button>
      </div>
    </>
  );
}
export default Product;
