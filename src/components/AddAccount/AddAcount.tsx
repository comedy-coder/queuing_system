import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addaccount.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { db } from "../../utils/init-firebase";
import { collection, addDoc } from "firebase/firestore";
import DropDownDD from "../SelectorDropdown/SelectorDD";

const AddAcount = () => {
  const [acc, setAcc] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const [email, setEmail] = useState<any | null>("");
  const [sdt, setSdt] = useState<any | null>("");
  const [role, setRole] = useState<any | null>("");
  const userCollectionRef = collection(db, "Users");
  const [state, setState] = useState<any | null>("");
  const getState = (value: any) => {
    if (value === "1") setState(true);
    else setState(false);
  };

  const getRole = (value: any) => {
    setRole(value);
  };
  const Active = [
    {
      display: "Hoạt động",
      value: "1",
    },
    {
      display: "Ngưng hoạt động",
      value: "0",
    },
  ];
  const Roles = [
    {
      display: "Kế toán",
      value: "Kế toán",
    },
    {
      display: "Quản lý",
      value: "Quản lý",
    },
    {
      display: "Admin",
      value: "Admin",
    },
  ];
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      acc: acc,
      name: name,
      email: email,
      sdt: sdt,
      role: role,
      state: state,
    });
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/setting/tai-khoan");
  };
  const handleNext = () => {
    if (
      acc !== "" &&
      name !== "" &&
      email !== "" &&
      sdt !== "" &&
      role !== "" &&
      state !== ""
    ) {
      createUser();
      alert("Thêm tài khoản thành công");
      navigate("/setting/tai-khoan");
    } else {
      return alert("Nhập đầy đủ thông tin");
    }
    navigate("/setting/tai-khoan");
  };
  return (
    <div className="addaccount-wrap">
      <div className="addaccount-title">Quản lý tài khoản</div>
      <div className="addaccount-main">
        <div className="addaccount-main__top">Thông tin tài khoản</div>
        <div className="addaccount-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Họ tên : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Họ tên"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Tên đăng nhập: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập tên đăng nhập"
                  onChange={(event) => {
                    setAcc(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Số điện thoại : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập số điện thoại"
                  onChange={(event) => {
                    setSdt(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Mật khẩu: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input type="password" className="addaccount-main__input" />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Email: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addaccount-main__input"
                  placeholder="Nhập email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Nhập lại mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input type="password" className="addaccount-main__input" />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <DropDownDD width="560px" Menu={Roles} onGetValue={getRole} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addaccount-main__info">
                <div className="addaccount-main__title">
                  Tình trạng: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <DropDownDD width="560px" Menu={Active} onGetValue={getState} />
              </div>
            </Grid>
          </Grid>
          <span className="addaccount-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="addaccount-main__button">
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

export default AddAcount;
