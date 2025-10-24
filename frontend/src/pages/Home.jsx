import { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/img/desconto.png";
import "../assets/css/Home.css";

const produtos = [
  { id: 1, name: "Mouse", price: "R$" + 69.99, stars: 5 },
  { id: 2, name: "Teclado", price: "R$" + 49.99, stars: 4 },
  { id: 3, name: "Monitor", price: "R$" + 199.99, stars: 4 },
].map((s) => ({
  ...s,
}));

function Home() {
  return (
    <>
      <div>
        <a href="/product">
          <section className="section">
            <div className="itens-grid">
              {produtos.map((s) => (
                <Link key={s.id} to={`/product/${s.id}`}>
                <div className="card">
                  <div className="card-body">
                    <img src={Img} alt="produto" width="100px" />
                    <p>{s.name}</p>
                    <p>{s.stars}</p>
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
