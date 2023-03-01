import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import streamDB from "../data/stream";
import ItemList from "./ItemList";

function getProducts(nameid) {
  return new Promise((resolve, reject) => {
    if (nameid !== undefined) {
      const arrayFiltered = streamDB.filter((product) => {
        return product.name === nameid;
      });
      resolve(arrayFiltered);
    } else {
      resolve(streamDB);
    }
  });
}

function ItemListContainer({ name }) {
  const [products, setProducts] = useState([]);
  const { nameid } = useParams();

  useEffect(() => {
    getProducts(nameid).then((respuestaPromise) => {
      setProducts(respuestaPromise);
    });
  }, [nameid]);

  return (
    <div>
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
