import { EyeInvisibleOutlined } from "@ant-design/icons";
import { useState, useRef } from "react";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const ForgotStep2 = () => {
  const [isTooglePassword, setisTooglePassword] = useState(false);
  const PasswordRef = useRef<HTMLInputElement>(null!);
  const RePasswordRef = useRef<HTMLInputElement>(null!);
  const navigate = useNavigate();
  const passWordToogle = () => {
    if (isTooglePassword) {
      PasswordRef.current.setAttribute("type", "password");
      RePasswordRef.current.setAttribute("type", "password");
      setisTooglePassword(false);
    } else {
      PasswordRef.current.setAttribute("type", "text");
      RePasswordRef.current.setAttribute("type", "text");

      setisTooglePassword(true);
    }
  };
  const handleNext = () => {
    navigate("/login");
  };
  return (
    <>
      <span className="forgot_left__title">Đặt lại mật khẩu</span>
      <div className="forgot_left__account">
        <span className="forgot_left__noti"> Mật khẩu</span>

        <input
          className="forgot_left__input"
          type="password"
          name="name"
          id="password"
          placeholder=""
          ref={PasswordRef}
          required
        />
        <span className="eye_icon1" onClick={passWordToogle}>
          <EyeInvisibleOutlined />
        </span>
        <span className="forgot_left__noti">Nhập lại mật khẩu</span>

        <input
          className="forgot_left__input"
          type="password"
          name="name"
          id="repassword"
          placeholder=""
          ref={RePasswordRef}
          required
        />
        <span className="eye_icon2" onClick={passWordToogle}>
          <EyeInvisibleOutlined />
        </span>
      </div>
      <div className="login_left__button">
        <Button handleClick={handleNext} backgroundColor="orange">
          Xác nhận
        </Button>
      </div>
    </>
  );
};

export default ForgotStep2;
