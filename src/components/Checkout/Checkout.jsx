import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import {
  Timestamp,
  addDoc,
  collection,
  documentId,
  getDocs,
  where,
  writeBatch,
} from "firebase/firestore";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

function Checkout() {
  const [orderId, setOrderId] = useState("");
  const { cart, totalPrice, clearCart } = useContext(CartContext);
  const createOrder = async ({ name, phone, email }) => {
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cart,
        total: totalPrice,
        date: Timestamp.fromDate(new Date()),
      };
      const batch = writeBatch(db);
      const outOfStock = [];
      const ids = cart.map((prod) => prod.id);
      const productsRef = (db, "products");
      const productsAddedDromFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );
      const { docs } = productsAddedDromFirestore;

      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productsAddedToCart = cart.find((prod) => prod.id === doc.id);
        const prodQuantity = productsAddedToCart?.quantity;

        if (stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc });
        }
      });

      if (outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);
        setOrderId(orderAdded.id);
        clearCart();
      } else {
        alert("no hay stock");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (orderId) {
    return <h1>el id de su orden es {orderId}</h1>;
  }
  return (
    <div className="checkoutContainer">
      <h1>CHECKOUT</h1>
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
