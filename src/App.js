import "./App.css";
import Home from "./components/home/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/home/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route className="App" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
