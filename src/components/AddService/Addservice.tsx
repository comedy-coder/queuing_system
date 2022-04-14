import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addservice.scss";
import { useNavigate } from "react-router-dom";
const Addservice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/device");
  };
  const handleNext = () => {
    navigate("/device");
  };
  return (
    <div className="addservice-wrap">
      <div className="addservice-title">Quản lý thiết bị</div>
      <div className="addservice-main">
        <div className="addservice-main__top">Thông tin thiết bị</div>
        <div className="addservice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Mã thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addservice-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Loại thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addservice-main__input"
                  placeholder="Chọn loại thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Tên thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addservice-main__input"
                  placeholder="Nhập tên thiết bị"
                />
              </div>
            </Grid>{" "}
          </Grid>
          <span className="addservice-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
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
