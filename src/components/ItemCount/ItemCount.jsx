import { useState } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";

function ItemCount({ stock, onAdd }) {
  let [count, setCount] = useState(1);
  function handleAdd() {
    if (count < stock) setCount(++count);
  }
  function handleReduce() {
    if (count > 1) setCount(count - 1);
  }
  let isDisableSubstract = count === 1;
  let isDisableAdd = count === stock;

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
            onAdd(count);
            Swal.fire({
              title: "Added to cart",
              text: `${count} product added to cart`,
              icon: "success",
              confirmButtonText: "Sugoi",
            });
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
