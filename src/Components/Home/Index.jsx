import React from "react";
import Spline from "@splinetool/react-spline";
import "./Home.css";
import { Parallax } from "react-scroll-parallax";
import Grid from "./Grid";
import Icon from "./Icon";
import SendIcon from "@mui/icons-material/Send";
import XIcon from "@mui/icons-material/X";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import RedditIcon from "@mui/icons-material/Reddit";
import { motion } from "framer-motion";
import CountUp from "react-countup";

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

const Home = () => {
  // console.log('====================================');
  // console.log("jfjf");
  // console.log('====================================');
  const wallets = [
    {
      id: "1",
      title: "Coinbase",
      img: "/img/walletsImg/coinbase_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coinbase is a global digital wallet functioning as a web browser
            extension. With Coinbase, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "2",
      title: "Metamask",
      img: "/img/walletsImg/metamask_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Metamask is a global digital wallet functioning as a web browser
            extension. With Metamask, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "3",
      title: "Trust Wallet",
      img: "/img/walletsImg/trust_wallet_icon.jpeg",
      body: (
        <div className="wallets_body">
          <span>
            Trust Wallet is a global digital wallet functioning as a web browser
            extension. With Trust Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "4",
      title: "Kaikas",
      img: "/img/walletsImg/kaikas_wallet_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Kaikas is a global digital wallet functioning as a web browser
            extension. With Kaikas, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "5",
      title: "SafePal",
      img: "/img/walletsImg/safepal_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            SafePal is a global digital wallet functioning as a web browser
            extension. With SafePal, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "6",
      title: "Coin98",
      img: "/img/walletsImg/coin98_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Coin98 is a global digital wallet functioning as a web browser
            extension. With Coin98, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "7",
      title: "Huobi Wallet",
      img: "/img/walletsImg/huobi_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Huobi Wallet is a global digital wallet functioning as a web browser
            extension. With Huobi Wallet, you can safely and seamlessly manage
            the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "8",
      title: "D'Cent",
      img: "/img/walletsImg/dcent_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            D'Cent is a global digital wallet functioning as a web browser
            extension. With D'Cent, you can safely and seamlessly manage the
            Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
    {
      id: "9",
      title: "Exodus Wallet",
      img: "/img/walletsImg/exodus_icon.png",
      body: (
        <div className="wallets_body">
          <span>
            Exodus Wallet is a global digital wallet functioning as a web
            browser extension. With Exodus Wallet, you can safely and seamlessly
            manage the Egochain-based tokens that you control.
          </span>
          <br />
          <br />
          <span>
            As an HD wallet, Kaikas allows you to create more than one account
            with a single master seed phrase. Kaikas supports various types of
            Klaytn networks, and enables you to register your own customized
            tokens within the wallet. Kaikas also allows you to sign requests
            from Klaytn-based web BApps (Blockchain Applications).
          </span>
        </div>
      ),
    },
  ];
  // const item = { hidden: { x: -10, opacity: 0 } };
  return (
    <div className="Home_div">
      <section className="home_div_section1">
        <div className="container">
          <div className="home_div_section1_area">
            <motion.div
              variants={opacity()}
              transition={transition()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section1_area_1"
            >
              <div className="home_div_section1_area_1_div1">
                <div className="home_div_section1_area_1_div1_txt1">
                  <span className="home_div_section1_area_1_div1_txt1_span">
                    The High-Speed
                    <br /> Parallel Blockchain for
                  </span>
                  Electric Vehicles.
                </div>
                <div className="home_div_section1_area_1_div1_txt2">
                  Egochain is a public, permissionless Layer 1 blockchain
                  protocol aimed at fast-tracking the global shift to EVs. It
                  combines Cosmos' rapid transactions and compatibility with
                  Ethereum's developer ecosystem.
                </div>
              </div>
              <div className="home_div_section1_area_1_div2">
                <a href="https://egoscan.io/" target="_blank">
                  <button className="home_div_section1_area_1_div2_btn">
                    Explorer
                  </button>
                </a>
                <a href="https://egoswap.io" target="_blank">
                  <button className="home_div_section1_area_1_div2_btn2">
                    Get EGAX
                  </button>
                </a>
                {/* <a
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
                </a> */}
                {/* <button className="header_div_area_2_btn2">
                  <div className="header_div_area_2_btn2_div">
                    Get App <span>coming soon</span>
                  </div>
                  <img
                    src="/img/apple_store_icon.webp"
                    alt=""
                    className="header_div_area_2_btn2_img"
                  />
                </button> */}
              </div>
              <div className="backed_by_div">
                BACKED BY{" "}
                <img
                  src="/img/tekedia_logo.svg"
                  alt=""
                  className="backed_by_div_img"
                />
              </div>
            </motion.div>{" "}
            <motion.div
              variants={scale()}
              transition={transition2()}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              className="home_div_section1_area_2"
            >
              <Spline
                scene="https://prod.spline.design/TVLoAomGQBQWA2NS/scene.splinecode"
                className="home_div_section1_area_2_spline_scene"
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section4">
        <div className="container">
          <div className="home_div_section4_area">
            <div className="home_div_section3_area_title">
              Why Egochain
              <div className="home_div_section3_area_para">
                Electric vehicles (EVs) hold potential for sustainable
                transportation, but face obstacles like high costs, sparse
                charging infrastructure, and pricey charging. Egochain utilizes
                blockchain to tackle these hurdles and advance the global EV
                movement.
              </div>
            </div>
            <div className="home_div_section4_area_body_2">
              <div className="home_div_section4_area_body_2_cont1">
                <div className="home_div_section4_area_body_2_cont1_icon">
                  <svg
                    data-v-44de1e4b=""
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="crosshair z-2 p-relative"
                  >
                    <path d="M15 7.5H0M7.5 15V0" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="home_div_section4_area_body_2_cont1_txt">
                  <div className="home_div_section4_area_body_2_cont1_txt_title">
                    Affordable EV Production
                  </div>
                  Egochain's track-and-trace features enable manufacturers to
                  fight counterfeit parts and prevent diversion in their supply
                  chains. This ensures product quality, reduces waste, and cuts
                  costs related to fraudulent components, leading to more
                  affordable electric vehicles (EVs).
                </div>
              </div>
              <div className="home_div_section4_area_body_2_cont1">
                <div className="home_div_section4_area_body_2_cont1_icon">
                  <svg
                    data-v-44de1e4b=""
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="crosshair z-2 p-relative"
                  >
                    <path d="M15 7.5H0M7.5 15V0" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="home_div_section4_area_body_2_cont1_txt">
                  <div className="home_div_section4_area_body_2_cont1_txt_title">
                    Enhanced Charging Infrastructure
                  </div>
                  Egochain offers a solution through an open-source network of
                  charging stations built on blockchain technology. This
                  decentralized approach enables ownership for anyone, including
                  local businesses like grocery stores. Securely recorded
                  transactions on the blockchain minimize fraud and streamline
                  operations, further enhancing the charging infrastructure.
                </div>
              </div>
              <div className="home_div_section4_area_body_2_cont1">
                <div className="home_div_section4_area_body_2_cont1_icon">
                  <svg
                    data-v-44de1e4b=""
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="crosshair z-2 p-relative"
                  >
                    <path d="M15 7.5H0M7.5 15V0" stroke="currentColor"></path>
                  </svg>
                </div>
                <div className="home_div_section4_area_body_2_cont1_txt">
                  <div className="home_div_section4_area_body_2_cont1_txt_title">
                    Reduced Charging Costs
                  </div>
                  Egochain incentivizes green transportation by rewarding EV
                  owners with tokens for using less popular charging stations.
                  This approach balances the electrical grid load, promotes
                  energy efficiency, and contributes to a cleaner transportation
                  ecosystem. By reducing charging costs, Egochain tackles range
                  anxiety, a crucial step towards a successful transition to
                  sustainable mobility.
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <div className="home_div_section3_area">
            <div className="home_div_section3_area_title">
              Build on the fastest blockchain in the industry.
              <div className="home_div_section3_area_para">
                Build interoperable decentralized applications with the combined
                power of Ethereum's swift smart contract development and Cosmos
                SDK's seamless interoperability.
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
              </motion.div>
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
            <div className="home_div_section4_area_tile">
              The most adopted scaling technology
            </div>
            <div className="home_div_section4_area_body">
              {/* =========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont"
              >
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
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
              </motion.div>

              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              {/* ========== */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont2a"
              >
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
                  <Icon />
                </div>
              </motion.div>
              {/* ============ */}
              {/* ============ */}
              {/* ============ */}
              <motion.div
                variants={fadeIn("Up")}
                transition={transition()}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                className="home_div_section4_area_body_cont3"
              >
                <div className="home_div_section4_area_body_cont1_img_div">
                  <Icon />
                </div>
                <div className="home_div_section4_area_body_cont2">
                  <div className="home_div_section4_area_body_cont2_title">
                    Revolutionizing Smart Contracts
                  </div>
                  <div className="home_div_section4_area_body_cont2_para">
                    Launch dynamic dApps with Egoras's powerful CosmWasm smart
                    contract layer. Egoras is the first blockchain to offer
                    auto-executing smart contracts which empower faster, more
                    innovative and groundbreaking applications.
                  </div>
                  <div className="home_div_section4_area_body_cont2_button_div">
                    <button className="home_div_section4_area_body_cont2_btn">
                      Open Docs
                    </button>
                  </div>
                </div>
              </motion.div>
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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section2">
        <div className="container">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="ego_chain_stat_section_area"
          >
            <div className="home_div_section3_area_title">
              The Blockchain Built for Real-World Businesses
            </div>
            <div className="ego_chain_stat_section_body">
              <div className="ego_chain_stat_section_body_1">
                <div className="ego_chain_stat_section_body_1_cont1">
                  Egochain is more than just a blockchain platform;
                  <br />
                  <br />
                  It is a powerful framework designed to empower real-world
                  businesses to streamline operations, optimize transactions,
                  and unlock new levels of value.
                </div>
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    PROOF-OF-STAKE
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_div2">
                    <div className="ego_chain_stat_section_body_1_cont2_div2_cont1">
                      <CountUp
                        start={0}
                        end={99}
                        duration={2.75}
                        scrollSpyDelay={10}
                        enableScrollSpy={true}
                        scrollSpyOnce={false}
                      />
                      %
                    </div>
                    <div className="ego_chain_stat_section_body_1_cont2_div2_cont2">
                      lower <br />
                      carbon <br />
                      footprint
                    </div>
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Blockchain tech that truly scales.
                  </div>
                </div>
              </div>
              <div className="ego_chain_stat_section_body_2">
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    LOW FEES
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_txt">
                    $0.01
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Enjoy the lowest fees – almost zero.
                  </div>
                </div>
                <div className="ego_chain_stat_section_body_1_cont2">
                  <div className="ego_chain_stat_section_body_1_cont2_title">
                    FAST TRANSACTIONS
                  </div>

                  <div className="ego_chain_stat_section_body_1_cont2_txt">
                    7 sec
                  </div>
                  <div className="ego_chain_stat_section_body_1_cont2_last_text">
                    Transactions confirmed in seconds.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light5"
        />
      </section>

      {/* <section className="home_div_section2">
        <div className="container">
          <div className="home_div_section2_area">
            <div className="home_div_section2_area_1">
              The largest and most thriving ecosystem
            </div>
            <div className="home_div_section2_area_2">
              <div className="home_div_section2_area_2_area1">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
              <div className="home_div_section2_area_2_area2">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
              <div className="home_div_section2_area_2_area1">
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
                <div className="home_div_section2_area_2_area1_cont1">
                  <div className="home_div_section2_area_2_area1_cont1_title">
                    28k+
                  </div>
                  <div className="home_div_section2_area_2_area1_cont1_para">
                    Total Contract Creators
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/hero_bg_light.svg"
          alt=""
          className="home_div_section1_bg_light5"
        />
      </section> */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}

      <section className="home_div_section5">
        <div className="container">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_title">Wallets</div>
            <div className="home_div_section5_area_body_cont">
              {wallets.map((data) => (
                <motion.div
                  id={data.id}
                  variants={fadeIn("Up")}
                  transition={transition()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="home_div_section5_area_body_cont_div1"
                >
                  <div className="home_div_section5_area_body_cont_div1_img_div">
                    <img
                      src={data.img}
                      alt=""
                      className="home_div_section5_area_body_cont_div1_img_div_img"
                    />
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title">
                    {data.title}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_title_para">
                    {data.body}
                  </div>
                  <div className="home_div_section5_area_body_cont_div1_last_txt">
                    WALLETS
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section>
      {/* <section className="home_div_section5">
        <div className="container">
          <div className="home_div_section5_area">
            <div className="home_div_section5_area_title">
              Choose the freedom you need.
            </div>
            <div className="home_div_section5_area_body">
              <div className="home_div_section5_area_body_title_divs">
                <div className="home_div_section5_area_body_title_div1"></div>
                <div className="home_div_section5_area_body_title_div2">
                  Other Chains
                </div>
                <div className="home_div_section5_area_body_title_div3">
                  Ego Chain
                </div>
              </div>
              <div className="home_div_section5_area_body_area">
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
                <div className="home_div_section5_area_body_area_1">
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Gas Fee
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    More than 2$
                  </div>
                  <div className="home_div_section5_area_body_area_1_cont1">
                    Less than 1$
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/grains_bottom.png" alt="" className="grains_ellipse" />
        <img
          src="/img/test_hero_light2.svg"
          alt=""
          className="home_div_section1_bg_light2"
        />
      </section> */}
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
      <section className="home_div_section6">
        <div className="container">
          <motion.div
            variants={fadeIn("Up")}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="home_div_section6_area_community"
          >
            <div className="home_div_section6_area_community_2">
              <div className="home_div_section6_area_community_2_title">
                Join the Egochain community
                <div className="home_div_section6_area_community_2_title_para">
                  Take part in the conversation! Stay in the know & be the first
                  to hear about any new updates
                </div>
              </div>
              <div className="home_div_section6_area_community_2_links">
                <a
                  target="_blank"
                  href="https://twitter.com/egorasHQ?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <XIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#000" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      X
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Read the latest
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://t.me/s/egorasmarket?before=480"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <TelegramIcon className="home_div_section6_area_community_2_links_cont1_icon" />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Telegram
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Join Discussion
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <YouTubeIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "red" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Youtube
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Watch the latest
                    </div>
                  </div>
                </a>
                <a
                  target="_blank"
                  href="https://github.com/EgorasMarket"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <GitHubIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#fff", color: "#000" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Github
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Build with us
                    </div>
                  </div>
                </a>
                <div className="home_div_section6_area_community_2_links_cont1">
                  <RedditIcon
                    className="home_div_section6_area_community_2_links_cont1_icon"
                    style={{ background: "#ff4500" }}
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Reddit
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Get Involved
                    </div>
                  </div>
                </div>
                <a
                  target="_blank"
                  href="https://egoras.medium.com/"
                  className="home_div_section6_area_community_2_links_cont1"
                >
                  <img
                    src="/img/medium_icon.jpeg"
                    alt=""
                    className="home_div_section6_area_community_2_links_cont1_img"
                  />
                  <div className="home_div_section6_area_community_2_links_cont1_text">
                    <div className="home_div_section6_area_community_2_links_cont1_text_title">
                      Medium
                    </div>
                    <div className="home_div_section6_area_community_2_links_cont1_text_para">
                      Read the latest
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>

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
      {/* ====== */}
      {/* ====== */}
      {/* ====== */}
    </div>
  );
};

export default Home;
