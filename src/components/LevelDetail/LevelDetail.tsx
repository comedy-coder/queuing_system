import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import back from "../../assets/images/addbutton/back.png";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import "./leveldetail.scss";
const LevelDetail = () => {
  const [state, disptach] = useContext(Context);
  const item = state.detaildevice[0];
  console.log(item);
  const datetime1 = new Date(item.time1.seconds * 1000).toLocaleString();
  const datetime2 = new Date(item.time2.seconds * 1000).toLocaleString();
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
              <span className="leveldetail-main__desc">{item.name}</span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Nguồn cấp::{" "}
              <span className="leveldetail-main__desc">{item.source}</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Tên dịch vụ:{" "}
              <span className="leveldetail-main__desc">{item.nameservice}</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Trạng thái:{" "}
              <span className="leveldetail-main__desc">{item.state}</span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Số thứ tự: <span className="leveldetail-main__desc">2000001</span>
            </span>
          </Grid>

          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Số điện thoại:{" "}
              <span className="leveldetail-main__desc">{item.sdt}</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Thời gian cấp:{" "}
              <span className="leveldetail-main__desc">{datetime1}</span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="leveldetail-main__title">
              Địa chỉ Email:{" "}
              <span className="leveldetail-main__desc">{item.email}</span>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span className="leveldetail-main__title">
              Hạn sử dụng:{" "}
              <span className="leveldetail-main__desc">{datetime2}</span>
            </span>
          </Grid>
        </Grid>
      </div>
      <div className="leveldetail-button">
        <AddButton img={back} handleClick={handleChange}>
          {" "}
          Quay lại
        </AddButton>
      </div>
    </div>
  );
};

export default LevelDetail;
