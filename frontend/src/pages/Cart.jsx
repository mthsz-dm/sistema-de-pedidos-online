import { useState, useEffect } from "react";
import "../assets/css/Cart.css";

function Cart() {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error(err));
  }, []);

  const deleteItem = (id) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        alert("Produto removido com sucesso!");
        setCart((prev) => prev.filter((item) => item.id != id));
      })
      .catch((err) => console.error(err));
  };

  const updateItem = (id, quantity) => {
    fetch(`http://localhost:3000/cart/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        alert("Produto atualizado com sucesso!");
        setCart((prev) =>
          prev.map((item) => (item.id === updatedItem.id ? updatedItem : item))
        );
      })
      .catch((err) => console.error(err));
  };

  const totPrice = carts.reduce((tot, item) => {
    return tot + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="container-cart">
      <div className="products-column">
        <div className="products-box">
          {carts.map((s) => (
            <div key={s.id} className="cart-box">
              <img src={`http://localhost:3000${s.product.imageUrl}`} />
              <p>{s.product.name}</p>
              <div>
                <div className="dropdown">
                  <button className="dropbtn" type="button">
                    Quantidade: {s.quantity}
                    <i className="fa fa-caret-down"></i>
                  </button>
                  <div className="dropdown-content">
                    {[...Array(10).keys()].map((i) => (
                      <button
                        type="button"
                        key={i + 1}
                        onClick={() => {
                          updateItem(s.id, i + 1);
                        }}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <br /> <br />
              <p>Preço: R$ {s.product.price}</p>
              <p>Subtotal: R$ {(s.product.price * s.quantity).toFixed(2)}</p>
              <a onClick={() => deleteItem(s.id)} className="remove-iten">
                Remover item
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="tot-box">
        <h2>Preço Total: R$ {totPrice.toFixed(2)}</h2>
        <button>Confirmar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
