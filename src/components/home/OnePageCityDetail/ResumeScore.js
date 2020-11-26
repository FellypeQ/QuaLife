import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./ResumeScore.css";
import CityInformation from "./CityInformation";
import Summary from "./Summary";
import CityScore from "./CityScore";
import Salaries from "./Salaries";
import LGBTRights from "./LGBTRights";

function ResumeScore(props) {
  const [state, setState] = useState({
    summary: "",
    categories: [],
    cityName: "",
  });
  let tempCityName = "";

  useEffect(() => {
    async function SumaryAndScore() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/scores/`
      );
      props.city.split("-").forEach((ele) => {
        tempCityName += `${ele.slice(0, 1).toUpperCase() + ele.slice(1)} `;
      });
      setState({
        summary: response.data.summary.slice(0, -1),
        categories: response.data.categories,
        cityName: tempCityName.trim(),
      });
    }
    SumaryAndScore();
  }, [props.city]);

  return (
    <div style={{ backgroundColor: "#f8f9fa", width: "100%" }}>
      <div className="row">
        <div className="col linksPage">
          <div>
            <a className="btn btn-outline-success" href="#cityInformation">
              Geral City Information
            </a>
            <a className="btn btn-outline-success" href="#summary">
              Quality Life in {state.cityName}
            </a>
            <a className="btn btn-outline-success" href="#cityScore">
              Scores
            </a>
            <a className="btn btn-outline-success" href="#salaries">
              Salaries
            </a>
            <a className="btn btn-outline-success" href="#lgbtRights">
              LGBTQIA+ Rights
            </a>
          </div>
        </div>
        <div className="col-8">
          <CityInformation id="cityInformation" city={props.city} />
          <Summary id="summary" resume={state.summary} city={props.city} />
          <CityScore
            id="cityScore"
            scores={state.categories}
            city={props.city}
          />
          <Salaries id="salaries" city={props.city} />
          <LGBTRights idHtml="lgbtRights" id={props.city} />
        </div>
        <div className="col">
          <Link to={`/cities/compare/${props.city}`}>
            <button className="btn btn-outline-success compareCities">
              Campare Cities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ResumeScore;
