import React from "react";
import errorLoader from "../../assets/icons/LottieError.json";

// import "./successModal.css";
// import "./ErrorModal.css";
import "./errorModal.css";
import Lottie from "lottie-react";
const ErrorModal = ({ ErrorTxt, errorFunc }) => {
  return (
    <div className="successModalDiv">
      <div className="successModalDiv_cont">
        <div className="successModalDiv_cont_animation">
          <Lottie
            animationData={errorLoader}
            loop={false}
            autoPlay={true}
            className="successModalDiv_cont_animation_icon"
            preserveAspectRatio="xMidYMid meet"
          />
        </div>
        <div className="successModalDiv_cont_body">
          <div className="successModalDiv_cont_body_title">Error</div>
          <div className="successModalDiv_cont_body_para">{ErrorTxt}</div>
        </div>
        <div className="successModalDiv_cont_button_div">
          <button className="errorModalDiv_cont_button" onClick={errorFunc}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
