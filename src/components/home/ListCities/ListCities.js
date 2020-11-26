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
    <div style={{ backgroundColor: "#F8F9FA", width: "100%", height: "500vh" }}>
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
