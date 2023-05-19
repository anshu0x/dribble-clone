import React from "react";
import MyLogo from "./mylogo";
import "../style/nav.css";

export default function nav() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <MyLogo />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
              aria-controls="mainNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa-solid fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">
                    go pro
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    hire designers
                  </a>
                </li>
              </ul>
            </div>
            <div className="nav-btn-box">
              <div className="d-m-none">
                <button type="button" class="btn search-Btn">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

              <div>
                <a href="/" type="button" class="btn signin-btn">
                  Sign in
                </a>
              </div>

              <div className="d-m-none">
                <a href="/" type="button" class="btn my-btn btn-prim">
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
