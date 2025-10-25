import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Img from "../assets/img/desconto.png";
import "../assets/css/Home.css";

function Home({ search }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  const filterProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div>
        <section className="section">
          <div className="itens-grid">
            {filterProducts.map((s) => (
              <Link key={s.id} to={`/product/${s.id}`}>
                <div className="card">
                  <div className="card-body">
                    <img src={`http://localhost:3000${s.imageUrl}`} />
                    <p>{s.name}</p>
                    <p>{"⭐".repeat(s.stars)}</p>
                    <p>{s.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
