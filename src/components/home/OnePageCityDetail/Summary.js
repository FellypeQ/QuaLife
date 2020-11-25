import React from "react";

import "./Summary.css";

function Summary(props) {
  function createMarkup() {
    return { __html: props.resume };
  }

  return (
    <div dangerouslySetInnerHTML={createMarkup()} className="summaryText"></div>
  );
}

export default Summary;
