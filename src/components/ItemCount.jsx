import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

function ItemCount(props) {
  const [count, setCount] = useState(props.initial);

  function handleAdd() {
    if (count < props.stock)
    setCount(count + 1);
       
  }

  function handleSubstract() {
    if (count > 0)
        setCount(count - 1);
    
  }

  return (
    <div>
      <h1>Compra tus items</h1>
      <br />
      <div>
        <button onClick={handleSubstract}> - </button>
        <span> {count} </span>
        <button onClick={handleAdd}> + </button>
      </div>
      <br />  
      <div>
        <Button variant="primary" onClick={() => props.onAdd(count)}>Agregar al carrito</Button>{" "}
      </div>
    </div>
  );
}

export default ItemCount;
