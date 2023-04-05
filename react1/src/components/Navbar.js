import React from "react";
import { Link,} from "react-router-dom";

export default function Navbar() {
  const handleClick = () => {
    alert("About is added at end");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Elvo Construction
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/ ">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link onClick={handleClick} className="nav-link" to="./About">
                About us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/ "
                role="button"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <div className="dropdown-menu">
                <Link className="dropdown-item" to="./Product">
                  Reconstruction
                </Link>
                <a className="dropdown-item" href="/ ">
                  Construction
                </a>
                <a className="dropdown-item" href="/">
                  Interior
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
