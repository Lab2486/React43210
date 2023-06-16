import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getData } from "../../services/firebase";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const typeId = useParams().type;

  useEffect(() => {
    getData().then((response) => {
      if (typeId) {
        const filterProducts = response.filter(
          (product) => product.type === typeId
        );
        setProducts(filterProducts);
      } else {
        setProducts(response);
      }
    });
  }, [typeId]);

  return <ItemList products={products} />;
}

export default ItemListContainer;
