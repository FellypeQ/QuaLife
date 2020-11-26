import React, { useEffect, useState } from "react";
import "./ComponentCity.css";

function ComponentCity(props) {
  console.log(props);
  function getData(id, ...args) {
    if (!props.data) {
      return "-";
    } else {
      var arr = [];
      if (props.data.find((elem) => elem.id === id)) {
        const objId = props.data.find((elem) => elem.id === id);
        for (let obj of args) {
          arr.push(objId.data.find((elem) => elem.id === obj));
        }
      } else {
        return "-";
      }
    }

    return arr;
  }
  console.log(props.img);
  function filterData(func, jsx) {
    // console.log("func1 :", func);
    if (func === "-") {
      return "-";
    }
    if (func[0] === undefined) {
      return "-";
    }
    // console.log("func2 :", []);
    return func[0][jsx];
  }
  // useEffect(() => {
  //   async function getImage() {
  //     try {
  //       const { id } = props.match.params;
  //       const response = await axios.get(
  //         `https://api.teleport.org/api/urban_areas/slug:${id}/details/`
  //       );
  //       const responseImage = await axios.get(
  //         `https://api.teleport.org/api/urban_areas/slug:${id}/images/`
  //       );

  //       // console.log("response :", response);
  //       setImage(responseImage.data.photos[0].image.mobile);
  //       setDetails(response.data.categories);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  //   getCityDetails();
  // }, []);

  return (
    <div className="compocity">
      <div className="image">
        <img src={props.img}></img>
      </div>
      <div className="housing">
        <h3>
          $
          {filterData(
            getData("HOUSING", "APARTMENT-RENT-SMALL"),
            "currency_dollar_value"
          )}
        </h3>
        <h3>
          $
          {filterData(
            getData("HOUSING", "APARTMENT-RENT-MEDIUM"),
            "currency_dollar_value"
          )}
        </h3>
        <h3>
          $
          {filterData(
            getData("HOUSING", "APARTMENT-RENT-LARGE"),
            "currency_dollar_value"
          )}
        </h3>
      </div>
      <div className="safety">
        <h3>
          {filterData(
            getData("SAFETY", "CRIME-RATE-TELESCORE"),
            "float_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("SAFETY", "CRIME-RATE-TELESCORE"),
                "float_value"
              ).toFixed(2)}
        </h3>
        <h3>{filterData(getData("SAFETY", "GUN-DEATH-RATE"), "int_value")}</h3>
      </div>
      <div className="education">
        <h3>
          {filterData(
            getData("EDUCATION", "QUALITY-OF-UNIVERSITIES-TELESCORE"),
            "float_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("EDUCATION", "QUALITY-OF-UNIVERSITIES-TELESCORE"),
                "float_value"
              ).toFixed(2)}
        </h3>
        <h3>{filterData(getData("EDUCATION", "PISA-RANKING"), "int_value")}</h3>
        <h3>
          {filterData(
            getData("EDUCATION", "QUALITY-OF-UNIVERSITIES-TELESCORE"),
            "float_value"
          ) === "-"
            ? "-"
            : (
                filterData(
                  getData("EDUCATION", "QUALITY-OF-UNIVERSITIES-TELESCORE"),
                  "float_value"
                ) * 100
              ).toFixed(2)}
        </h3>
      </div>
      <div className="healthcare">
        <h3>
          {filterData(
            getData("HEALTHCARE", "HEALTHCARE-QUALITY-TELESCORE"),
            "float_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("HEALTHCARE", "HEALTHCARE-QUALITY-TELESCORE"),
                "float_value"
              ).toFixed(2)}
        </h3>
        <h3>
          {filterData(
            getData("HEALTHCARE", "HEALTHCARE-COST-TELESCORE"),
            "float_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("HEALTHCARE", "HEALTHCARE-COST-TELESCORE"),
                "float_value"
              ).toFixed(2)}
        </h3>
        <h3>
          {filterData(
            getData("HEALTHCARE", "HEALTHCARE-LIFE-EXPECTANCY"),
            "float_value"
          )}
        </h3>
      </div>
      <div className="safety">
        <h3>
          {filterData(getData("NETWORK", "NETWORK-DOWNLOAD"), "float_value") ===
          "-"
            ? "-"
            : filterData(
                getData("NETWORK", "NETWORK-DOWNLOAD"),
                "float_value"
              ).toFixed(2)}{" "}
          Mpbs
        </h3>
        <h3>
          {filterData(getData("NETWORK", "NETWORK-UPLOAD"), "float_value") ===
          "-"
            ? "-"
            : filterData(
                getData("NETWORK", "NETWORK-UPLOAD"),
                "float_value"
              ).toFixed(2)}{" "}
          Mpbs
        </h3>
      </div>
      <div className="safety">
        <h3>
          {filterData(getData("OUTDOORS", "ELEVATION"), "float_value") === "-"
            ? "-"
            : filterData(
                getData("OUTDOORS", "ELEVATION"),
                "float_value"
              ).toFixed(2)}
        </h3>
        <h3>
          {filterData(
            getData("OUTDOORS", "ELEVATION-MOUNTAINS"),
            "float_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("OUTDOORS", "ELEVATION-MOUNTAINS"),
                "float_value"
              ).toFixed(2)}
        </h3>
      </div>
      <div className="healthcare">
        <h3>
          {filterData(
            getData("ECONOMY", "CURRENCY-URBAN-AREA"),
            "string_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("ECONOMY", "CURRENCY-URBAN-AREA"),
                "string_value"
              )}
        </h3>
        <h3>
          {filterData(
            getData("ECONOMY", "GDP-GROWTH-RATE"),
            "percent_value"
          ) === "-"
            ? "-"
            : (
                filterData(
                  getData("ECONOMY", "GDP-GROWTH-RATE"),
                  "percent_value"
                ) * 100
              ).toFixed(2)}
          %
        </h3>
        <h3>
          $
          {filterData(
            getData("ECONOMY", "GDP-PER-CAPITA"),
            "currency_dollar_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("ECONOMY", "GDP-PER-CAPITA"),
                "currency_dollar_value"
              )}
        </h3>
      </div>
      <div className="safety">
        <h3>
          {filterData(
            getData("LANGUAGE", "SPOKEN-LANGUAGES"),
            "string_value"
          ) === "-"
            ? "-"
            : filterData(
                getData("LANGUAGE", "SPOKEN-LANGUAGES"),
                "string_value"
              )}
        </h3>
        <h3>
          {filterData(
            getData("LANGUAGE", "ENGLISH-SKILLS-DETAIL"),
            "int_value"
          )}
        </h3>
      </div>
    </div>
  );
}

export default ComponentCity;
