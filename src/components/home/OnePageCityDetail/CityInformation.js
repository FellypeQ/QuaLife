import React, { useState, useEffect } from "react";
import axios from "axios";

import "./CityInformation.css";

function CityInformation(props) {
  const [state, setState] = useState({
    continent: "",
    country: "",
    name: "",
    mayor: "",
    slug: "",
    bounding_box: {},
    cityPopulationLink: "",
    population: 0,
  });

  useEffect(() => {
    async function CityData() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/`
      );
      setState({
        continent: response.data.continent,
        country: response.data._links["ua:countries"][0].name,
        name: response.data.name,
        mayor: response.data.mayor,
        slug: response.data.slug,
        bounding_box: response.data.bounding_box,
        cityPopulationLink: response.data._links["ua:identifying-city"].href,
      });
    }
    CityData();
  }, [props.city]);

  useEffect(() => {
    async function CityPopulation() {
      const response = await axios.get(`${state.cityPopulationLink}`);
      setState({ ...state, population: Number(response.data.population) });
    }
    CityPopulation();
  }, [state.cityPopulationLink]);

  function configureNumber(num) {
    return `${Math.floor(num / 1000000000000)}.${
      Math.floor((num % 1000000000) / 1000000) < 100
        ? "0" + Math.floor((num % 1000000000) / 1000000)
        : Math.floor((num % 1000000000) / 1000000)
    }.${
      Math.floor((num % 1000000) / 1000) < 100
        ? "0" + Math.floor((num % 1000000) / 1000)
        : Math.floor((num % 1000000) / 1000)
    }.${Math.floor(num % 1000)}`;
  }

  return (
    <div className="cityInformation">
      <h6>
        Some information about the city {state.name}. How, in which country is
        it located, population, mayor and etc.
      </h6>
      <div className="item">
        <p>Continent</p>
        <div className="ligation" />
        <p>{state.continent}</p>
      </div>
      <div className="item">
        <p>Country</p>
        <div className="ligation" />
        <p>{state.country}</p>
      </div>
      <div className="item">
        <p>City</p>
        <div className="ligation" />
        <p>{state.name}</p>
      </div>
      <div className="item">
        <p>Mayor</p>
        <div className="ligation" />
        <p>{state.mayor}</p>
      </div>
      <div className="item">
        <p>Population</p>
        <div className="ligation" />
        <p>{configureNumber(state.population)}</p>
      </div>
    </div>
  );
}

export default CityInformation;
