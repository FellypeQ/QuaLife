import React from "react";

import "./Summary.css";

function Summary(props) {
  let tempCityName = "";

  function createMarkup() {
    return { __html: props.resume };
  }

  return (
    <div id={props.id} className="summaryBlock">
      <h2>QUALITY LIFE IN {props.city.replace(/-/, " ").toUpperCase()}</h2>
      <div
        dangerouslySetInnerHTML={createMarkup()}
        className="summaryText"
      ></div>
    </div>
  );
}

export default Summary;
