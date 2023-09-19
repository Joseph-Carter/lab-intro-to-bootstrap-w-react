import React from "react";

const Nav= () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-1" href="#">
          Travel
          <span
            style={{ color: "gold", fontFamily: "Snell Roundhand, cursive" }}
          >
            Blog
          </span>
        </a>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Popular Posts
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;