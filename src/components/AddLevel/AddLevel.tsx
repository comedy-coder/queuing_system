import React from "react";

import Button from "../Button/Button";
import "./addlevel.scss";
import { useNavigate } from "react-router-dom";
import SelectorDD from "../SelectorDropdown/SelectorDD";

import { useState } from "react";
import Modal, { ModalBody } from "../Modal/Modal";
import CloseButton from "../CloseButton/CloseButton";
const Adđevice = () => {
  const today = new Date();
  const time = today.getHours() + ":" + today.getMinutes();
  const date =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();

  const date1 =
    today.getDate() + "/" + today.getMonth() + "/" + today.getFullYear();
  const [showModal, setshowModal] = useState(false);

  const [service, setService] = useState("");
  const getServiceValueDropdown = (value: any) => {
    setService(value);
  };
  function addDays(date: any, days: any) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const text1 = addDays(date1, 7).toLocaleString().slice(10, 16);
  const text2 = addDays(date1, 7).toLocaleString().slice(0, 9);
  const datenext = text1 + " " + text2;
  console.log(text1, text2, datenext);
  const State = [
    {
      display: "Khám tim mạch",
      value: "Khám tim mạch",
    },
    {
      display: "Khám sản-phụ khoa",
      value: "khám sản phụ khoa",
    },
    {
      display: "Khám răng hàm mặt",
      value: "khám răng hàm mặt",
    },
    {
      display: "Khám tai mũi họng",
      value: "khám tai mũi họng",
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
        <SelectorDD
          width="400px"
          Menu={State}
          onGetValue={getServiceValueDropdown}
        />
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
                <div className="providenewnumber__popup">
                  <div className="providenewnumber__popup--title">
                    <span>Số thứ tự được cấp </span>
                  </div>
                  <div className="providenewnumber__popup--number">
                    <span>2001201 </span>
                  </div>
                  <div className="providenewnumber__popup--service">
                    <div className="providenewnumber__popup--service-title">
                      <span>DV:</span>
                    </div>
                    <p>{service}</p>
                    <span>{"(tại quầy số 1)"}</span>
                  </div>
                  <div className="providenewnumber__popup--time">
                    <div className="providenewnumber__popup--time-provide">
                      <div className="providenewnumber__popup--time-title">
                        <span>Thời gian cấp:</span>
                      </div>
                      <div className="providenewnumber__popup--time-time">
                        <span>{time}</span>
                      </div>
                      <div className="providenewnumber__popup--time-date">
                        <span>{date}</span>
                      </div>
                    </div>
                    <div className="providenewnumber__popup--time-use">
                      <div className="providenewnumber__popup--time-title">
                        <span>Hạn sử dụng:</span>
                      </div>

                      <div className="providenewnumber__popup--time-date">
                        <span>{datenext}</span>
                      </div>
                    </div>
                  </div>
                </div>

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
