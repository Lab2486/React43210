import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
function ItemListContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return <ItemList products={products} />;
}

export default ItemListContainer;
