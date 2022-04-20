import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./updateaccount.scss";
import { useNavigate } from "react-router-dom";
import Selector from "../Selector/Selector";
const UpdateAcount = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/setting/tai-khoan");
  };
  const handleNext = () => {
    navigate("/setting/tai-khoan");
  };
  return (
    <div className="updateaccount-wrap">
      <div className="updateaccount-title">Quản lý tài khoản</div>
      <div className="updateaccount-main">
        <div className="updateaccount-main__top">Thông tin tài khoản</div>
        <div className="updateaccount-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Họ tên : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="Nguyen Van A"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Tên đăng nhập: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="tuyetnguyen123"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Số điện thoại : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="0902345678"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Mật khẩu: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="password"
                  className="updateaccount-main__input"
                  placeholder="Tuyetnguyen12"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Email: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="NguyenA154@gmail.com"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Nhập lại mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="password"
                  className="updateaccount-main__input"
                  placeholder="Tuyetnguyen12"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <Selector option1="Chọn vai trò " size="over" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Tình trạng: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <Selector option2="Chọn hoạt động" size="over" />
              </div>
            </Grid>
          </Grid>
          <span className="updateaccount-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="updateaccount-main__button">
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

export default UpdateAcount;
