import React, { useEffect, useState } from "react";
import "./egc.css";
import { numberWithCommas } from "../Static";
// import { numberWithCommas } from "../Static";
const Egc = () => {
  const [egcPrice, setEgcPrice] = useState(0);
  useEffect(async (e) => {
    let string2 =
      "https://api.coingecko.com/api/v3/simple/price?ids=egoras-credit&vs_currencies=usd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=true";
    await fetch(string2)
      .then((resp) => resp.json())
      .then((data) => {
        const egc_usd_val = data["egoras-credit"].usd;
        console.log(egc_usd_val);
        if (egc_usd_val === "0") {
          setEgcPrice("0");
        } else {
          setEgcPrice(egc_usd_val);
        }
        // setEgcPrice(egc_usd_val);
      });
  }, []);
  return (
    <div className="egox_token_div">
      <section className="egox_token_div_section1">
        <div className="container">
          <div className="egox_token_div_section1area">
            <div className="egox_token_div_section1area_cont1">
              <div className="egox_token_div_section1area1">
                <div className="egox_token_div_section1area1_title">
                  Egochain (EGC) coin
                </div>
                <div className="egox_token_div_section1area1_para">
                  A Powerhouse for Innovation.
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
                  ${egcPrice}
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Current Price
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  74k
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Circulating Supply
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  ${numberWithCommas((egcPrice * 74467.35244).toFixed(2))}
                </div>
                <div className="home_div_section1_area_stats_div1_para">
                  Market Cap
                </div>
              </div>
              <div className="home_div_section1_area_stats_div1">
                <div className="home_div_section1_area_stats_div1_title">
                  35k
                </div>
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
      <section className="egox_token_div_section2">
        <div className="container">
          <div className="egox_token_div_section2_area">
            <div className="egox_token_div_section2_area_title">
              EGC Utility
            </div>
            <div className="home_div_section3_area_body_paragraph">
              Egochain offers a compelling blend of democratic governance and
              token scarcity. EGC holders directly influence the platform's
              trajectory through their votes for the Egochain Committee, a
              community-driven body responsible for the blockchain's stability
              and performance. Composed of elected members and consensus nodes,
              this committee ensures network liveliness and optimizes critical
              parameters. Additionally, EGC's indivisible units and limited
              total supply (74,467.35244 EGC) contribute to its distinct
              scarcity, enhancing its value proposition within the blockchain
              ecosystem.
            </div>
          </div>
        </div>
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
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

export default Egc;
