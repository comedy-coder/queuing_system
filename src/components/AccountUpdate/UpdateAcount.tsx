import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import { db } from "../../utils/init-firebase";

import DropDownDD from "../SelectorDropdown/SelectorDD";
import { useState } from "react";
import "./updateaccount.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import { updateDoc, doc } from "firebase/firestore";
const UpdateAcount = () => {
  const [acc, setAcc] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const [email, setEmail] = useState<any | null>("");
  const [sdt, setSdt] = useState<any | null>("");
  const [role, setRole] = useState<any | null>("");
  const [states, setState] = useState<any | null>("");
  const [state] = useContext(Context);

  const id = state.detailid;
  const navigate = useNavigate();
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
      const updateUser = async () => {
        const userDoc = doc(db, "Users", id);
        const newFields = {
          acc: acc,
          name: name,
          email: email,
          sdt: sdt,
          role: role,
          state: states,
        };
        await updateDoc(userDoc, newFields);
        alert("Cập nhật thiết bị thành công");
        navigate("/setting/tai-khoan");
      };
      updateUser();
    } else return alert("Nhập đầy đủ thông tin");
  };
  return (
    <div className="updateaccount-wrap">
      <div className="updateaccount-title">Quản lý tài khoản</div>
      <div className="updateaccount-main">
        <div className="updateaccount-main__top">Thông tin tài khoản</div>
        <div className="updateaccount-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Họ tên : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="Nguyen Van A"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Tên đăng nhập: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="tuyetnguyen123"
                  onChange={(event) => {
                    setAcc(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Số điện thoại : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="0902345678"
                  onChange={(event) => {
                    setSdt(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Mật khẩu: : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="password"
                  className="updateaccount-main__input"
                  placeholder="Tuyetnguyen12"
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Email: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateaccount-main__input"
                  placeholder="NguyenA154@gmail.com"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Nhập lại mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="password"
                  className="updateaccount-main__input"
                  placeholder="Tuyetnguyen12"
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Vai trò : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <DropDownDD width="560px" Menu={Roles} onGetValue={getRole} />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateaccount-main__info">
                <div className="updateaccount-main__title">
                  Tình trạng: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <DropDownDD width="560px" Menu={Active} onGetValue={getState} />
              </div>
            </Grid>
          </Grid>
          <span className="updateaccount-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="updateaccount-main__button">
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

export default UpdateAcount;
