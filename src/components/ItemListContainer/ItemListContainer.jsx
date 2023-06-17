import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemListContainer() {
  let [products, setProducts] = useState([]);
  const type = useParams().type;

  useEffect(() => {
    const productsRef = collection(db, "products");
    const q = type
      ? query(productsRef, where("type", "==", type))
      : productsRef;

    getDocs(q).then((resp) => {
      setProducts(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });
  }, [type]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
