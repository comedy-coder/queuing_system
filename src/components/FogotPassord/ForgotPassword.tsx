import React from "react";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../Button/Button";
import background from "../../assets/images/login/Frame.png";
const ForgotPassword = () => {
  const handleBack = () => {};
  return (
    <div className="container">
      <div className="login_page">
        <div className="login_left">
          <div className="login_left-wrap">
            <div className="login_left__logo">
              <img srcSet={`${logo} 2x`} alt="" />
            </div>
            <form className="login_lef__from">
              <div className="login_left__account">
                <span className="login_left__title">Tên đăng nhập *</span>
                <input
                  className="login_left__input"
                  type="email"
                  name="name"
                  id="name"
                  placeholder=""
                  required
                />
              </div>

              <div className="login_left__button">
                <Button handleClick={handleBack} backgroundColor="orange">
                  Đăng Nhập
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="login_right"
          style={{
            backgroundImage: `url(${background})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default ForgotPassword;
