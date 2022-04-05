import logo from "../../assets/images/login/Logo_alta.png";
import React from "react";
import background from "../../assets/images/login/Frame.png";
import "./Forgot.scss";

import ForgotStep1 from "./ForgotStep1";
import ForgotStep2 from "./ForgotStep2";
import { useState } from "react";

const ForgotPassword = () => {
  const [changeElement, setChangeELement] = useState(true);
  const conFirm = () => {
    setChangeELement(false);
  };
  return (
    <div className="container">
      <div className="forgot_page">
        <div className="forgot_left">
          <div className="forgot_left-wrap">
            <div className="forgot_left__logo">
              <img srcSet={`${logo} 2x`} alt="" />
            </div>
            <form className="forgot_left__from">
              {changeElement ? (
                <ForgotStep1 conFirm={conFirm} />
              ) : (
                <ForgotStep2 />
              )}
            </form>
          </div>
        </div>
        <div
          className="forgot_right"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
