import React, { useContext } from "react";
import { createOrder } from "../../services/firebase";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

function CheckoutForm() {
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  async function handleConfirm(e) {
    e.preventDefault();
    const order = {
      items: cart,
      buyer: {
        name: "juan",
        email: "juan@rmail.com",
        phone: 12345,
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
    <>
      <form action="">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Phone" />
        <button onClick={handleConfirm}>Create Order</button>
      </form>
    </>
  );
}

export default CheckoutForm;
