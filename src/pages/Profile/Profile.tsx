import React from "react";
import "./profile.scss";
import avatar from "../../assets/images/profile/avatar.png";
import { Grid } from "@mui/material";
const Profile = () => {
  return (
    <div className="profile-wrap">
      <div className="profile-main">
        <div className="profile-avatar">
          <img srcSet={`${avatar} 2x`} alt="" />
        </div>
        <div className="profile-group">
          <Grid container my={6}>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title">Tên người dùng</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="Ngô Thành Đạt"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title">Tên đăng nhập</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="thanhdat.ngo1407@gmail.com"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title"> Số điện thoại</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="0762534501"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title"> Mật khẩu</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="********"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title">Email</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="thanhdat.ngo1407@gmail.com"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="profile-info">
                <div className="profile-title">Vai trò</div>
                <input
                  type="text"
                  className="profile-infoinput"
                  placeholder="front-end developer"
                />
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Profile;
