import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/Product.css";

function Product() {
  const { id } = useParams();
  const [qtd, setQtd] = useState(1);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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
      .then(() => {
        Swal.fire({
          title: "Thanks!",
          text: `You add this ${product.name}!`,
          icon: "success",
          timer: 1500
        });
        setTimeout(() => {
          window.location.reload();
        }, 1400);
      })
      .catch((err) => console.error(err));
  };

  const buyNow = () => {
    fetch("http://localhost:3000/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: product.id, quantity: qtd }),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Thanks!",
          text: `You add this ${product.name}!`,
          icon: "success",
          timer: 1500
        });
        navigate("/cart");
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
          <h2>R${product.price}</h2>
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
          <button className="btn-produto" id="continueBuy"onClick={addToCart}>
            Adicionar para carrinho
          </button>
          <button className="btn-produto" id="buyNow" onClick={buyNow}>
            Comprar agora
          </button>
        </div>
      </div>
    </>
  );
}
export default Product;
