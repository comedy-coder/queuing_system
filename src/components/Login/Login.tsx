import React from "react";
import "./login.scss";
import backgournd from "../../assets/images/login/Group341.png";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../Button/Button";
import EyeInvisibleOutlined from "@ant-design/icons";

const Login = () => {
  const testfunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("abc");
  };
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
                  type="text"
                  name="name"
                  placeholder="First Name..."
                />
              </div>

              <div className="login_left__account">
                <span className="login_left__title">Mật khẩu *</span>
                <input
                  type="password"
                  name="password"
                  placeholder="First Name..."
                  className="login_left__input"
                />
              </div>
              <div className="login_left__question">Quên mật khẩu?</div>
              <div className="login_left__button">
                <Button
                  handleClick={(event) => {
                    testfunction(event);
                  }}
                  backgroundColor="orange"
                >
                  Đăng Nhập
                </Button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="login_right"
          style={{
            backgroundImage: `url(${backgournd})`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Login;
