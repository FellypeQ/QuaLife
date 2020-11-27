import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CityImage.css";

function CityImage(props) {
  const [state, setState] = useState({
    image: "",
    photographer: "",
    cityName: "",
  });
  let tempCityName = "";

  useEffect(() => {
    async function findImage() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/images/`
      );
      props.city.split("-").forEach((ele) => {
        tempCityName += `${ele.slice(0, 1).toUpperCase() + ele.slice(1)} `;
      });
      setState({
        image: response.data.photos[0].image.web,
        photographer: response.data.photos[0].attribution.photographer,
        cityName: tempCityName.trim(),
      });
    }
    findImage();
  }, [props.city]);

  return (
    <div
      className="w-100 cityImage"
      style={{
        backgroundImage: `url(${state.image})`,
      }}
    >
      <h1 className="cityName">{state.cityName}</h1>
      <p className="cityPhotographer">Photographer: {state.photographer}</p>
    </div>
  );
}

export default CityImage;
