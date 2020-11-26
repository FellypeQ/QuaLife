import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

import "./Salaries.css";

function Salaries(props) {
  const [siteCountry, setsiteCountry] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [profission, setProfission] = useState({
    actual: "Account Manager",
    select: "",
  });
  const [jobsList, setJobList] = useState([]);
  const [typeSalary, setTypeSalary] = useState(1);

  useEffect(() => {
    async function listJobs() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/salaries/`
      );
      setJobList(response.data.salaries.map((e) => e.job.title));
    }
    listJobs();
  }, []);

  useEffect(() => {
    async function catchCountry() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/`
      );
      setsiteCountry(response.data._links["ua:countries"][0].href);
    }
    catchCountry();
  }, [props.city]);

  useEffect(() => {
    async function countryData() {
      const response = await axios.get(`${siteCountry}salaries/`);
      setCountryList([
        response.data.salaries.find((e) => e.job.title === profission.actual)
          .salary_percentiles.percentile_25 / 25,
        ...Object.values(
          response.data.salaries.find((e) => e.job.title === profission.actual)
            .salary_percentiles
        ),
        response.data.salaries.find((e) => e.job.title === profission.actual)
          .salary_percentiles.percentile_50 * 2,
      ]);
    }
    countryData();
  }, [siteCountry, profission.actual]);

  useEffect(() => {
    async function cityData() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.city}/salaries/`
      );
      setCityList([
        response.data.salaries.find((e) => e.job.title === profission.actual)
          .salary_percentiles.percentile_25 / 25,
        ...Object.values(
          response.data.salaries.find((e) => e.job.title === profission.actual)
            .salary_percentiles
        ),
        response.data.salaries.find((e) => e.job.title === profission.actual)
          .salary_percentiles.percentile_50 * 2,
      ]);
    }
    cityData();
  }, [countryList]);

  useEffect(() => {
    renderGraph();
  }, [cityList, typeSalary]);

  function renderGraph() {
    let ctx = document.getElementById("myChart");
    let myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Minimum",
          "Minimum Average",
          "Average",
          "Maximum Average",
          "Maximum",
        ],
        datasets: [
          {
            label: "Country",
            data: countryList.map((e) => Math.round(e / typeSalary)),
            borderColor: "black",
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          {
            label: "City",
            data: cityList.map((e) => Math.round(e / typeSalary)),
            borderColor: "green",
            backgroundColor: "rgba(0,128,0,0.25)",
          },
        ],
      },
    });
  }

  function randleSelection(event) {
    setProfission({
      actual: event.target.value,
      ["select"]: event.target.value,
    });
  }
  function randleTypeAverage(event) {
    setTypeSalary(event.target.value);
  }

  return (
    <div id={props.id} className="grafic">
      <h3>AVERAGE SALARY</h3>
      <div className="graficSelection">
        <select
          onChange={randleSelection}
          value={profission.select}
          name="select"
          className="btn-outline-success"
        >
          {jobsList.map((e, idx) => (
            <option key={idx} value={e} name={e}>
              {e}
            </option>
          ))}
        </select>
        <select
          onChange={randleTypeAverage}
          value={typeSalary}
          name="typeSalary"
          className="btn-outline-success"
        >
          <option value="1" name="Annual">
            Annual
          </option>
          <option value="12" name="Monthly">
            Monthly
          </option>
        </select>
      </div>
      <canvas id="myChart"></canvas>
    </div>
  );
}

export default Salaries;
