import React, { useState, useEffect } from "react";
import "./footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import CallMadeIcon from "@mui/icons-material/CallMade";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    // Update the current year when the component mounts
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000); // Update the year every second (you can adjust the interval as needed)

    // Clear the interval when the component unmounts    sss
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="footerDiv" id="footer">
      <div className="container">
        <div className="footerDivArea">
          <div className="footerDiv1">
            <div className="footerDiv1_area1">
              <div className="footerDiv1_area1_cont1">
                <img
                  src="/img/egax_logo.png"
                  alt=""
                  className="footerDiv1_img2"
                />
                Egochain
              </div>
              <div className="footerDiv1_area1_cont2">
                <div className="footerDiv1_area1_cont2_links">
                  <a
                    href="https://twitter.com/egorasHQ?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <TwitterIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Twitter
                    </span> */}
                  </a>

                  <a
                    href="https://t.me/s/egorasmarket?before=480"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <TelegramIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Telegram
                    </span> */}
                  </a>
                  <a
                    href="https://github.com/EgorasMarket"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <GitHubIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Telegram
                    </span> */}
                  </a>

                  <a
                    href="https://www.youtube.com/channel/UCHfi5EwXig46xp5Dx8hVBHQ"
                    className="footerDiv1_area1_cont2_links_link_tel"
                    target="_blank"
                  >
                    <YouTubeIcon className="footerDiv1_area1_cont2_links_link1" />{" "}
                    {/* <span className="footerDiv1_area1_cont2_links_link_tel_span">
                      Youtube
                    </span> */}
                  </a>
                </div>
              </div>
            </div>
            <div className="footerDiv1_area2">
              <div className="footerDiv1_area2_cont1">
                <div className="footerDiv1_area2_title">Eco-System</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/egax/coin/info`
                        : `https://egochain.org/egax/coin/info`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    EGAX Coin
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/egc/coin/info`
                        : `https://egochain.org/egc/coin/info`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    EGC Coin
                  </a>
                  <a
                    href="https://github.com/EgorasMarket"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                    target="_blank"
                  >
                    Developers
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href="https://egoscan.io/"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                    target="_blank"
                  >
                    Explorer
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                </div>
              </div>
              <div className="footerDiv1_area2_cont1">
                <div className="footerDiv1_area2_title">Products</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href="/wallet"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    Ego Wallet
                  </a>
                  <a
                    href="https://egoswap.io"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                    target="_blank"
                  >
                    Egoswap
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://faucet.localhost:${window.location.port}/`
                        : `https://faucet.egochain.org/`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                    target="_blank"
                  >
                    Faucet
                    <CallMadeIcon className="header_div_area_2_link1_icon" />
                  </a>
                </div>
              </div>
              <div className="footerDiv1_area2_cont1">
                <div className="footerDiv1_area2_title">Docs</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/about`
                        : `https://egochain.org/about`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    About
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/whitepaper`
                        : `https://egochain.org/whitepaper`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    White paper
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/privacy`
                        : `https://egochain.org/privacy`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href={
                      window.location.protocol === "http:"
                        ? `http://localhost:${window.location.port}/terms`
                        : `https://egochain.org/terms`
                    }
                    className="footerDiv1_area2_title_subLinks_div_link1"
                  >
                    Terms & conditions
                  </a>
                </div>
              </div>
              <div className="footerDiv1_area2_cont1_last">
                <div className="footerDiv1_area2_title">Need Help?</div>
                <div className="footerDiv1_area2_title_subLinks_div">
                  <a
                    href="mailto:support@egoras.com"
                    className="footerDiv1_area2_title_subLinks_div_link1"
                    target="_blank"
                  >
                    support@egochain.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <hr className="footer_hr" />
          <div className="footer_lastDiv">© {currentYear} Egochain.org</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
