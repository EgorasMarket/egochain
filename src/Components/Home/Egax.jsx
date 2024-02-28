import React, { useEffect } from "react";
import Icon from "./Icon";
import AmChart4Wrapper from "react-amcharts4";
import { PieChart } from "@amcharts/amcharts4/charts";
import "./egc.css";
// Configure any reguired theme
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_material from "@amcharts/amcharts4/themes/material";
am4core.useTheme(am4themes_material);
const config = {
  // Create pie series
  series: [
    {
      type: "PieSeries",
      dataFields: {
        value: "litres",
        category: "country",
      },
    },
    {
      type: "PieSeries",
      dataFields: {
        value: "percentage",
        category: "category",
      },
    },
  ],
  // Add data
  data: [
    {
      category: "Ecosystem",
      percentage: 80,
    },
    {
      category: "Public Sale",
      percentage: 0.05,
    },
    {
      category: "Private & OTC Sales",
      percentage: 9,
    },
    {
      category: "Team",
      percentage: 10,
    },
    {
      category: "Airdrop",
      percentage: 0.95,
    },
  ],
};

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
                  $6.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Current Price
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  25k
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Circulating Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  50M
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Total Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  $150,000.00
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Market Cap
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
      {/* <div style={{ width: "80%", margin: "0 auto" }}>
        <AmChart4Wrapper
          config={config}
          id="amcharts-4"
          chartTypeClass={PieChart}
        />
      </div> */}
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      <section className="egox_token_div_section3b">
        <div className="container">
          <div className="egox_token_div_section3_area">
            <div className="egox_token_div_section3_area_titleb">
              Tokenomics
              {/* <div className="egox_token_div_section3_area_title_para">
                A total of 280 million XIFY tokens have been allocated to
                various stakeholders, ensuring a robust and sustainable
                ecosystem
              </div> */}
            </div>
            <div className="egox_token_div_section3_area_body">
              <AmChart4Wrapper
                config={config}
                id="amcharts-4"
                chartTypeClass={PieChart}
              />
              <div className="supply_div">
                <div className="supply_div_title">Token Supply</div>
                <div className="supply_div_amnt">50,000,000</div>
              </div>
            </div>
            <div className="mobile_supply_div">
              Total Supply{" "}
              <div className="mobile_supply_div_span">50,000,000</div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />

        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section>
      {/* ========================= */}
      {/* ========================= */}
      {/* ========================= */}
      <section className="egox_token_div_section3b">
        <div className="container">
          <div className="egox_token_div_section3_area">
            <div className="egox_token_div_section3_area_titleb">
              Token Distribution Schedule
            </div>
            <div className="distribution_div_area">
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Public Sale
                </div>
                <div className="distribution_div_area_cont1_body">
                  <li className="distribution_div_area_cont1_body_cont1">
                    100% of tokens unlocked at purchase.
                  </li>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Private Sale
                </div>
                <div className="distribution_div_area_cont1_body">
                  <li className="distribution_div_area_cont1_body_cont1">
                    40% of tokens unlocked at purchase.
                  </li>
                  <li className="distribution_div_area_cont1_body_cont1">
                    3 months lockup period followed by 10% of tokens unlocked
                    monthly for the remaining period
                  </li>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Team, Partnerships & Advisory
                </div>
                <div className="distribution_div_area_cont1_body">
                  <li className="distribution_div_area_cont1_body_cont1">
                    18 months full lockup period
                  </li>
                  <li className="distribution_div_area_cont1_body_cont1">
                    15% of tokens unlocked quarterly thereafter.
                  </li>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Marketing
                </div>
                <div className="distribution_div_area_cont1_body">
                  <li className="distribution_div_area_cont1_body_cont1">
                    5% of tokens unlocked at purchase
                  </li>
                  <li className="distribution_div_area_cont1_body_cont1">
                    6 months lockup period followed by 5% of tokens unlocked
                    quarterly thereafter.
                  </li>
                </div>
              </div>
              <div className="distribution_div_area_cont1">
                <div className="distribution_div_area_cont1_title">
                  Ecosystem
                </div>
                <div className="distribution_div_area_cont1_body">
                  <li className="distribution_div_area_cont1_body_cont1">
                    80% of the total token supply (40 million tokens) will be
                    distributed for ecosystem growth over a 10-year period
                    according to pre-defined limitations.
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />

        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
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
        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
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
