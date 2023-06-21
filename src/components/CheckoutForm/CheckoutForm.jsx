import React, { useContext, useState } from "react";
import { createOrder } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import "./CheckoutForm.css";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (event) => {
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
    });
  };

  async function handleConfirm(e) {
    e.preventDefault();

    if (cart.length === 0) {
      Swal.fire({
        title: "Carrito Vacío",
        text: "Agrega productos antes de confirmar tu orden",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    const order = {
      items: cart,
      buyer: {
        name: buyer.name,
        email: buyer.email,
        phone: buyer.phone,
      },
      date: new Date(),
      price: totalPrice(),
    };

    const id = await createOrder(order);
    Swal.fire({
      title: "Gracias por su compra",
      text: `ID de tu compra: ${id}`,
      icon: "success",
      confirmButtonText: "Sugoi",
    });
    clearCart();
  }

  return (
    <div className="formContainer">
      <form className="form">
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
          />
        </div>
        <div className="orderBtnContainer">
          <button onClick={handleConfirm}>Create Order</button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
