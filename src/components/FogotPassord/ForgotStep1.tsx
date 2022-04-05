import React from "react";
import Button from "../Button/Button";

import { useNavigate } from "react-router-dom";
type AProps = {
  conFirm: () => void;
};
const ForgotStep1 = ({ conFirm }: AProps) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/login");
  };
  const handleNext = () => {
    conFirm();
  };

  return (
    <>
      <div className="forgot_left__account">
        <span className="forgot_left__title">Đặt lại mật khẩu </span>
        <span className="forgot_left__noti">
          Vui lòng nhập email để đặt lại mật khẩu của bạn *{" "}
        </span>
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
        <Button handleClick={handleBack} border="red">
          Hủy
        </Button>
        <Button handleClick={handleNext} backgroundColor="orange">
          Tiếp tục
        </Button>
      </div>
    </>
  );
};

export default ForgotStep1;
