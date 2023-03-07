import React from 'react'
import "./CombosItem.css"
import { Form, FormCheck } from 'react-bootstrap';

function CombosItem({combo}) /* muestra de producto */ {
  
  return (
    <>
      <div className="comboContainer">
        <Form>
            <FormCheck
                type="switch"
                id="combo-switch"
                label={combo.name}>
            </FormCheck>
            <p className='price'>+ S/. {combo.price}</p>  
        </Form>
      </div>
      </>
  )
}

export default CombosItem;