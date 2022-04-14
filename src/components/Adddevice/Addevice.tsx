import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./adddevice.scss";
import { useNavigate } from "react-router-dom";
const Adđevice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/device");
  };
  const handleNext = () => {
    navigate("/device");
  };
  return (
    <div className="adddevice-wrap">
      <div className="adddevice-title">Quản lý dịch vụ</div>
      <div className="adddevice-main">
        <div className="adddevice-main__top">Thông tin thiết bị</div>
        <div className="adddevice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Mã thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Loại thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Chọn loại thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Tên thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tên thiết bị"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Tên đăng nhập : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Địa chỉ IP : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Dịch vụ sử dụng : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input1"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>
          </Grid>
          <span className="adddevice-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="adddevice-main__button">
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

export default Adđevice;
