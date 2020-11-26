import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/home/Home";
import Navbar from "./components/home/Navbar/Navbar";
import OnePageCityDetail from "./components/home/OnePageCityDetail/OnePageCityDetail";
import CityDetail from "./components/home/CityDetails/CityDetail";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" className="App" component={Home} />
        <Route exact path="/cities/:id" component={OnePageCityDetail} />
        <Route exact path="/cities/compare/:id" component={CityDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
