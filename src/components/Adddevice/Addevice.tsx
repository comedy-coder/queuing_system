import { Grid } from "@mui/material";
import React from "react";
import "./adddevice.scss";
const Adđevice = () => {
  return (
    <div className="adddevice-wrap">
      <div className="adddevice-title">Quản lý thiết bị</div>
      <div className="adddevice-main">
        <div className="adddevice-main__top">Thông tin thiết bị</div>
        <div className="adddevice-main__group">
          <Grid container my={1} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Mã thiết bị</div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Loại thiết bị</div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Chọn loại thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Tên thiết bị</div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tên thiết bị"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Tên đăng nhập</div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Địa chỉ IP </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">Mật khẩu</div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Adđevice;
