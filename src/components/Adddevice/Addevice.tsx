import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import { useState } from "react";
import Button from "../Button/Button";
import "./adddevice.scss";
import { useNavigate } from "react-router-dom";
import SelectorDD from "../SelectorDropdown/SelectorDD";
import { db } from "../../utils/init-firebase";
import { collection, addDoc } from "firebase/firestore";

const Adđevice = () => {
  const [code, setCode] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const [accuser, setAccuser] = useState<any | null>("");
  const [ip, setIp] = useState<any | null>("");
  const [pass, setPass] = useState<any | null>("");
  const [service, setService] = useState<any | null>("");
  const [type, setType] = useState<any | null>("");
  const getValue = (value: any) => {
    setType(value);
  };
  const navigate = useNavigate();
  const userCollectionRef = collection(db, "Devices");
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      code: code,
      name: name,
      useracc: accuser,
      ip: ip,
      pass: pass,
      service: service,
      type: type,
    });
  };
  const handleBack = () => {
    navigate("/device");
  };

  const handleNext = () => {
    if (
      code !== "" &&
      name !== "" &&
      accuser !== "" &&
      ip !== "" &&
      pass !== "" &&
      service !== "" &&
      type !== ""
    ) {
      createUser();
      alert("Thêm thiết bị thành công");
      navigate("/device");
    } else {
      return alert("Nhập đầy đủ thông tin");
    }
  };
  const Device = [
    {
      display: "Kiosk",
      value: "Kiosk",
    },
    {
      display: "Display counter",
      value: "Display counter",
    },
  ];

  return (
    <div className="adddevice-wrap">
      <div className="adddevice-title">Quản lý dịch vụ</div>
      <div className="adddevice-main">
        <div className="adddevice-main__top">Thông tin thiết bị</div>
        <div className="adddevice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Mã thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập mã thiết bị"
                  onChange={(event) => {
                    setCode(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Loại thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <SelectorDD
                  width="540px"
                  // title="Trang thai hoat dong"
                  onGetValue={getValue}
                  Menu={Device}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Tên thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tên thiết bị"
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Tên đăng nhập : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập tài khoản"
                  onChange={(event) => {
                    setAccuser(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Địa chỉ IP : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập địa chỉ IP"
                  onChange={(event) => {
                    setIp(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="text"
                  className="adddevice-main__input"
                  placeholder="Nhập lại mật khẩu"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="adddevice-main__info">
                <div className="adddevice-main__title">
                  Dịch vụ sử dụng : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="adddevice-main__input1"
                  placeholder="Nhập dịch vụ"
                  onChange={(event) => {
                    setService(event.target.value);
                  }}
                />
              </div>
            </Grid>
          </Grid>
          <span className="adddevice-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="adddevice-main__button">
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

export default Adđevice;
