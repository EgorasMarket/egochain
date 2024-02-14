import React, { useState, useEffect } from "react";

import Grid from "./Grid";
import "./EgaxFaucet.css";
import axios from "axios";
import { API_URL } from "../../actions/types";
import { config } from "../../actions/config";
import ScaleLoader from "react-spinners/ScaleLoader";
import SuccessModal from "../SuccessModal/SuccessModal";
import ErrorModal from "../ErrorModal/ErrorModal";

const Faucet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [successModal, setSuccessModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [errorTxt, setErrorTxt] = useState("");
  const [successTxt, setSuccessTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const UploadProduct = async () => {
    setLoading(true);
    setDisabled(true);
    const payload = { wallet: walletAddress };
    try {
      const res = await axios.post(
        API_URL + "/web3/faucet/submit-address",
        payload,
        config
      );
      console.log(res);
      if (res.status === 200) {
        console.log(res);
        console.log(res.data.data.message);
        setSuccessModal(true);
        setSuccessTxt("You have successfully claimed 1egax");
        setLoading(false);
        setDisabled(false);
        setDisabled(false);
      } else {
        console.log(res);
        setSuccessModal(false);
        setErrorModal(true);
        setErrorTxt(res.data.data.message);
        setLoading(false);
        setDisabled(false);
      }
    } catch (err) {
      console.log(err.response);
      setErrorTxt(err.response);
      setSuccessModal(false);
      setErrorModal(true);
      setLoading(false);
    }
  };
  const changeWalletAddress = (e) => {
    setWalletAddress(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="Home_div">
      <div className="container">
        <div className="Home_div_area">
          <div className="Home_div_area_head">
            <div className="Home_div_area_head_cont1">
              EGAX <span className="Home_div_area_head_span"> FAUCET</span>{" "}
            </div>
            <div className="Home_div_area_head_para">
              Obtain EGO Chain Testnet tokens every 24 hours for seamless and
              confident development.
            </div>
          </div>
          <div className="Home_div_area_cont">
            <div className="Home_div_area_cont_area1">
              <div className="Home_div_area_cont_area1_cont1">
                <div className="Home_div_area_cont_area1_cont1_title">
                  Token
                </div>
                <div className="Home_div_area_cont_area1_cont1_div">
                  <img
                    src="/egax_logo.png"
                    alt=""
                    className="Home_div_area_cont_area1_cont1_div_img"
                  />
                  1 EGAX
                </div>
              </div>
              <div className="Home_div_area_cont_area1_cont2">
                <div className="Home_div_area_cont_area1_cont2_title">
                  Wallet Address
                </div>
                <input
                  type="text"
                  onChange={changeWalletAddress}
                  value={walletAddress}
                  placeholder="Enter your Ego Chain Testnet wallet address"
                  className="Home_div_area_cont_area1_cont2_input"
                />
              </div>
            </div>
            {walletAddress === "" ? (
              <button className="Home_div_area_cont_area2_btn" disabled>
                Send 1 EGAX
              </button>
            ) : (
              <button
                className="Home_div_area_cont_area2_btn"
                onClick={UploadProduct}
                disabled={disabled}
              >
                {loading ? (
                  <>
                    <ScaleLoader color="#366e51" height={20} /> Sending...
                  </>
                ) : (
                  <> Send 1 EGAX</>
                )}
              </button>
            )}
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
      {successModal ? (
        <SuccessModal
          SuccesTxt={successTxt}
          successFunc={() => {
            window.location.href = "/";
          }}
        />
      ) : null}
      {errorModal ? (
        <ErrorModal
          ErrorTxt={errorTxt}
          errorFunc={() => {
            setErrorModal(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Faucet;
