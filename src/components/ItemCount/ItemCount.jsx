import { useState } from "react";
import "./ItemCount.css";
import { Link } from "react-router-dom";
function ItemCount({ stock, onAddToCart }) {
  let [count, setCount] = useState(1);
  function handleAdd() {
    if (count < stock) setCount(++count);
  }
  function handleReduce() {
    if (count > 1) setCount(count - 1);
  }
  let isDisableSubstract = count === 1;
  let isDisableAdd = count === stock;

  function onAddToCart() {
    alert(`Compraster ${count} de esto`);
  }
  return (
    <div className="countContainer">
      <div className="countBtnsConteiner">
        <button
          disabled={isDisableSubstract}
          className="countBtns"
          onClick={handleReduce}
        >
          -
        </button>
        <p className="quantity">{count}</p>
        <button
          disabled={isDisableAdd}
          className="countBtns"
          onClick={handleAdd}
        >
          +
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            onAddToCart(count);
          }}
          className="buyBtn"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
export default ItemCount;
