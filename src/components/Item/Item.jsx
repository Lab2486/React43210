import "./Item.css";

function Item({ id, name, type, image, price, stock }) {
  return (
    <article className="cardItem">
      <div className="itemImgContainer">
        <img className="itemImg" src={image} alt={name} />
      </div>
      <div className="itemInfo">
        <h2 className="itemName">{name}</h2>
        <p>$ {price}</p>
      </div>
    </article>
  );
}

export default Item;
