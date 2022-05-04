import React, { useState, useRef, useEffect } from "react";
import "./login.scss";
import backgournd from "../../assets/images/login/Group341.png";
import logo from "../../assets/images/login/Logo_alta.png";
import Button from "../../components/Button/Button";
import { auth } from "../../utils/init-firebase";
import logging from "../../utils/logging";
import ErrorText from "../../components/ErrorText/index";
import { EyeInvisibleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const EmailRef = useRef<HTMLInputElement>(null!);
  const PasswordRef = useRef<HTMLInputElement>(null!);
  const [isTooglePassword, setisTooglePassword] = useState(false);

  const navigate = useNavigate();
  const handleForgotPassword = () => {
    navigate("/forgotpassword");
  };
  useEffect(() => {
    const menuToogle = () => {
      if (error) EmailRef.current.classList.toggle("error");
      if (error) PasswordRef.current.classList.toggle("error");
    };
    menuToogle();
  }, [error]);
  const passWordToogle = () => {
    if (isTooglePassword) {
      PasswordRef.current.setAttribute("type", "password");
      setisTooglePassword(false);
    } else {
      PasswordRef.current.setAttribute("type", "text");
      setisTooglePassword(true);
    }
  };
  const testfunction = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate("/");
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
                  placeholder="acc:123@gmail.com pass:123456"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  ref={EmailRef}
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
                  ref={PasswordRef}
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <span className="eye_icon" onClick={passWordToogle}>
                  <EyeInvisibleOutlined />
                </span>
              </div>
              <div
                className="login_left__question"
                onClick={handleForgotPassword}
              >
                {error ? (
                  <span>
                    <ErrorText error={error} />
                  </span>
                ) : (
                  "Quên mật khẩu ?"
                )}
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
              <div
                className="login_left__question1"
                onClick={handleForgotPassword}
              >
                {error ? "Quên mật khẩu ?" : ""}
              </div>
            </form>
          </div>
        </div>
        <div
          className="login_right"
          style={{
            backgroundImage: `url(${backgournd})`,
          }}
        >
          <div className="login_right-title">Hệ thống</div>

          <div className="login_right-title-sub">QUẢN LÝ XẾP HÀNG</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
