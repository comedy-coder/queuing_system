import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addaccount.scss";
import { useNavigate } from "react-router-dom";
import Selector from "../Selector/Selector";
const AddAcount = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/account");
  };
  const handleNext = () => {
    navigate("/account");
  };
  return (
    <div className="addaccount-wrap">
      <div className="addaccount-title">Quản lý tài khoản</div>
      <div className="addaccount-main">
        <div className="addaccount-main__top">Thông tin tài khoản</div>
        <div className="addaccount-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Họ tên : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Họ tên"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Tên đăng nhập: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập tên đăng nhập"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Số điện thoại : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập số điện thoại"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Mật khẩu: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="password"
                  className="addaccount-main__input"
                  placeholder="123456"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Email: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập email"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Nhập lại mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="password"
                  className="addaccount-main__input"
                  placeholder="123456"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <Selector option1="Chọn vai trò " />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Tình trạng: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <Selector option2="Chọn hoạt động" size="big" />
              </div>
            </Grid>
          </Grid>
          <span className="addaccount-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="addaccount-main__button">
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

export default AddAcount;
