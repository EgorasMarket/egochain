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
                  Gateway
                </span>{" "}
                <br />
                To Web3
              </div>
              <div className="wallet_div_section1_area_1_para">
                Unleash the full potential of your cryptocurrency assets and
                delve into the innovative Web3 landscape on Egochain. Start your
                journey today!
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
              {/* <WalletDummyImg /> */}
              <img
                src="/img/wallet_hero_img_dummy.png"
                alt=""
                className="wallet_div_section2_img"
              />
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
                  Security
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Uncompromising Security
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Egochain safeguards your wallet without ever touching your
                    private keys or secret phrase. You, and only you, control
                    your assets.
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
                  Effortless
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Effortless Exchange Deposits
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Ditch the complexities. Deposit crypto directly from
                    exchanges like MEXC with just a few clicks.
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
                  Experience
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Intuitive Mobile Experience
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Navigate your Web3 journey with ease. Our user-friendly
                    mobile app empowers you with powerful tools for seamless
                    crypto management.
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
                  Data
                </div>
                <div className="home_div_section3_area_body_cont1_body_text">
                  <div className="home_div_section3_area_body_cont1_body_text_title">
                    Data Sovereignty
                  </div>
                  <div className="home_div_section3_area_body_cont1_body_text_para">
                    Enjoy the peace of mind knowing your data belongs to you.
                    Egochain generates passwords and keys directly on your
                    device, giving you complete control over sharing and
                    privacy.
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
      {/* <section className="home_div_section4">
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
      </section> */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="wallet_div_section_last">
        <div className="container">
          <div className="wallet_div_section_last_area">
            <div className="wallet_div_section_last_area_1">
              <div className="wallet_div_section_last_area_1_title">
                Choose Egochain and unlock a world of crypto freedom
              </div>
              <div className="wallet_div_section_last_area_1_btns">
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
            <div className="wallet_div_section_last_area_2">
              <img
                src="/img/wallet_last_section_img.png"
                alt=""
                className="wallet_div_section_last_area_2_img"
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
