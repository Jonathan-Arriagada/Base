
import React from 'react'
import './Item.css';
import { Button } from "react-bootstrap";

function Item({product}) /* muestra de producto */ {

  return (
      <div className="tarjeta">
        <div>
        <img src={product.img} alt="service-img" className="card-image"/>
        </div>
        <div className="card-body tarjeta-body">
            <h5 className="card-title">{product.name}</h5>
            <p>S/. {product.price}</p>
            <p className="card-text">{product.description}</p>
            <Button variant="primary" className='btn-custom-color'>Agregar al carrito</Button>     
        </div>
      </div>
    )
}

export default Item;