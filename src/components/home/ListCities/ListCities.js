import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./ListCities.css";
import SearchBar from "../SearchBar/SearchBar";

function ListCities() {
  const [state, setState] = useState([]);
  const [stateBkp, setStateBkp] = useState([]);

  function filteredCities(city) {
    const filteredList = state.filter((cityArr) => {
      console.log(cityArr);
      return cityArr.name.toLowerCase().includes(city.toLowerCase());
    });
    setStateBkp(filteredList);
  }

  useEffect(() => {
    async function getListCities() {
      const response = await axios.get(
        "https://api.teleport.org/api/urban_areas/"
      );
      setState(response.data._links["ua:item"]);
      setStateBkp(response.data._links["ua:item"]);
    }
    getListCities();
  }, []);
  return (
    <div className="listCitiesConteiner">
      <p>
        Welcome to Qualife, here you can find information, statistics,
        curiosities from more than 250 countries around the world!
      </p>
      <p>
        We appreciate the visit and take the time to know more about several
        places you want while you are here.
      </p>
      <SearchBar filteredCities={filteredCities} />
      <div className="listCitiesHome">
        {stateBkp.map((elem, i) => {
          return (
            <Link
              key={i}
              className="btn btn-outline-success buttonCustom"
              to={`cities/${elem.href.slice(46, -1)}`}
            >
              {elem.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ListCities;
