import React from "react";
import "./login.scss";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../Button/Button";
const Login = () => {
  const testfunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("abc");
  };
  return (
    <div className="login_page">
      <div className="container">
        <div className="login_left">
          <div className="login_left-wrapper">
            <div className="login_left__logo">
              <img srcSet={`${logo} 2x`} alt="" />
              <form>
                <div className="login_left__accountname">
                  <div className="tittle">Tên đăng nhập *</div>
                  <input type="text" name="name" placeholder="First Name..." />
                </div>

                <div className="login_left__accountpass">
                  <div className="tittle">Mật khẩu *</div>
                  <input
                    type="password"
                    name="password"
                    placeholder="First Name..."
                  />
                  <span className="login_lef__question">Quên mật khẩu</span>
                </div>
                <Button
                  handleClick={(event) => {
                    testfunction(event);
                  }}
                  backgroundColor = "orange"

                >
                  Đăng Nhập
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="logim_right"></div>
      </div>
    </div>
  );
};

export default Login;
