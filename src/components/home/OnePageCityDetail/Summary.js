import React from "react";

function Summary(props) {
  let temp = document.createElement("div");
  //let text = document.createTextNode(props.resume);
  //temp.appendChild(text);

  temp.innerHTML = props.resume;
  console.log(temp);

  return <div>{props.resume}</div>;
}

export default Summary;
