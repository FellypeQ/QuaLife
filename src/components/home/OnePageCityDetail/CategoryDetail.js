import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";

import "./CategoryDetail.css";

function CategoryDetail(props) {
  const [state, setState] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function SumaryAndScore() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.id}/details/`
      );
      setState(
        response.data.categories.findIndex((e) =>
          e.label === props.currentlyName ? e : false
        ) >= 0
          ? response.data.categories.find((e) =>
              e.label === props.currentlyName ? e : false
            ).data
          : []
      );
      setShow(true);
    }
    SumaryAndScore();
  }, [props.currentlyName]);

  function analiseType(type, value) {
    switch (type) {
      case "currency_dollar":
        return `$ ${value}`;
        break;
      case "percent":
        return `${Math.round(value * 100)} %`;
        break;
      case "float":
        return value.toFixed(2);
        break;
      default:
        return value;
    }
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <Modal className="modal-dialog-scrollable" show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.currentlyName}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {state.map((e, idx) => {
          return (
            <div className="modalContent" key={idx}>
              <div className="modalName">{e.label}</div>
              <div className="modalValue">
                {analiseType(e.type, e[`${e.type}_value`])}
              </div>
            </div>
          );
        })}
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-outline-success" onClick={handleClose}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default CategoryDetail;
