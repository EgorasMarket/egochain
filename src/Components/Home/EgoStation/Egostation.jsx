import React from "react";
import "./egostation.css";
import Grid from "../Grid";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import SendIcon from "@mui/icons-material/Send";

export const fadeIn = (direction) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};
export const opacity = () => {
  return {
    hidden: {
      opacity: 0,
    },
    visible: { opacity: 1 },
  };
};
export const fadeHorizontal = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};

export const reveal = () => {
  return {
    hidden: {
      left: 0,
    },
    visible: { left: "100%" },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 1.5,
      opacity: 0.2,
    },
    visible: { scale: 1.2, opacity: 0.8 },
  };
};

export const transition = () => {
  return {
    duration: 0.75,
    delay: 0.3,
    ease: "easeIn",
  };
};
export const transition2 = () => {
  return {
    duration: 1.5,
    delay: 0.3,
    ease: "easeIn",
  };
};

const Egostation = () => {
  return (
    <div className="egostation_div">
      <section className="egostation_div_section">
        <div className="container">
          <div className="egostation_div_section_area">
            <div className="egostation_div_section_area_1">
              <div className="egostation_div_section_area_1_title">
                Egoras Charging Stations (ERC-404)
              </div>
              <div className="egostation_div_section_area_1_para">
                Egoras is leveraging the ERC-404 token standard to tokenize
                ownership of its “EgoStation” charging stations
              </div>
            </div>
            <motion.div
              variants={fadeIn("Up")}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="egostation_div_section_area_2"
            >
              <img
                src="/img/egostation.png"
                alt=""
                className="egostation_div_section_area_2_img"
              />
            </motion.div>
          </div>
        </div>
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />

        <Grid />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ================= */}
      {/* ================= */}
      {/* ================= */}
      {/* ================= */}
      {/* ================= */}
      {/* ================= */}
      {/* ================= */}
      <section className="egostation_div_section_how_it_works">
        <div className="container">
          <div className="egostation_div_section_how_it_works_area">
            <div className="home_div_section3_area_title">
              How It Works
              <div className="home_div_section3_area_para">
                Egostation leverages the ERC404 token standard on Egochain,
                granting it unique functionalities. It can be traded on
                exchanges as an ERC20 token or sold as NFTs on OpenSea.
              </div>
            </div>

            <div className="home_div_section3_area_body">
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Exchange
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Exchange
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Egostation functions seamlessly on exchanges just like other
                    ERC20 tokens. Users can buy and sell Egostation tokens on
                    exchanges.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* =========== */}
              {/* =========== */}
              {/* =========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                {" "}
                <div className="home_div_section3_area_body_cont1_title">
                  NFT
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    NFT Marketplace
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Egostation tokens can be represented as NFTs on OpenSea.
                    Businesses seeking to establish charging stations can
                    purchase these NFTs. Each NFT can be redeemed for a physical
                    charging station setup.
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* ========= */}
              {/* ========= */}
              {/* ========= */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Rewards
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Egax Rewards
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Businesses that acquire Egostation NFTs and redeem them for
                    physical stations benefit in two ways:
                    <ul className="home_div_section3_area_body_cont1_body_text_para_div">
                      <li className="home_div_section3_area_body_cont1_body_text_para_div_li">
                        <div className="home_div_section3_area_body_cont1_body_text_para_div_li_title">
                          Charging Fees
                        </div>
                        They earn revenue by providing charging services for
                        Apex 28, EGC-28, and EGENX vehicles.
                      </li>
                      <li className="home_div_section3_area_body_cont1_body_text_para_div_li">
                        <div className="home_div_section3_area_body_cont1_body_text_para_div_li_title">
                          Egochain Block Rewards
                        </div>
                        Additionally, they receive block rewards in the form of
                        EGAX tokens..
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>

              {/* ======== */}
              {/* ======== */}
              {/* ======== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section3_area_body_cont1"
              >
                <div className="home_div_section3_area_body_cont1_title">
                  Benefits
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Token Holder Benefits
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    By locking a portion of their Egostation tokens, holders can
                    also earn:
                    <div className="home_div_section3_area_body_cont1_body_text_para_div">
                      <li className="home_div_section3_area_body_cont1_body_text_para_div_li">
                        <div className="home_div_section3_area_body_cont1_body_text_para_div_li_title">
                          Block Rewards
                        </div>
                        Similar to businesses, they can receive EGAX block
                        rewards.
                      </li>
                      <li className="home_div_section3_area_body_cont1_body_text_para_div_li">
                        <div className="home_div_section3_area_body_cont1_body_text_para_div_li_title">
                          Profit Sharing
                        </div>
                        They are entitled to 50% of the charging fees generated
                        by stations established through redeemed NFTs.
                      </li>
                    </div>
                  </div>
                </div>
                <div className="home_div_section3_area_body_cont1_icon">
                  <svg
                    data-v-25ecef37=""
                    data-v-706ceafa=""
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="4.08823"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="27.9115"
                      cy="27.0335"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <circle
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      cx="16.0003"
                      cy="4.97105"
                      r="3.08824"
                      stroke="white"
                      stroke-width="1.5"
                    ></circle>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M14.0242 8.49609L5.62305 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M17.9756 8.49609L26.3767 23.4981"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>{" "}
                    <path
                      data-v-25ecef37=""
                      data-v-706ceafa=""
                      d="M8.05859 27.0273H23.9409"
                      stroke="white"
                      stroke-width="1.5"
                    ></path>
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light"
        />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />

        {/* <Grid /> */}
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      {/* ================== */}
      <section className="home_div_section6">
        <div className="container">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="home_div_section6_area"
          >
            {" "}
            <div className="home_div_section6_area_1">
              <div className="home_div_section6_area_1_title">
                Stay up to date
              </div>
              <div className="home_div_section6_area_1_text">
                Be the first to know about the latest updates and launches.
                {/* <div className="home_div_section6_area_1_text_div">
                  {" "}
                  <a
                    href="https://play.google.com/store/apps/details?id=io.egox.dex&hl=be&gl=US"
                    target="_blank"
                  >
                    <button className="header_div_area_2_btn">
                      Get App{" "}
                      <img
                        src="/img/play_store_icon.png"
                        alt=""
                        className="header_div_area_2_btn_img"
                      />
                    </button>
                  </a>
                  <button className="header_div_area_2_btn2">
                    <div className="header_div_area_2_btn2_div">
                      Get App <span>coming soon</span>
                    </div>
                    <img
                      src="/img/apple_store_icon.webp"
                      alt=""
                      className="header_div_area_2_btn2_img"
                    />
                  </button>
                </div> */}
              </div>

              <div className="home_div_section6_area_1_input_div">
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="home_div_section6_area_1_input_div_input"
                />
                <button className="home_div_section6_area_1_input_div_btn">
                  <SendIcon />
                </button>
              </div>
            </div>
            <div className="home_div_section6_area_2">
              {" "}
              <Spline
                scene="https://prod.spline.design/TVLoAomGQBQWA2NS/scene.splinecode"
                className="home_div_section1_area_2_spline_scene2"
              />
            </div>
          </motion.div>
        </div>

        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
        <Grid />
      </section>
    </div>
  );
};

export default Egostation;
