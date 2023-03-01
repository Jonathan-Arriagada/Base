import React, { useEffect, useState } from "react";
import streamDB from "../data/stream";
import ItemDetail from "./ItemDetail";

function getProduct () {
    return new Promise( (resolve, reject) => {
        resolve(streamDB)
    })    
}

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);

    useEffect ( () => {
        getProduct().then( respuestaPromise => {
            setProduct(respuestaPromise);
        })
    }, []);

    return(
        <div>
          <ItemDetail product={product} />
        </div>
    )
    
}

export default ItemDetailContainer;