import React from "react";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../Button/Button";
import background from "../../assets/images/login/Frame.png";
import "./Forgot.scss";
const ForgotPassword = () => {
  const handleBack = () => {};
  return (
    <div className="container">
      <div className="forgot_page">
        <div className="forgot_left">
          <div className="forgot_left-wrap">
            <div className="forgot_left__logo">
              <img srcSet={`${logo} 2x`} alt="" />
            </div>
            <form className="forgot_left__from">
              <div className="forgot_left__account">
                <span className="forgot_left__title">Đặt lại mật khẩu </span>
                <input
                  className="forgot_left__input"
                  type="email"
                  name="name"
                  id="name"
                  placeholder=""
                  required
                />
              </div>

              <div className="forgot_left__button">
                <Button handleClick={handleBack} backgroundColor="orange">
                  Đăng Nhập
                </Button>
                <Button handleClick={handleBack}>Đăng Nhập</Button>
              </div>
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
