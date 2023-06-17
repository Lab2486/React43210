import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const id = useParams().id;

  useEffect(() => {
    const docRef = doc(db, "product", id);
    getDoc(docRef).then((resp) => {
      console.log({ ...resp.data });
    });
  }, [id]);

  return (
    <>
      <div className="ItemDetailContainer">
        <ItemDetail {...product} />
      </div>
      ;
    </>
  );
}

export default ItemDetailContainer;
