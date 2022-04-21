import React from "react";
import inso from "../../assets/images/modal/inso.png";

import Button from "../Button/Button";
import "./addlevel.scss";
import { useNavigate } from "react-router-dom";
import SelectorDD from "../SelectorDropdown/SelectorDD";

import { useState } from "react";
import Modal, { ModalBody } from "../Modal/Modal";
import CloseButton from "../CloseButton/CloseButton";
const Adđevice = () => {
  const [showModal, setshowModal] = useState(false);
  const State = [
    {
      display: "Khám tim mạch",
      value: "all",
    },
    {
      display: "Khám sản-phụ khoa",
      value: "waiting",
    },
    {
      display: "Khám răng hàm mặt",
      value: "used",
    },
    {
      display: "Khám tai mũi họng",
      value: "passed",
    },
  ];
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/cap-so");
  };
  const handleNext = () => {
    setshowModal(true);
  };
  const handlecloseModal = () => {
    setshowModal(false);
  };
  return (
    <div className="addlevel-wrap">
      <div className="addlevel-title">Quản lý cấp số</div>
      <div className="addlevel-main">
        <div className="addlevel-main__top">CẤP SỐ MỚI</div>
        <div className="addlevel-main__title">Dịch vụ khách hàng lựa chọn</div>
        <SelectorDD width="400px" Menu={State} />
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
          <Modal show={showModal}>
            <ModalBody>
              <div className="main-x">
                <img srcSet={`${inso} 2x`} alt="" />

                <div className="main-y">
                  <CloseButton handleClick={handlecloseModal}></CloseButton>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Adđevice;
