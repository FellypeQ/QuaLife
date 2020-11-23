import React, { useState, useEffect } from "react";
import axios from "axios";

import Summary from "./Summary";
import CityScore from "./CityScore";

function ResumeScore(props) {
  const [state, setState] = useState({ summary: "", categories: [] });

  useEffect(() => {
    async function SumaryAndScore() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/scores/`
      );
      setState({
        summary: response.data.summary.slice(0, -1),
        categories: response.data.categories,
      });
    }
    SumaryAndScore();
  }, [props.city]);

  return (
    <div style={{ backgroundColor: "#f8f9fa", width: "100%" }}>
      <div className="row">
        <div className="col"></div>
        <div className="col-7">
          <Summary resume={state.summary} />
          <CityScore scores={state.categories} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default ResumeScore;
