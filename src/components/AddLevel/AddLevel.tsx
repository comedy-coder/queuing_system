import React from "react";
import inso from "../../assets/images/modal/inso.png";
import close from "../../assets/images/modal/close.png";
import Button from "../Button/Button";
import "./addlevel.scss";
import { useNavigate } from "react-router-dom";
import Selector from "../Selector/Selector";
import Modal from "../Modal/Modal";
const Adđevice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/cap-so");
  };
  const handleNext = () => {
    navigate("/cap-so");
  };
  return (
    <div className="addlevel-wrap">
      <div className="addlevel-title">Quản lý cấp số</div>
      <div className="addlevel-main">
        <div className="addlevel-main__top">CẤP SỐ MỚI</div>
        <div className="addlevel-main__title">Dịch vụ khách hàng lựa chọn</div>
        <Selector option1="Khám tim mạch" option2="Khám tim mạch" size="big" />
        <div className="addlevel-main__button">
          <Button
            handleClick={handleBack}
            backgroundColor="orange1"
            color="orange"
            border="red"
            size="small"
          >
            Hủy bỏ
          </Button>
          <Button
            handleClick={handleNext}
            backgroundColor="orange"
            color="white"
            size="small"
          >
            In số
          </Button>
          <Modal active={true}>
            <div className="main-x">
              <img srcSet={`${inso} 2x`} alt="" />
              <button className="main-y">
                <img srcSet={`${close} 2x`} alt="" />
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Adđevice;
