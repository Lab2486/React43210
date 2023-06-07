import React from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetail({ id, name, image, price, stock, description, type }) {
  return (
    <>
      <div className="ItemDetail">
        <article className="detailCard">
          <div className="detailImgContainer">
            <img className="detailImg" src={image} alt={name} />
          </div>
          <div className="detailInfo">
            <div className="detailHeader">
              <h2>{name}</h2>
              <p>{type}</p>
              <p>$ {price}</p>
            </div>
            <div className="detailInfo">
              <div className="itemDescription">
                <p>{description}</p>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
              </div>
            </div>
            <div className="detailFooter">
              <ItemCount stock={stock}></ItemCount>
              <p>{id}</p>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default ItemDetail;
