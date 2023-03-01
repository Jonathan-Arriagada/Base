import React from "react";
import Item from "./Item";


function ItemList({ products }) {
  return (
    <>
      {products.map(thisproduct => {
        return (
          <>
          <Item product={thisproduct} key={thisproduct.id} className="d-flex" />
          </>
        )   
      })
      }
    </>
  )
}

export default ItemList;
