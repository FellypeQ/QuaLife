import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./OnePageCityDetail.css";
import CityImage from "./CityImage";
import ResumeScore from "./ResumeScore";

function OnePageCityDetail(props) {
  return (
    <div>
      <CityImage city={props.match.params.id} />
      <ResumeScore className="summaryCity" city={props.match.params.id} />
    </div>
  );
}

export default OnePageCityDetail;
