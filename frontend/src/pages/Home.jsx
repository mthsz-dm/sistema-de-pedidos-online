import { useState } from "react";
import Img from "../assets/img/desconto.png";
import "../assets/css/App.css";

const produtos = [
  { id: 1, nome: "A", valor: 10.99, estrelas: 5 },
  { id: 2, nome: "A", valor: 10.99, estrelas: 5 },
  { id: 3, nome: "A", valor: 10.99, estrelas: 5 },
].map((s) => ({
  ...s,
}));

function Home() {
  return (
    <>
      <div>
        <div className="espaco">
          <input type="text" placeholder="Pesquisar pedidos..." />
        </div>
        <section className="section">
          <div className="itens-grid">
            {produtos.map((s) => (
              <div className="card">
                <div className="card-body">
                  <a href="">                  
                    <img src={Img} alt="produto1" width="100px" />
                    <p>{s.nome}</p>
                    <p>{s.estrelas}</p>
                    <p>{s.valor}</p>
                  </a>

                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
