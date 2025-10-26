import { useState, useEffect } from "react";
import Img from "../assets/img/desconto.png";
import { useParams } from "react-router-dom";
import "../assets/css/Product.css";

function Product() {
  const { id } = useParams();
  const [qtd, setQtd] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Produtos recebidos:", data);
        setProducts(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const product = products.find((p) => p.id === Number(id));
  if (!product) return <h2>Produto não encontrado</h2>;

  const addToCart = () => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id, quantity: qtd }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Produto adicionado ao carrinho!");
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="container-product">
        <div>
          <img src={`http://localhost:3000${product.imageUrl}`} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.price}</h2>
          <p>{"⭐".repeat(product.stars)}</p>
          <div className="dropdown">
            <button className="dropbtn btn-produto">
              Quantidade: {qtd}
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              {[...Array(10).keys()].map((i) => (
                <a
                  key={i + 1}
                  onClick={() => {
                    setQtd(i + 1);
                  }}
                >
                  {i + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
        <button className="btn-produto" onClick={addToCart}>
          Adicionar para carrinho
        </button>
        <button className="btn-produto" onClick={addToCart}>
          Comprar agora
        </button>
      </div>
    </>
  );
}
export default Product;
