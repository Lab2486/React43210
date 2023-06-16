import "./ItemDetailContainer.css";
import { useState, useEffect } from "react";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/firebase";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const id = useParams().id;

  useEffect(() => {
    getProductById(id)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
