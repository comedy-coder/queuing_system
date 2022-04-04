import React, { useState } from "react";
import "./login.scss";
import backgournd from "../../assets/images/login/Group341.png";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../Button/Button";
import { auth } from "../../utils/init-firebase";
import logging from "../../utils/logging";
import ErrorText from "../ErrorText";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const testfunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
      })
      .catch((error) => {
        setError("Sai mật khẩu hoặc tên đăng nhập");
      });
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
                  type="email"
                  name="name"
                  id="name"
                  placeholder=""
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="login_left__account">
                <span className="login_left__title">Mật khẩu *</span>
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  className="login_left__input"
                  id="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="login_left__question">
                {error ? <ErrorText error={error} /> : "Quên mật khẩu"}
              </div>
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
              <div className="login_left__question1">
                {error ? "Quên mật khẩu?" : ""}
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
