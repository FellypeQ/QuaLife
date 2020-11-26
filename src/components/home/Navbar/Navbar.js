import React, { useState, useEffect } from "react";
import axios from "axios";

function Navbar(props) {
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
    <nav
      className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
      style={{ borderBottom: "solid 1px #28A745" }}
    >
      {" "}
      <img
        src="data:image/png;base64,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"
        alt="logo"
        style={{ height: "30px", marginRight: "1%" }}
      />
      <a className="navbar-brand" href="/">
        Qualife
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              All Cities <span className="sr-only text-light">(current)</span>
            </a>
          </li>
        </ul>
        <div>
          Qualife - Statistics of more than 250 cities around of the World
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///9QfFzP8J5Jd1W6y7+CqXZzlXxKd1lMeVhjim32+PbU9aHI1cteiWPL7JyMqZRbhGfm7Oh6m4OKsXqix4euwrSdwYOFpI1Dc1CmvKxskXbW4Nnf5+G+4JXu8u+SrpqctaOx1I5tl2tCb1V3n3Dd/aU6bEc4/SNLAAAHfElEQVR4nO2dbZeiIBSAIx3Dl0mzXCtNbXZ3/v9PXK0UFBQ0A5u9z7eZ4ymeIMB7r7RaAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABJkiWfK4SWZ7saOJvPyc4CwIQdGwTn33skyLYKq2WMoPwy7SHU3XJJdjkbq1ZJBvtPdeBmiwJigd8cIIt3NF+LEk/qP9KPv6FYYJj1P78BHN1qLHqmp/axgqXhesOJuBsFKcbHrhmPNIVgqhrpN+ijmESwVFzqjJqg9i2426FOO8tqOY6JbhkdnjG4+Pw6XrRyXw8dny3GZ49SkBTdov3Vddy2J6172rX7Enm4dDmdqjG4+r/J6D8kr3Y1L7ESvJXgZ6VcpXlojdXm7cJ8apFMEq16kv4mFbqEujk36cHOYIlgq/iKdiM+6jbok1Bj9muRXsv0iisHS9m7UTDq1CzuduLTZND+Sb+F2ah+6F+qLuLR9Tdz04ebPVMESMkyPuW6lDmRDs/mYOkjLTvxoDA1ft1KHkBjunzDcE8OlrflgCIZgqB8wBEMw1M+7GTrZOBznjQwz7+SHdjAW1PDUvvT1hp4f3JKyo3kTQ9Mam7rlsGDDJDTmCMsv1/CE5kk7LNXQ8edKqyzUMAvnElyo4VyZv+UaxvMJLtPwNKPgIg2TThvx6DXfWPaK3/kSGtj2I9MbCcmtzRRNRIE/luJkJtxqnFZqE+PQm1KzY81uiCTL/log22eb79CpTYwmBtNfYDiJqgLw1KlW8aguxMHUEgEpQ5fwKsObZBC1+pFaKfD0GggZQ/ewr7nyr5nFsHK0qBRyRtWIPJHvkTB0D2jz4HfPNTMZVkWOZtM0j6TFDGuyoNjQXe9JA/riALMZ0hPKiRg+k5QUGbpXKr+rwLDsr9OjaWFjiM9PlHYOGrrutl0uo8IQ4UcvkgoD45mc5KDhZd8ueVJk+Jg3yX8MU2AxzdC9flYlbuMNx6/3nQgMvpdxUv94pjZgwPDwm/l4ZQxH79piy8ZtyXtRjgJDduRJGOIJE7vj5QGtiG+VVT/JsCSNacVbMYBCQ2L6OsPVqqC32UGq0nDz2bT/lYarE6VYLYqqDDebP9uDEsPWTtty1BiWq8XXdf33lxrDHT3dpGoMv/bXcmPqKjKk407YfL3h+nK9rG83hMoMdyQVVi6Jrzdc138rM6TytThUYdi0X5khGably/xIQ/P7WIN+pmFanBp+pmELMARDMPw/DB9x7r/UzvsvN/T9robbX3cOfxrDr8e/Lj/C0L00sW7yZo/Yd+fhE1lDx9ntMtnYpxLDPrqP18gYpmYe2tUVdlhInaUhZZilnmlGQ2eQKDLMIuuWoUYY31LVQSF2FBpmXmEFj+AlCqyCn55SYxgFnbItfLSFI09gmOR2K9RavkPMe/hRhWEWcqruMBIFsgcNk5hzTInBe00Fhhn/RAph0nPA0Cn4pW4Ys4oKDFvhF7o51vCs2m+YWn2lmJyPbdBw08e41SKpFR+TQm/XyBr6JLPYhS12GVzxD72MW/G9+5sj3/Q8M27KdgXPDPcb9oz7O91OlNm1ceheKJpLjSpS/3h+1mw+73ii4Sqtc4v3lA5d6twkWKUMpRGuh8WReuc68isonxowrE+6MILcS3epSVVoMh+bIsNVTKVxo+OzfVgOBHx7gfqxalJlyxQ1qDJ0qHmzLkFgBtQIw3LgY0xKUEiklXl/VYY0zZgaXhCHDVd5K/fdeDBDX4NhVK8dgisFhg79T1ICx1Q1KDdM83rmE90TCQxbRLj3WpWGZuzHVr3dwoJv4SjDU3OpwZTeqDSMv6sK3/tVR3ExpbRhQu3sDeZSlYbUgxN2Lj7lRdKwOgyRdCFbW6TJ0JKIS0gZZif6METeCqvJEBtP3wFXOJFN3WVgXHCuUWr4Td2UY/T8TOOdaT/D5t5TqzT0iiKP7WYyxexcs6MOuBUaZn5rx418fuhH+XroJHVtEGYP6/GOpNhNGKehj0LEhtW3QdKxa6vP+GPvD+ljuQSGJhIPUG2G9RaLLYyVN6QFDTQUm9RhSA426i6K0ob0SYjGeXBa1mJY1LdP3aZJG1KPC2FBAbEWw3phZGp/ZQ1bjwuVu12asPOiagydkF4ZmjPiJhu2nvgyjq2C4+9Ch2FxxH6zNJAHe5mWSxqmaICjDsOq4TjwzWS32yWnJhTILoiShtHQc5fHzl5JheEj6H2PBVMl3WysTdIwX5ohFetrBePZKVLScPDxbg2GeU8MnnOym6ShhdlX02kYYW6DDE5iRs7QOQ88DKxlpvFsNlWEjZiz05I1HOhCJgqrZC7N8qDzyIhhc8M0kqN0N0hnaCja06TFmfpZEBRG/K3yiHsLaZTt2pzULPw4DGP/5PUe4vrWhlKAIRiCIRiCIRiCIRiC4XsbOpOhDdeSPy/DsqYNpzemzxAF9nSol5H9hSD+rwYRnmgNddhoyxCNP9STc7onQr3FlmJmag3dnJbhjwQM3x8wfH/A8P35DwzHn8b0ZqwkfzpbRERYxOsQntjAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALI5/d034DV/jCMIAAAAASUVORK5CYII="
          alt="logo"
          style={{ height: "30px", marginLeft: "1%" }}
        />
      </div>
    </nav>
  );
}

export default Navbar;

/*
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
*/
