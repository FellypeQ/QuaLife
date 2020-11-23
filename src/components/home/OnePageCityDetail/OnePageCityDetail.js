import React from "react";
//, { useState, useEffect }
//import axios from "axios";
import { BrowserRouter, Link } from "react-router-dom";

import CityImage from "./CityImage";
import ResumeScore from "./ResumeScore";

function OnePageCityDetail(props) {
  return (
    <BrowserRouter>
      <Link to={`/cities/compare/${props.match.params.id}`}>
        <button className="btn">Campare Cities</button>
      </Link>
      <CityImage city={props.match.params.id} />
      <ResumeScore city={props.match.params.id} />
    </BrowserRouter>
  );
}

export default OnePageCityDetail;
