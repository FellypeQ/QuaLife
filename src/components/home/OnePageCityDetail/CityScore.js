import React, { useState, useEffect } from "react";

import "./CityScore.css";

function CityScore(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    setState([...props.scores]);
  }, [props]);

  return (
    <div className="score">
      <h4>LIFE QUALITY SCORE</h4>
      <div className="scoreData">
        {state.map((elem) => {
          return (
            <div className="scoreTopic">
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
                  aria-valuenow={`$Math.round(elem.score_out_of_10)}0`}
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div className="btn btn-light btn-sm scoreButton">
                <button type="button" className="btn">
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CityScore;
