import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartView.css";

const CartView = () => {
  const { cart, totalPrice, clearCart, removeItem } = useContext(CartContext);

  return (
    <div className="cartViewContainer">
      <h1>Cart</h1>

      {cart.map((prod) => (
        <div key={prod.id} className="CartItem">
          <br />
          <h3>{prod.name}</h3>
          <p>{prod.price}</p>
          <p>total:{prod.price * prod.quantity}</p>
          <p>quantity{prod.quantity}</p>
          <button
            onClick={() => {
              removeItem(prod.id);
            }}
          >
            🗑️
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <>
          <h2>total price ${totalPrice()}</h2>
          <button onClick={clearCart}>Vaciar</button>
        </>
      ) : (
        <h3>Empty Cart</h3>
      )}
    </div>
  );
};

export default CartView;
