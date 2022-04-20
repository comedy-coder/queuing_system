import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addrole.scss";
import { useNavigate } from "react-router-dom";
const AddRole = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/role");
  };
  const handleNext = () => {
    navigate("/role");
  };
  return (
    <div className="addrole-wrap">
      <div className="addrole-title">Danh sách vai trò</div>
      <div className="addrole-main">
        <div className="addrole-main__top">Thông tin vai trò</div>
        <div className="addrole-main__group">
          <div className="addrole-main__group__left">
            <Grid item xs={6}>
              <div className="addrole-main__info">
                <div className="addrole-main__title">
                  Tên vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addrole-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addrole-main__info">
                <div className="addrole-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addrole-main__input1"
                  placeholder="Mô tả dịch vụ"
                />
              </div>
            </Grid>

            <span className="addrole-main__desc">
              {" "}
              <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
            </span>
          </div>
          <div className="addrole-main__group__right">
            <div className="addrole-main__title">
              Phân quyền chức năng : <img srcSet={`${sao} 2x`} alt="" />
            </div>
            <div className="addrole-main__group__righ__roles">
              <div className="addrole-title mg-bottom">Nhóm chức năng A</div>

              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Tất cả </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng x: </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng y </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng z</span>
              </div>

              <div className="addrole-title mg-bottom mg-top">
                Nhóm chức năng B
              </div>

              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Tất cả </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng x: </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng y </span>
              </div>
              <div className="addrole-rules ">
                <input type="checkbox" className="addrole-checkbox"></input>
                <span> Chức năng z</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="addrole-main__button">
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

export default AddRole;
