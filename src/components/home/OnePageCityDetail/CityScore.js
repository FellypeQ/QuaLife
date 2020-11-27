import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import "./CityScore.css";
import CategoryDetail from "./CategoryDetail";

function CityScore(props) {
  const [state, setState] = useState([]);
  const [currentlyItem, setCurrentlyItem] = useState({
    status: false,
    name: "",
  });

  useEffect(() => {
    setState([...props.scores]);
  }, [props]);

  function handleShow(event) {
    event.preventDefault();
    setCurrentlyItem({ status: true, name: event.target.name });
  }
  function handleClose() {
    setCurrentlyItem({ ...currentlyItem, status: false });
  }

  return (
    <div id={props.id} className="score">
      <h4>LIFE QUALITY SCORE</h4>
      <div className="scoreData">
        {state.map((elem, idx) => {
          return (
            <div className="scoreTopic" key={idx}>
              <div className="scoreLabel">
                <h6>{elem.name}</h6>
              </div>
              <div className="scorePoint">
                <h6>{Math.round(elem.score_out_of_10)}</h6>
              </div>
              <div className="progress scoreProgress">
                <div
                  className="progress-bar"
                  style={{
                    backgroundColor: `${elem.color}`,
                    width: `${Math.round(elem.score_out_of_10)}0%`,
                  }}
                  role="progressbar"
                  aria-valuenow={Math.round(elem.score_out_of_10) * 10}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="btn btn-light btn-sm scoreButton">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  name={elem.name}
                  onClick={handleShow}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {currentlyItem.status ? (
        <CategoryDetail
          id={props.city}
          apper={currentlyItem.status}
          currentlyName={currentlyItem.name}
          closeModel={handleClose}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default CityScore;
