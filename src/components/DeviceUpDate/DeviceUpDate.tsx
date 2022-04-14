import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import close from "../../assets/images/addbutton/close.png";
import Button from "../Button/Button";
import "./updatedevice.scss";
import { useNavigate } from "react-router-dom";
const UpDatedevice = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/device");
  };
  const handleNext = () => {
    navigate("/device");
  };
  return (
    <div className="updatedevice-wrap">
      <div className="updatedevice-title">Quản lý thiết bị</div>
      <div className="updatedevice-main">
        <div className="updatedevice-main__top">Thông tin thiết bị</div>
        <div className="updatedevice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Mã thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Loại thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Chọn loại thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Tên thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tên thiết bị"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Tên đăng nhập : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Địa chỉ IP : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Dịch vụ sử dụng : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <div className="updatedevice-main__group1">
                  <Grid container columnSpacing={3.2}>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tim mạch</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám sản phụ khoa</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám răng hàm mặt</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tai mũi họng</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám hô hấp</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tổng quát</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
          <span className="updatedevice-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="updatedevice-main__button">
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

export default UpDatedevice;
