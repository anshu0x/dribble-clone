import React from "react";

function heroSec() {
  return (
    <>
      <section className="container-fluid hero-sec">
        <video
          className="hero-media-asset is-visible"
          autoPlay
          muted
          loop
          playsinline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        {/* ====> Tab Box  */}
        <div className="tab-box">
          <button type="button" className="btn active">
            discover
          </button>
          <button type="button" className="btn">
            Animation
          </button>
          <button type="button" className="btn">
            Branding
          </button>
          <button type="button" className="btn">
            Illustration
          </button>
          <button type="button" className="btn">
            Print
          </button>
          <button type="button" className="btn">
            Product Design
          </button>
          <button type="button" className="btn">
            Web Design
          </button>
        </div>

        {/* Middle content  */}
        <div className="hero-container">
          <h1 className="hero-hd">
            Explore the world’s leading design portfolios
          </h1>

          <h6 className="hero-sub-hd">
            Millions of designers and agencies around the world showcase their
            portfolio work on Dribbble - the home to the world’s best design and
            creative professionals.
          </h6>

          {/* Search box  */}
          <div className="searchbox">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>

        {/* Tag Box  */}
        <div className="tag-box">
          <span>Trending searches</span>
          <strong>landing page</strong>
          <strong>ios</strong>
          <strong>food</strong>
          <strong>landingpage</strong>
          <strong>uxdesign</strong>
          <strong>app design</strong>
        </div>
      </section>
    </>
  );
}

export default heroSec;
