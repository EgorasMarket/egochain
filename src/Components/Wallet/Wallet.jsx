import React from "react";
import Grid from "../Home/Grid";
import "./wallet.css";
import SendIcon from "@mui/icons-material/Send";

import WalletDummyImg from "./WalletDummyImg";
const Wallet = () => {
  return (
    <div className="wallet_div">
      {" "}
      <section className="wallet_div_section1">
        <div className="container">
          <div className="wallet_div_section1_area">
            <div className="wallet_div_section1_area_1">
              <div className="wallet_div_section1_area_1_title">
                Egochain Wallet
                <br />
                Your{" "}
                <span className="wallet_div_section1_area_1_title_span">
                  Web3
                </span>{" "}
                <br />
                entry point
              </div>
              <div className="wallet_div_section1_area_1_para">
                The most powerful tool for managing your assets and exploring
                Web3
              </div>
              <div className="wallet_div_section1_area_1_btn_divs">
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
              </div>
            </div>
            <div className="wallet_div_section2">
              <WalletDummyImg />
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

        <Grid />
        <img src="/img/grains_ellipse.png" alt="" className="grains_ellipse" />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <div className="home_div_section3_area">
            {/* <div className="home_div_section3_area_title">
              Why Build on Egochain?
              <div className="home_div_section3_area_para">
                Build interoperable decentralized applications with the combined
                power of Ethereum's swift smart contract development and Cosmos
                SDK's seamless interoperability.
              </div>
            </div> */}

            <div className="home_div_section3_area_body">
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Secure Network
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Powered by EGAX's Secure Network
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Node validators actively safeguard the EGOCHAIN by securing
                    consensus, earning EGAX tokens as their well-deserved
                    reward.
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
              </div>
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Unleashing
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Unleashing Interoperability
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Powered by the robust Cosmos SDK, Egochain seamlessly
                    connects to the vibrant Cosmos ecosystem (20+ chains, $40B+)
                    through the IBC protocol.
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
              </div>
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Unleash
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Unleash the Full Potential of Solidity
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Egochain's EVM compatibility empowers developers to leverage
                    the familiar Solidity language and existing dApps, while
                    reaping the benefits of Egochain's superior scalability and
                    security.
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
              </div>
              <div className="home_div_section3_area_body_cont1">
                <div className="home_div_section3_area_body_cont1_title">
                  Transactions
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Transactions by the Millions
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Tendermint Consensus delivers single-block finality and
                    unmatched scalability, ensuring Egochain can handle the
                    demands of thousands of protocols and millions of users –
                    effortlessly.
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
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light3.svg"
          alt=""
          className="home_div_section1_bg_light3"
        />
      </section>
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section4">
        <div className="container">
          <div className="home_div_section4_area">
            <div className="home_div_section4_area_body">
              <div className="home_div_section4_area_body_cont">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <img
                    src="/img/egochain_wallet_dummy1.webp"
                    alt=""
                    className="home_div_section4_area_body_cont1_img_div_img"
                  />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Power the future of Web3 with next-generation dApps
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    At Egochain, we see dApps as the engine driving Web3's
                    revolution. That's why we built Egochain OS, a streamlined
                    3-step program empowering developers to launch innovative
                    dApps directly onto the next generation of electric
                    vehicles.
                  </div>
                  <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div>
                </div>
              </div>
              <div className="home_div_section4_area_body_cont2a">
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    The Blockchain Paving the Way for Real-World Adoption
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    Built on the robust Cosmos SDK and leveraging the secure
                    Ethermint consensus mechanism, Egochain is an EVM-compatible
                    blockchain designed for mass adoption. Its human-readable
                    addresses simplify user interactions, making the transition
                    to blockchain technology seamless for millions.
                  </div>
                  <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div>
                </div>
                <div className="home_div_section4_area_body_cont1_img_div2">
                  <img
                    src="/img/egochain_wallet_dummy1.webp"
                    alt=""
                    className="home_div_section4_area_body_cont1_img_div_img"
                  />
                </div>
              </div>
              <div className="home_div_section4_area_body_cont">
                <div className="home_div_section4_area_body_cont1_img_div">
                  <img
                    src="/img/egochain_wallet_dummy1.webp"
                    alt=""
                    className="home_div_section4_area_body_cont1_img_div_img"
                  />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Power the future of Web3 with next-generation dApps
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    At Egochain, we see dApps as the engine driving Web3's
                    revolution. That's why we built Egochain OS, a streamlined
                    3-step program empowering developers to launch innovative
                    dApps directly onto the next generation of electric
                    vehicles.
                  </div>
                  <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div>
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section6">
        <div className="container">
          <div className="home_div_section6_area">
            <div className="home_div_section6_area_1">
              <div className="home_div_section6_area_1_title">
                Stay up to date
              </div>
              <div className="home_div_section6_area_1_text">
                Be the first to know about the latest updates and launches.
              </div>

              <div className="wallet_div_section1_area_1_btn_divs">
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
              </div>
            </div>
            <div className="home_div_section6_area_2_wallet">
              <img
                src="/img/last_dummy_wallet_img.svg"
                alt=""
                className="home_div_section6_area_2_wallet_img"
              />
            </div>
          </div>
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

export default Wallet;
