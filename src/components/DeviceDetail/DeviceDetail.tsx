import { Grid } from "@mui/material";
import React from "react";
import edit from "../../assets/images/addbutton/edit.png";
import { useNavigate } from "react-router-dom";
import AddButton from "../AddButton/AddButton";
import "./devicedetail.scss";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import { getID } from "../../Store/action";
const DeviceDetail = () => {
  const [state, dispatch] = useContext(Context);

  const navigate = useNavigate();
  const handleChange = () => {
    dispatch(getID(item.id));
    navigate("/device/update");
  };

  const item = state.detaildevice[0];
  const { code, name, type, useracc, ip, pass, service } = item;
  return (
    <div className="devicedetail-wrap">
      <div className="devicedetail-title">Quản lý thiết bị</div>
      <div className="devicedetail-main">
        <div className="devicedetail-main__top">Thông tin thiết bị</div>
        <Grid container>
          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Mã thiết bị :
              <span className="devicedetail-main__desc">
                {code ? code : ""}
              </span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Tên thiết bị :
              <span className="devicedetail-main__desc">
                {name ? name : ""}
              </span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Loại thiết bị :
              <span className="devicedetail-main__desc">
                {type ? type : ""}
              </span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Tên đăng nhập :
              <span className="devicedetail-main__desc">
                {useracc ? useracc : ""}
              </span>
            </span>
          </Grid>
          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Địa chỉ IP :
              <span className="devicedetail-main__desc">{ip ? ip : ""}</span>
            </span>
          </Grid>

          <Grid item xs={6} my={2}>
            <span className="devicedetail-main__title">
              Mật khẩu :
              <span className="devicedetail-main__desc">
                {pass ? pass : ""}
              </span>
            </span>
          </Grid>
        </Grid>
        <span className="devicedetail-main__noti">Dịch vụ sử dụng : </span>
        <div className="devicedetail-main__info">{service}</div>
      </div>
      <div className="devicedetail-button">
        <AddButton img={edit} handleClick={handleChange}>
          Cập nhật thiết bị
        </AddButton>
      </div>
    </div>
  );
};

export default DeviceDetail;
