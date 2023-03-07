import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import combosDB from "../data/combos";
import CombosList from "./CombosList";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";


function getCombos(nameid) {
  return new Promise((resolve, reject) => {
    if (nameid !== undefined) {
      const arrayFiltered = combosDB.filter((combo) => {
        return combo.name === nameid;
      });
      resolve(arrayFiltered);
    } else {
      resolve(combosDB);
    }
  });
}

function ProductModal(props, {name}) {
  const [combos, setCombos] = useState([]);
  const { nameid } = useParams();

  useEffect(() => {
    getCombos(nameid).then((respuestaPromise) => {
      setCombos(respuestaPromise);
    });
  }, [nameid]);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.products.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{props.products.description}</p>
        <h4>S/. {props.products.price}</h4>

        <h4>Combo - Duos</h4>

        <CombosList combos={combos} />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModal;
