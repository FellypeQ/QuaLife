import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import ListCities from "./ListCities/ListCities";

import "./Home.css";

function Home() {
  return (
    <div className="homePage">
      <ListCities />
    </div>
  );
}

export default Home;
