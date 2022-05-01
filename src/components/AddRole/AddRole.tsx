import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addrole.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../utils/init-firebase";
import { collection, addDoc } from "firebase/firestore";
const AddRole = () => {
  const [desc, setDesc] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const userCollectionRef = collection(db, "Roles");
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      desc: desc,
      name: name,
      nbusers: 4,
    });
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/setting/vai-tro");
  };
  const handleNext = () => {
    if (desc !== "" && name !== "") {
      createUser();
      alert("Thêm vai trò thành công");
      navigate("/setting/vai-tro");
    } else return alert("Nhập đầy đủ thông tin");
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
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addrole-main__info">
                <div className="addrole-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <textarea
                  placeholder="Nhập mô tả"
                  onChange={(e) => {
                    setDesc(e.target.value);
                  }}
                ></textarea>
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
          Thêm
        </Button>
      </div>
    </div>
  );
};

export default AddRole;
