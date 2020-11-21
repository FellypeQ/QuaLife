import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-info text-light">
      <a className="navbar-brand text-light" href="/">
        Qualife
      </a>

      <div
        className="collapse navbar-collapse text-light"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="/">
              Home <span className="sr-only text-light">(current)</span>
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn btn-dark my-2 my-sm-0 text-light"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
