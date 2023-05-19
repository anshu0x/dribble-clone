import React from "react";
import MyCard from "./myCard";

function mainSec() {
  return (
    <>
      <section className="container-fluid secGap">
        {/* Filter Box  */}
        <div className="filter-box">
          <button type="button" className="btn ">
            Populer
          </button>
          <button type="button" className="btn ">
            <i class="fa-solid fa-filter pe-2"></i>
            <span
              class=" badge rounded-pill me-2"
              style={{ backgroundColor: "var(--primary)" }}
            >
              9
            </span>
            Filter
          </button>
        </div>

        {/* Show Hide filter box  */}
        <div className="showHide-filter">
          <div className="sort-box search-div">
            <label for="searchTag" class="form-label">
              Tag
            </label>
            <input type="email" class="form-control" id="searchTag"></input>
            <button type="button" className="btn clear-btn">
              Clear
            </button>
          </div>

          <div className="sort-box">
            <label for="searchTag" class="form-label">
              Color
            </label>
            <input type="email" class="form-control" id="searchTag"></input>
            <button type="button" className="btn clear-btn">
              Clear
            </button>
          </div>

          <div className="sort-box">
            <label for="searchTag" class="form-label">
              Color
            </label>
            <input type="email" class="form-control" id="searchTag"></input>
            <button type="button" className="btn clear-btn">
              Clear
            </button>
          </div>

          <div className="sort-box">
            <label for="searchTag" class="form-label">
              Color
            </label>
            <input type="email" class="form-control" id="searchTag"></input>
            <button type="button" className="btn clear-btn">
              Clear
            </button>
          </div>
        </div>

        <div className="cards-div">
          <MyCard />
        </div>

        <div className="signbtn">
        <div className="d-m-none" >
        <a href="/" type="button" class="btn my-btn btn-prim">
        Sign up to continue
        </a>
      </div>

      <div>
        <a href="/" type="button" class="btn signin-btn">
        or sign in
        </a>
      </div>
        </div>
       
      </section>
    </>
  );
}

export default mainSec;
