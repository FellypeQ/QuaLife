import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div className="container w-100">
      <div className="row w-100">
        <div className="col">1 of 5</div>
        <div className="col-9">{state.summary}</div>
        <div className="col">5 of 5</div>
      </div>
    </div>
  );
}

export default ResumeScore;
