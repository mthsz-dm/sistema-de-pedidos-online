import { useState, useEffect } from "react";
import "../assets/css/Cart.css"

function Cart() {
  const [carts, setCart] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cart")
      .then((res) => res.json())
      .then((data) => setCart(data))
      .catch((err) => console.error(err));
  }, []);

  const totPrice = carts.reduce((tot, item) => {
    return tot + item.product.price * item.quantity;
  }, 0);

  return (
    <div className="container-cart">
      <div className="box">
        {carts.map((s) => (
          <div key={s.id}>
            <p>Produto: {s.product.name}</p>
            <p>Quantidade: {s.quantity}</p>
            <p>Preço: R$ {s.product.price}</p>
            <p>Subtotal: R$ {s.product.price * s.quantity}</p>
          </div>
        ))}
      </div>
      <div className="box">
        <h2>Preço Total: R$ {totPrice.toFixed(2)}</h2>
        <button>Confirmar Compra</button>
      </div>
    </div>
  );
}

export default Cart;
