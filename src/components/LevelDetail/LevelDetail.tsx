import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import "./leveldetail.scss";
const LevelDetail = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate("/cap-so");
  };
  return (
    <div className="leveldetail-wrap">
      <div className="leveldetail-title">Quản lý thiết bị</div>
      <div className="leveldetail-main">
        <div className="leveldetail-main__top">Thông tin thiết bị</div>
        <Grid container>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Họ tên: :{" "}
              <span className="leveldetail-main__desc">Nguyễn Thị Dung</span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Nguồn cấp:: <span className="leveldetail-main__desc">Kiosk</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Tên dịch vụ:{" "}
              <span className="leveldetail-main__desc">Khám tim mạch</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Trạng thái:{" "}
              <span className="leveldetail-main__desc">Đang chờ</span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Số thứ tự: <span className="leveldetail-main__desc">2001201</span>
            </span>
          </Grid>

          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Số điện thoại:{" "}
              <span className="leveldetail-main__desc">0948523623</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Thời gian cấp:{" "}
              <span className="leveldetail-main__desc">14:35 - 07/11/2021</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Địa chỉ Email:{" "}
              <span className="leveldetail-main__desc">
                nguyendung@gmail.com
              </span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Hạn sử dụng:{" "}
              <span className="leveldetail-main__desc">18:00 - 07/11/2021</span>
            </span>
          </Grid>
        </Grid>
      </div>
      <div className="leveldetail-button">
        <AddButton handleClick={handleChange}> Quay lại</AddButton>
      </div>
    </div>
  );
};

export default LevelDetail;
