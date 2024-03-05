import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import CallMadeIcon from "@mui/icons-material/CallMade";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import DescriptionIcon from "@mui/icons-material/Description";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import JoinLeftIcon from "@mui/icons-material/JoinLeft";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import { motion } from "framer-motion";
import "./header.css";

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
      opacity: 0.5,
    },
    visible: { scale: 1.2, opacity: 1 },
  };
};

export const transition = () => {
  return {
    duration: 0.35,
    delay: 0.1,
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

const Header = () => {
  const [headerMenu, setHeaderMenu] = useState(false);
  const [fixed, setFixed] = useState(false);
  const ToggleHeaderMenu = () => {
    setHeaderMenu(!headerMenu);
  };
  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setFixed(true);
    } else {
      setFixed(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div className="header_partial_div">Egochain Mainnet is live</div>
      <div className={fixed ? "header_div" : "header_div_relative"}>
        <div className="container">
          <div className="header_div_area">
            <a href="/" className="header_div_area_1">
              <img
                src="/img/egax_logo.png"
                alt=""
                className="header_div_area_1_img"
              />
              Egochain
            </a>
            <div className="header_div_area_2">
              <div className="header_div_area_2_div">
                Resources{" "}
                <KeyboardArrowDownIcon className="header_div_area_2_div_icon" />
                <motion.div
                  variants={fadeIn("Up")}
                  transition={transition()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="header_div_area_2_div_drop"
                >
                  {" "}
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/egax/coin/info`
                        : `https://egochain.org/egax/coin/info`
                    }
                    className="header_div_area_2_link1"
                  >
                    <img
                      src="/egax_logo.png"
                      alt=""
                      className="header_div_area_2_link1Img"
                    />{" "}
                    EGAX Coin
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/egc/coin/info`
                        : `https://egochain.org/egc/coin/info`
                    }
                    className="header_div_area_2_link1"
                  >
                    <img
                      src="/egc_icon2.svg"
                      alt=""
                      className="header_div_area_2_link1Img"
                    />{" "}
                    EGC Coin
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/about`
                        : `https://egochain.org/about`
                    }
                    className="header_div_area_2_link1"
                  >
                    <InfoIcon className="header_div_area_2_link1_icon" /> About
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/whitepaper`
                        : `https://egochain.org/whitepaper`
                    }
                    className="header_div_area_2_link1"
                  >
                    <DescriptionIcon className="header_div_area_2_link1_icon" />{" "}
                    Whitepaper
                  </a>
                </motion.div>
                {/* <div className="header_div_area_2_div_drop"></div> */}
              </div>

              <a href="/wallet" className="header_div_area_2_link1">
                Ego Wallet
              </a>
              <a
                href="https://github.com/EgorasMarket"
                className="header_div_area_2_link1"
                target="_blank"
              >
                Developers
                <CallMadeIcon className="header_div_area_2_link1_icon" />
              </a>
              <div className="header_div_area_2_div">
                Products{" "}
                <KeyboardArrowDownIcon className="header_div_area_2_div_icon" />
                <motion.div
                  variants={fadeIn("Up")}
                  transition={transition()}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  className="header_div_area_2_div_drop"
                >
                  <a
                    href="https://egoswap.io"
                    className="header_div_area_2_link1"
                    target="_blank"
                  >
                    <JoinLeftIcon className="header_div_area_2_link1_icon" />{" "}
                    Egoswap{" "}
                    <CallMadeIcon className="header_div_area_2_link1_icon2" />
                  </a>
                  <a
                    href="https://testnet.egoscan.io/"
                    className="header_div_area_2_link1"
                    target="_blank"
                  >
                    <DocumentScannerIcon className="header_div_area_2_link1_icon" />{" "}
                    Explorer{" "}
                    <CallMadeIcon className="header_div_area_2_link1_icon2" />
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://faucet.localhost:${window.location.port}/`
                        : `https://faucet.egochain.org/`
                    }
                    target="_blank"
                    className="header_div_area_2_link1"
                  >
                    <WaterDropIcon className="header_div_area_2_link1_icon" />{" "}
                    Faucet{" "}
                    <CallMadeIcon className="header_div_area_2_link1_icon2" />
                  </a>
                </motion.div>
              </div>

              <MenuIcon
                className="header_div_area_2_menu_icon"
                onClick={ToggleHeaderMenu}
              />
            </div>
          </div>
        </div>
        {headerMenu ? (
          <div className="headerMenuDiv">
            <div className="headerMenuDiv_cont">
              <div className="headerMenuDiv_cont_1">
                <CloseIcon
                  className="headerMenuDiv_cont_1_icon"
                  onClick={ToggleHeaderMenu}
                />
              </div>
              <div className="headerMenuDiv_cont_body">
                <a href="/wallet" className="headerMenuDiv_cont_body_link1">
                  Ego Wallet
                </a>
                <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://localhost:${window.location.port}/egax/coin/info`
                      : `https://egochain.org/egax/coin/info`
                  }
                  className="headerMenuDiv_cont_body_link1"
                >
                  EGAX Coin
                </a>
                <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://localhost:${window.location.port}/egc/coin/info`
                      : `https://egochain.org/egc/coin/info`
                  }
                  className="headerMenuDiv_cont_body_link1"
                >
                  EGC Coin
                </a>
                <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://localhost:${window.location.port}/about`
                      : `https://egochain.org/about`
                  }
                  className="headerMenuDiv_cont_body_link1"
                >
                  About
                </a>
                <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://localhost:${window.location.port}/whitepaper`
                      : `https://egochain.org/whitepaper`
                  }
                  className="headerMenuDiv_cont_body_link1"
                >
                  White paper
                </a>
                <a
                  href={
                    window.location.protocol === "http:"
                      ? `http://faucet.localhost:${window.location.port}/`
                      : `https://faucet.egochain.org/`
                  }
                  className="headerMenuDiv_cont_body_link1"
                  target="_blank"
                >
                  {" "}
                  Faucet
                  <CallMadeIcon className="header_div_area_2_link1_icon" />
                </a>
                <a
                  href="https://github.com/EgorasMarket"
                  target="_blank"
                  className="headerMenuDiv_cont_body_link1"
                >
                  {" "}
                  Developer
                  <CallMadeIcon className="header_div_area_2_link1_icon" />
                </a>
                <a
                  href="https://egoswap.io"
                  className="headerMenuDiv_cont_body_link1"
                  target="_blank"
                >
                  {" "}
                  Egoswap
                  <CallMadeIcon className="header_div_area_2_link1_icon" />
                </a>
                <a
                  href="https://testnet.egoscan.io/"
                  className="headerMenuDiv_cont_body_link1"
                  target="_blank"
                >
                  {" "}
                  Explorer
                  <CallMadeIcon className="header_div_area_2_link1_icon" />
                </a>
                <a
                  href="https://egodao.org/"
                  className="headerMenuDiv_cont_body_link1"
                  target="_blank"
                >
                  {" "}
                  Stake
                  <CallMadeIcon className="header_div_area_2_link1_icon" />
                </a>
                {/* <div className="headerMenuDiv_cont_body_div">
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
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Header;
