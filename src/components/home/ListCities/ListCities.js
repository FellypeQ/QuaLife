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
    <div>
      <SearchBar filteredCities={filteredCities} />
      <ul className="list-cities">
        {stateBkp.map((elem, i) => {
          return (
            <li key={i}>
              <Link
                className="city-list-li"
                to={`cities/${elem.href.slice(46, -1)}`}
              >
                {elem.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ListCities;
