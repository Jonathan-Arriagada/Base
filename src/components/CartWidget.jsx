import React from "react";
import { ImCart } from "react-icons/im"; 
import "./CartWidget.css"

function CartWidget() {
    return(
        <div className="cart">
            <ImCart />
        </div>
    )
    
}

export default CartWidget;