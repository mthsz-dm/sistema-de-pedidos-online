import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/img/desconto.png";
import "../assets/css/Home.css";

function Home() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Produtos recebidos:", data);
        setProducts(data)
      }) 
      .catch((err) => console.error(err));
  }, []);
  
  return (
    <>
      <div>
        <a href="/product">
          <section className="section">
            <div className="itens-grid">
              {products.map((s) => (
                <Link key={s.id} to={`/product/${s.id}`}>
                  <div className="card">
                    <div className="card-body">
                      <img src={Img} alt="produto" width="100px" />
                      <p>{s.name}</p>
                      <p>{"⭐".repeat(s.stars)}</p>
                      <p>{s.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </a>
      </div>
    </>
  );
}

export default Home;
