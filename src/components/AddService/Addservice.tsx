import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addservice.scss";
import { useNavigate } from "react-router-dom";
const Addservice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dich-vu");
  };
  const handleNext = () => {
    navigate("/dich-vu");
  };
  return (
    <div className="addservice-wrap">
      <div className="addservice-title">Quản lý dịch vụ</div>
      <div className="addservice-main">
        <div className="addservice-main__top">Thông tin dịch vụ</div>
        <div className="addservice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Mã dịch vụ: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addservice-main__input"
                  placeholder="201"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <textarea>Mô tả dịch vụ</textarea>
              </div>
            </Grid>
            <div className="test">
              <Grid item xs={6}>
                <div className="addservice-main__info">
                  <div className="addservice-main__title">
                    Tên dịch vụ : <img srcSet={`${sao} 2x`} alt="" />
                  </div>
                  <input
                    type="text"
                    className="addservice-main__input"
                    placeholder="Khám tim mạch"
                  />
                </div>
              </Grid>{" "}
            </div>
          </Grid>
        </div>
        <div className="addservice-main__top">Quy tắc cấp số</div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Tăng tự động từ :{" "}
            <input
              type="text"
              className="addservice-text"
              placeholder="0001"
            />{" "}
            đến{" "}
            <input className="addservice-text" type="text" placeholder="9999" />
          </span>
        </div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Prelix:{" "}
            <input
              type="text"
              className="addservice-text green"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Surflix:{" "}
            <input
              type="text"
              className="addservice-text red"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="addservice-rules ">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span> Reset mỗi ngày: </span>
        </div>

        <span className="addservice-main__desc">
          {" "}
          <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
        </span>
      </div>
      <div className="addservice-main__button">
        <Button
          handleClick={handleBack}
          backgroundColor="orange1"
          color="orange"
          border="red"
        >
          Hủy bỏ
        </Button>
        <Button handleClick={handleNext} backgroundColor="orange" color="white">
          Thêm thiết bị
        </Button>
      </div>
    </div>
  );
};

export default Addservice;
