import React from "react";
import Icon from "./Icon";
const Egax = () => {
  return (
    <div className="egox_token_div">
      <section className="egox_token_div_section1">
        <div className="container">
          <div className="egox_token_div_section1area">
            <div className="egox_token_div_section1area_cont1">
              <div className="egox_token_div_section1area1">
                <div className="egox_token_div_section1area1_title">
                  Egochain (EGAX) coin
                </div>
                <div className="egox_token_div_section1area1_para">
                  Egochain's robust fee structure ensures network sustainability
                  and incentivizes participation through token distribution.
                </div>
              </div>
              <div className="egox_token_div_section1area2">
                <img
                  src="/img/1_inch_token_image_dummy.png"
                  alt=""
                  className="egox_token_div_section1area2_img"
                />
              </div>
            </div>
            <div className="egox_token_div_section1area_cont2">
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  $0.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Current Price
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  0.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Circulating Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  0.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Total Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">0</div>
                <div className="home_div_section1_area_stats_div1_para">
                  Holders
                </div>
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
      <section className="home_div_section4">
        <div className="container">
          <div className="home_div_section4_area">
            {/* <div className="home_div_section4_area_tile">
              The most adopted scaling technology
            </div> */}
            <div className="home_div_section4_area_body">
              <div className="home_div_section4_area_body_cont">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Transaction fees (EGAX)
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    Cover operational costs and prevent resource abuse. System
                    fees are burned, while network fees reward consensus
                    nodes, driving their commitment.
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
              </div>
              <div className="home_div_section4_area_body_cont2a">
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Token Generation
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    5 EGAX tokens are minted per block, allocated as follows:
                    <br />
                    <br />
                    * 10%: EGC stakers (incentivizing network security)
                    <br />
                    <br />
                    * 70%: Apex EV riders (promoting adoption and engagement)
                    <br />
                    <br />* 20%: Validators (rewarding block validation)
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
                <div className="home_div_section4_area_body_cont1_img_div2">
                  <Icon />
                </div>
              </div>
              <div className="home_div_section4_area_body_cont3">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Accessibility and Ease of Use
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    * Minimal EGaX Unit: 0.00 000001 EGAX, enabling
                    microtransactions and fostering affordability.
                    <br />
                    <br />
                    * Staking-Free Token Claiming: No EGAX staking required to
                    receive earned tokens.
                    <br />
                    <br /> * Seamless EGAX Claiming : Apex EVs integrate a
                    built-in claim function for effortless token acquisition.
                  </div>
                  {/* <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light4.svg"
          alt=""
          className="home_div_section1_bg_light4"
        />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
    </div>
  );
};

export default Egax;
