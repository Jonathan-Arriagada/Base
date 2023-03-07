import React from 'react'
import './Item.css';
import { Button } from "react-bootstrap";
import { FaPlus } from 'react-icons/fa';
import ProductModal from './ProductModal';

function Item({product}) /* muestra de producto */ {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <div className="tarjeta">
        <div>
          <img src={product.img} alt="service-img" className="card-image"/>
        </div>
        <div className="card-body tarjeta-body">
            <h5 className="card-title">{product.name}</h5>
            <p>S/. {product.price}</p>
            <p className="card-text">{product.description}</p>
            <div className='d-flex justify-content-end'>
              <Button variant="primary" className='btn-custom-color' onClick={() => setModalShow(true)}><FaPlus/></Button>
            </div>     
        </div>
      </div>
      <ProductModal
      show={modalShow}
      onHide={() => setModalShow(false)}
      products={product}
      />
    </>
    )
}

export default Item;