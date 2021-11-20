import React, { Fragment } from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <Fragment>
      <nav className="navbar navbar-light bg-dark mb-3">
        <div className="container">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand text-white text-lg">
              Movies App
            </Link>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default Nav;