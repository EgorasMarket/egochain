import React from "react";
import Spline from "@splinetool/react-spline";

import Roadmap from "./Roadmap";

const RoadMapPage = () => {
  return (
    <>
      <section className="egox_token_div_section1">
        <div className="container">
          <div className="egox_token_div_section1area">
            <div className="egox_token_div_section1area_cont1">
              <div className="egox_token_div_section1area1">
                <div className="egox_token_div_section1area1_title">About</div>
                <div className="egox_token_div_section1area1_para">
                  Egochain spearheads the revolution in next-generation electric
                  vehicle technology through its pioneering decentralized
                  operating system.
                  <br />
                  <br />
                  Leveraging the world's fastest blockchain specifically
                  designed for real-world applications and readily deployable
                  Web3 modules, Egochain fosters a robust ecosystem primed for
                  mass adoption.
                  <br />
                  <br /> Its dApps boast unrivaled interoperability,
                  scalability, and true decentralization, empowering millions to
                  seamlessly integrate into the future of EV mobility.
                </div>
              </div>
              <div className="home_div_section1_area_2">
                <Spline
                  scene="https://prod.spline.design/TVLoAomGQBQWA2NS/scene.splinecode"
                  className="home_div_section1_area_2_spline_scene"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        /> */}
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      <section className="egox_token_div_section3">
        <div className="container">
          <div className="egox_token_div_section3_area">
            <div className="egox_token_div_section3_area_title">Road Map</div>
            <div className="egox_token_div_section3_area_body">
              <Roadmap />
            </div>
          </div>
        </div>
        <img
          src="/img/grains_bottom.png"
          alt=""
          className="grains_ellipse_roadmap"
        />
      </section>
    </>
  );
};

export default RoadMapPage;
