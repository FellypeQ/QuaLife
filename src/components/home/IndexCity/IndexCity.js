import React from "react";
import "./IndexCity.css";
import ComponentCity from "../ComponentCity/ComponentCity";
function IndexCity() {
  return (
    <div className="component">
      <div>
        <h1>HOUSING</h1>
        <h4>SMALL APARTMENT</h4>
        <p>MEDIAN RENT</p>
        <h4>MEDIUM APARTMENT</h4>
        <p>MEDIAN RENT</p>
        <h4>LARGE APARTMENT</h4>
        <p>MEDIAN RENT</p>
      </div>
      <div className="">
        <h1>SAFETY</h1>
        <h4>CRIME RATE</h4>
        <p>INDEX SCORE</p>
        <h4>GUN DEATHS</h4>
        <p>PER 100K RESIDENTS/YEAR</p>
      </div>
      <div className="">
        <h1>EDUCATION</h1>
        <h4>UNIVERSITY QUALITY</h4>
        <p>INDEX SCORE</p>
        <h4>HIGH SCHOOL RANKING</h4>
        <p>PISA TEST</p>
        <h4>IB SCHOOLS</h4>
        <p>IN TOTAL</p>
      </div>
      <div className="">
        <h1>HEALTHCARE</h1>
        <h4>HEALTHCARE QUALITY</h4>
        <p>INDEX SCORE</p>
        <h4>HEALTHCARE EXPENDITURE</h4>
        <p>INDEX SCORE</p>
        <h4>LIFE EXPECTANCY</h4>
        <p>IN YEARS</p>
      </div>
      <div className="">
        <h1>INTERNET ACCESS</h1>
        <h4>DOWNLOAD</h4>
        <p>INDEX SCORE</p>
        <h4>UPLOAD</h4>
        <p>INDEX SCORE</p>
      </div>
      <div className="">
        <h1>OUTDOORS</h1>
        <h4>URBAN AREA ELEVATION</h4>
        <p>IN METERS</p>
        <h4>PRESENCE OF MONTAINS IN CITY</h4>
        <p>NUMBER</p>
      </div>
      <div className="">
        <h1>ECONOMY</h1>
        <h4>CURRENCY FOR URBAN AREA</h4>
        <p>CURRENCY</p>
        <h4>GDP GROWTH RATE</h4>
        <p>IN PERCENT</p>
        <h4>GDP PER CAPITA</h4>
        <p>IN DOLLAR</p>
      </div>
      <div className="">
        <h1>LANGUAGE</h1>
        <h4>SPOKEN LANGUAGES</h4>
        <p>CURRENCY</p>
        <h4>ENGLISH SKILLS</h4>
        <p>IN PERCENT</p>
      </div>
    </div>
  );
}

export default IndexCity;
