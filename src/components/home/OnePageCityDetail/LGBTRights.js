import React, { useState, useEffect } from "react";
import axios from "axios";

import "./LGBTRights.css";

function LGBTRights(props) {
  const [state, setState] = useState({ list: [], cityName: "" });
  let tempCityName = "";

  useEffect(() => {
    async function LgbtRights() {
      const response = await axios.get(
        `https://api.teleport.org/api/urban_areas/slug:${props.id}/details/`
      );
      props.id.split("-").forEach((ele) => {
        tempCityName += `${ele.slice(0, 1).toUpperCase() + ele.slice(1)} `;
      });
      setState({
        list: response.data.categories.find((e) => e.label === "Tolerance")
          .data,
        cityName: tempCityName,
      });
    }
    LgbtRights();
  }, [props]);

  function category(list, label) {
    const test = list.find((e) => e.label === label)
      ? list.find((e) => e.label === label).string_value.slice(0, 1)
      : "";
    switch (test) {
      case "✔":
        return "green";
        break;
      case "✖":
        return "red";
        break;
      default:
        return "yellow";
    }
  }

  return (
    <div id={props.idHtml} className="lgbtCard">
      <h3>LGBTQIA+ RIGHTS IN {state.cityName.toUpperCase()}</h3>
      <div className="lgtbTextImage">
        <div
          className="lgbtCard lgbtCardImage"
          style={{
            boxShadow: `${category(
              state.list,
              "LGBT homosexuality rights"
            )} 0px 0px 5px`,
          }}
        >
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODYiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCA4NiAzOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+R3JvdXA8L3RpdGxlPjxnIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTg1LjcgMTUuNzVjMC01Ljg1LTQuNzUtMTAuNi0xMC42LTEwLjYtMi44NSAwLTUuNCAxLjEtNy4zIDIuOTVsLS4zLjNjLS41NS41NS0xIDEuMTUtMS40IDEuODUgMCAwLS43IDEuMDUtMSAyLjEtLjQgMS4xLS42IDIuMjUtLjYgMy40NSAwIDEuNTUuMzUgMyAuOSA0LjMuNS0uNjUuOTUtMS40NSAxLjItMi4zLjI1LS42LjQ1LTEuMjUuNjUtMiAuMi0uOC42LTIuMiAxLjItMy4zLjMtLjYuNTUtLjk1Ljk1LTEuNGwuMy0uM2MxLjM1LTEuNDUgMy4zLTIuNCA1LjQtMi40IDQuMSAwIDcuNCAzLjMgNy40IDcuNCAwIDQuMS0zLjMgNy40LTcuNCA3LjQtMi4xNSAwLTQuMDUtLjktNS40LTIuNC0uNS45NS0xLjE1IDEuODUtMS45IDIuNjUgMS41NSAxLjUgMy41NSAyLjUgNS43NSAyLjh2NS42NWwtMS43LTEuNy0yLjIgMi4yIDUuNDUgNS40NSA1LjQ1LTUuNDUtMi4yLTIuMi0xLjcgMS43di01LjdjNS4xLS43NSA5LjA1LTUuMTUgOS4wNS0xMC40NXoiLz48cGF0aCBkPSJNNjguOSAyMS4zcy43LTEuMDUgMS0yLjFjLjQtMS4xLjYtMi4yNS42LTMuNDUgMC0xLjUtLjMtMi45NS0uOS00LjI1di0uMDVjLS4xNS4yLS4yNS40LS40LjYtLjI1LjQ1LS41Ljk1LS43IDEuNDUtLjI1LjY1LS41NSAxLjQtLjc1IDIuMjUtLjIuNzUtLjYgMi4xLTEuMTUgMy4yLS4zLjctLjYgMS4wNS0xIDEuNS0uMS4xLS4yLjI1LS4zLjM1LTEuMzUgMS40NS0zLjMgMi40LTUuNCAyLjQtNC4xIDAtNy40LTMuMy03LjQtNy40IDAtNC4xIDMuMy03LjQgNy40LTcuNCAyLjE1IDAgNC4wNS45IDUuNCAyLjQuNS0uOTUgMS4xNS0xLjg1IDEuOS0yLjY1LTEuOS0xLjgtNC41LTIuOTUtNy4zLTIuOTUtNS44NSAwLTEwLjYgNC43NS0xMC42IDEwLjYgMCA1LjMgMy45NSA5LjcgOS4wNSAxMC40NXY1LjY1bC0xLjctMS43LTIuMiAyLjIgNS40NSA1LjQ1IDUuNDUtNS40NS0yLjItMi4yLTEuNyAxLjd2LTUuN2MyLjItLjM1IDQuMi0xLjMgNS43LTIuOGwuMy0uMy4wNS0uMDVjLjU1LS41IDEtMS4xIDEuNC0xLjc1ek0yNS40LjNMMTcuNjUuMjV2My4xaDIuNGwtNC4zIDQuM0MxNC4zIDYuOTUgMTIuNyA2LjUgMTEgNi41IDUuMTUgNi41LjQgMTEuMjUuNCAxNy4xUzUuMTUgMjcuOCAxMSAyNy44YzIuOCAwIDUuNC0xLjEgNy4zLTIuOWwuMy0uMy4wNS0uMDVjLjUtLjU1Ljk1LTEuMTUgMS4zNS0xLjc1IDAgMCAuNy0xLjA1IDEtMi4xLjQtMS4xLjYtMi4yNS42LTMuNDUgMC0xLjUtLjMtMi45NS0uOS00LjI1di0uMDVjLS4xNS4yLS4yNS40LS40LjYtLjMuNDUtLjUuOTUtLjcgMS40NS0uMjUuNjUtLjU1IDEuNC0uNzUgMi4yNS0uMi43NS0uNiAyLjEtMS4xNSAzLjItLjMuNy0uNiAxLjA1LTEgMS41LS4xLjEtLjIuMjUtLjMuMzUtMS4zNSAxLjQ1LTMuMyAyLjQtNS40IDIuNC00LjEgMC03LjQtMy4zLTcuNC03LjQgMC00LjEgMy4zNS03LjUgNy40LTcuNSAyLjE1IDAgNC4wNS45IDUuNCAyLjQuNDUtLjkgMS4wNS0xLjcgMS43LTIuNDVsNC4xLTQuMXYxLjJjMS0uNCAyLjA1LS42IDMuMS0uN1YuM2guMXoiLz48cGF0aCBkPSJNNDAuNTUuM0wzMi44LjI1djMuMWgyLjRsLTQuMyA0LjNjLTEuNDUtLjctMy4wNS0xLjE1LTQuNzUtMS4xNS0uMjUgMC0uNTUgMC0uOC4wNS0xLjA1LjEtMi4xNS4zNS0zLjEuNzVoLS4xYy0uMy4xLS41NS4yNS0uODUuNCAwIDAtLjA1IDAtLjA1LjA1LS44NS40NS0xLjcgMS4wNS0yLjQgMS43bC0uMy4zYy0uNTUuNTUtMSAxLjE1LTEuNCAxLjg1IDAgMC0uNyAxLjA1LTEgMi4xLS40IDEuMS0uNiAyLjI1LS42IDMuNDUgMCAxLjU1LjM1IDMgLjkgNC4zLjUtLjY1Ljk1LTEuNDUgMS4yLTIuMy4yNS0uNi40NS0xLjI1LjY1LTIgLjItLjguNi0yLjIgMS4yLTMuMy4zLS42LjU1LS45NS45NS0xLjRsLjMtLjNjMS4zNS0xLjQ1IDMuMy0yLjQgNS40LTIuNCA0LjEgMCA3LjQgMy4zIDcuNCA3LjQgMCA0LjEtMy4zIDcuNC03LjQgNy40LTIuMTUgMC00LjA1LS45LTUuNC0yLjQtLjUuOTUtMS4xNSAxLjg1LTEuOSAyLjY1IDEuOSAxLjggNC41IDIuOTUgNy4zIDIuOTUgNS44NSAwIDEwLjYtNC43NSAxMC42LTEwLjYgMC0zLTEuMjUtNS43LTMuMy03LjY1bDMuOTUtMy45NXYyLjRoMy4xTDQwLjU1LjN6Ii8+PC9nPjwvc3ZnPg=="
              alt="Icon-Same-Sex"
            />
            <h5>
              {state.list.find((e) => e.label === "LGBT homosexuality rights")
                ? state.list.find(
                    (e) => e.label === "LGBT homosexuality rights"
                  ).label
                : ""}
            </h5>
          </div>
          <h6>
            {state.list.find((e) => e.label === "LGBT homosexuality rights")
              ? state.list.find((e) => e.label === "LGBT homosexuality rights")
                  .string_value
              : ""}
          </h6>
        </div>
        <div
          className="lgbtCard lgbtCardImage"
          style={{
            boxShadow: `${category(
              state.list,
              "LGBT gender changing rights"
            )} 0px 0px 5px`,
          }}
        >
          <div>
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCAyNiA1OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48dGl0bGU+REFERUIyMkEtRUU2RS00OUEyLThGNEItMzUyQ0RBRTEyMTM0PC90aXRsZT48ZyBmaWxsPSIjNEE0QTRBIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxlbGxpcHNlIGN4PSIxMy4wMjIiIGN5PSI1LjM2MyIgcng9IjUuMDIzIiByeT0iNS4wNjUiLz48cGF0aCBkPSJNMjEuODIgMTUuODU3Yy0yLjQ5NC01LjM2My04Ljc5OC00LjM3LTguNzk4LTQuMzdzLTYuMzA0LS45OTMtOC43OTggNC4zN2wtMy45NCAxMy42NHMuMjYzIDMuNjQgMy41NDYgMS4xOTFsMy43NDItMTIuNTEzaC45ODVsLTYuMDQgMjAuOTg5SDh2MTcuMTQ4czIuMiAzLjE3OCA0LjMgMGwuMTMyLTE2Ljg4NC41OTEtLjA2Ni41OTEuMDY2LjEzMiAxNi44ODRjMi4xIDMuMTc4IDQuMyAwIDQuMyAwVjM5LjE2NGwtLjU1OC0yMC45OWguOTg1bDMuNzQyIDEyLjUxNGMzLjI4MyAyLjQ1IDMuNTQ2LTEuMTkxIDMuNTQ2LTEuMTkxbC0zLjk0LTEzLjY0eiIvPjwvZz48L3N2Zz4="
              alt="Icon-Change-Sex"
            />
            <h5>
              {state.list.find((e) => e.label === "LGBT gender changing rights")
                ? state.list.find(
                    (e) => e.label === "LGBT gender changing rights"
                  ).label
                : ""}
            </h5>
          </div>
          <h6>
            {state.list.find((e) => e.label === "LGBT gender changing rights")
              ? state.list.find(
                  (e) => e.label === "LGBT gender changing rights"
                ).string_value
              : ""}
          </h6>
        </div>
      </div>
      <div className="lgtbSecondsRightsAndBlood">
        <div
          className="lgbtCard rightBlod"
          style={{
            boxShadow: `${category(
              state.list,
              "LGBT marriage rights"
            )} 0px 0px 5px`,
          }}
        >
          <h5>
            {state.list.find((e) => e.label === "LGBT marriage rights")
              ? state.list.find((e) => e.label === "LGBT marriage rights").label
              : ""}
          </h5>
          <h6>
            {state.list.find((e) => e.label === "LGBT marriage rights")
              ? state.list.find((e) => e.label === "LGBT marriage rights")
                  .string_value
              : ""}
          </h6>
        </div>
        <div
          className="lgbtCard rightBlod"
          style={{
            boxShadow: `${category(
              state.list,
              "LGBT adoption rights"
            )} 0px 0px 5px`,
          }}
        >
          <h5>
            {state.list.find((e) => e.label === "LGBT adoption rights")
              ? state.list.find((e) => e.label === "LGBT adoption rights").label
              : ""}
          </h5>
          <h6>
            {state.list.find((e) => e.label === "LGBT adoption rights")
              ? state.list.find((e) => e.label === "LGBT adoption rights")
                  .string_value
              : ""}
          </h6>
        </div>
        <div
          className="lgbtCard rightBlod"
          style={{
            boxShadow: `${category(
              state.list,
              "LGBT blood donation regulations"
            )} 0px 0px 5px`,
          }}
        >
          <h5>
            {state.list.find(
              (e) => e.label === "LGBT blood donation regulations"
            )
              ? state.list.find(
                  (e) => e.label === "LGBT blood donation regulations"
                ).label
              : ""}
          </h5>
          <h6>
            {state.list.find(
              (e) => e.label === "LGBT blood donation regulations"
            )
              ? state.list.find(
                  (e) => e.label === "LGBT blood donation regulations"
                ).string_value
              : ""}
          </h6>
        </div>
      </div>
      <div
        className="lgbtDiscrimation"
        style={{
          boxShadow: `${category(
            state.list,
            "LGBT discrimination legality"
          )} 0px 0px 5px`,
        }}
      >
        <h5>
          {state.list.find((e) => e.label === "LGBT discrimination legality")
            ? state.list.find((e) => e.label === "LGBT discrimination legality")
                .label
            : ""}
        </h5>
        <h6>
          {state.list.find((e) => e.label === "LGBT discrimination legality")
            ? state.list.find((e) => e.label === "LGBT discrimination legality")
                .string_value
            : ""}
        </h6>
      </div>

      {state.list.find(
        (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
      ) ? (
        <div className="lgbtAcception">
          <h5>LGBT acceptance for society</h5>
          <div className="lgbtAcceptionGrafic">
            <div className="progress scoreProgress">
              <div
                className="progress-bar"
                style={{
                  backgroundColor: `green`,
                  width: `${
                    state.list.find(
                      (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
                    )
                      ? state.list.find(
                          (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
                        ).percent_value * 100
                      : ""
                  }%`,
                }}
                role="progressbar"
                aria-valuenow={
                  state.list.find(
                    (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
                  )
                    ? state.list.find(
                        (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
                      ).percent_value * 100
                    : 0
                }
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <h6>
              {state.list.find(
                (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
              )
                ? `${
                    state.list.find(
                      (e) => e.id === "LGBT-DETAIL-OPINION-PERCENT-IN-FAVOR"
                    ).percent_value * 100
                  }%`
                : "No data for mensuration"}
            </h6>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default LGBTRights;
