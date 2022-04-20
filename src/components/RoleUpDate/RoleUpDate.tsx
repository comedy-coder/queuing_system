import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./roleupdate.scss";
import { useNavigate } from "react-router-dom";
const RoleUpDate = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/setting/vai-tro");
  };
  const handleNext = () => {
    navigate("/setting/vai-tro");
  };
  return (
    <div className="roleupdate-wrap">
      <div className="roleupdate-title">Danh sách vai trò</div>
      <div className="roleupdate-main">
        <div className="roleupdate-main__top">Thông tin vai trò</div>
        <div className="roleupdate-main__group">
          <div className="roleupdate-main__group__left">
            <Grid item xs={6}>
              <div className="roleupdate-main__info">
                <div className="roleupdate-main__title">
                  Tên vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="roleupdate-main__input"
                  placeholder="Nhập mã thiết bị"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="roleupdate-main__info">
                <div className="roleupdate-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <textarea>
                  Chịu trách nhiệm thống kê số liệu và kiểm toán
                </textarea>
              </div>
            </Grid>

            <span className="roleupdate-main__desc">
              {" "}
              <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
            </span>
          </div>
          <div className="roleupdate-main__group__right">
            <div className="roleupdate-main__title">
              Phân quyền chức năng : <img srcSet={`${sao} 2x`} alt="" />
            </div>
            <div className="roleupdate-main__group__righ__roles">
              <div className="roleupdate-title mg-bottom">Nhóm chức năng A</div>

              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Tất cả </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng x: </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng y </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng z</span>
              </div>

              <div className="roleupdate-title mg-bottom mg-top">
                Nhóm chức năng B
              </div>

              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Tất cả </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng x: </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng y </span>
              </div>
              <div className="roleupdate-rules ">
                <input type="checkbox" className="roleupdate-checkbox"></input>
                <span> Chức năng z</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="roleupdate-main__button">
        <Button
          handleClick={handleBack}
          backgroundColor="orange1"
          color="orange"
          border="red"
        >
          Hủy bỏ
        </Button>
        <Button handleClick={handleNext} backgroundColor="orange" color="white">
          Cập nhật
        </Button>
      </div>
    </div>
  );
};

export default RoleUpDate;
