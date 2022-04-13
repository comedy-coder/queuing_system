import { Grid } from "@mui/material";
import React from "react";
import "./devicedetail.scss";
const DeviceDetail = () => {
  return (
    <div className="devicedetail-wrap">
      <div className="devicedetail-title">Quản lý thiết bị</div>
      <div className="devicedetail-main">
        <div className="devicedetail-main__top">Thông tin thiết bị</div>
        <Grid container >
        <Grid item xs={6} my={2}>
        <span className="devicedetail-main__title">
          Mã thiết bị : <span className="devicedetail-main__desc">KIO_01</span>
        </span>
        </Grid>
        <Grid item xs={6} my={2}>
        <span className="devicedetail-main__title">
          Tên thiết bị : <span className="devicedetail-main__desc">Kiosk</span>
        </span> 
        </Grid>
         <Grid item xs={6} my={2} >
        <span className="devicedetail-main__title">
          Loại thiết bị : <span className="devicedetail-main__desc">Kiosk</span>
        </span> 
        </Grid>
        <Grid item xs={6}my={2}>
        <span className="devicedetail-main__title">
          Tên đăng nhập : <span className="devicedetail-main__desc">Linkyo1</span>
        </span>
        </Grid>
        <Grid item xs={6}my={2} >
        <span className="devicedetail-main__title">
          Địa chỉ IP : <span className="devicedetail-main__desc">128.172.308</span>
        </span>
        </Grid>
      
       
       
        <Grid item xs={6}  my={2} >
        <span className="devicedetail-main__title">
          Mật khẩu : <span className="devicedetail-main__desc">CMS</span>
        </span>
        </Grid>   
        </Grid>
        <span className="devicedetail-main__noti">Dịch vụ sử dụng : </span>
        <div className="devicedetail-main__info"> Khám tim mạch, Khám sản - Phụ khoa, Khám răng hàm mặt, Khám tai mũi họng, Khám hô hấp, Khám tổng quát.</div>
        
      </div>
    </div>
  );
};

export default DeviceDetail;
