import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const typeId = useParams().type;

  useEffect(() => {
    getProducts().then((response) => {
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
