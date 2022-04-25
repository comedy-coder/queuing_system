import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import close from "../../assets/images/addbutton/close.png";
import Button from "../Button/Button";
import "./updatedevice.scss";
import { useNavigate } from "react-router-dom";
import { Context } from "../../Store/Provider";
import { useContext, useState } from "react";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../../utils/init-firebase";

import ServiceSelector from "../ServiceSelector/ServiceSelector";
const UpDatedevice = () => {
  const [updatecode, setCode] = useState<any | null>("");
  const [userName, setUserName] = useState<any | null>("");
  const [accuser, setAccuser] = useState<any | null>("");
  const [updateip, setIp] = useState<any | null>("");
  const [pass, setPass] = useState<any | null>("");
  const [type, setType] = useState<any | null>("");
  const [service, setService] = useState<any | null>([]);
  const [state] = useContext(Context);

  const id = state.detailid;
  const getValueService = (value: any) => {
    setService((prev: any) => [...prev, value]);
  };
  const filterService = (index: any, services: any) => {
    const firstArr = services.slice(0, index);
    const secondArr = services.slice(index + 1);

    return [...firstArr, ...secondArr];
  };

  const CloseTab = (index: any) => {
    setService(filterService(index, service));
  };
  const ServiceActive = [
    {
      display: "Tất cả",
      value: "Tất cả",
    },
    {
      display: "Khám tim mạch",
      value: "Khám tim mạch",
    },
    {
      display: "Khám phụ khoa",
      value: "Khám phụ khoa",
    },
    {
      display: "Khám răng hàm mặt",
      value: "Khám răng hàm mặt",
    },
    {
      display: "Khám tai mũi họng",
      value: "Khám tai mũi họng",
    },
    {
      display: "Khám hô hấp",
      value: "Khám hô hấp",
    },
    {
      display: "Khám tổng quát",
      value: "Khám tổng quát",
    },
  ];

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/device");
  };
  const handleUpdate = (id: any, code: any) => {
    if (
      updatecode !== "" &&
      userName !== "" &&
      accuser !== "" &&
      updateip !== "" &&
      pass !== "" &&
      type !== "" &&
      service.join() !== ""
    ) {
      const updateUser = async (id: any, code: any) => {
        const userDoc = doc(db, "Devices", id);
        const newFields = {
          code: updatecode,
          ip: updateip,
          name: userName,
          type: type,
          useracc: accuser,
          pass: pass,
          service: service.join(),
        };
        await updateDoc(userDoc, newFields);

        alert("Cập nhật thiết bị thành công");
        navigate("/device");
      };
      updateUser(id, code);
    } else {
      return alert("Nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="updatedevice-wrap">
      <div className="updatedevice-title">Quản lý thiết bị</div>
      <div className="updatedevice-main">
        <div className="updatedevice-main__top">Thông tin thiết bị</div>
        <div className="updatedevice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Mã thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập mã thiết bị"
                  onChange={(event) => {
                    setCode(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Loại thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Chọn loại thiết bị"
                  onChange={(event) => {
                    setType(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Tên thiết bị : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tên thiết bị"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Tên đăng nhập : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                  onChange={(event) => {
                    setAccuser(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Địa chỉ IP : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                  onChange={(event) => {
                    setIp(event.target.value);
                  }}
                />
              </div>
            </Grid>{" "}
            <Grid item xs={6}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Mật khẩu :<img srcSet={`${sao} 2x`} alt="" />{" "}
                </div>
                <input
                  type="text"
                  className="updatedevice-main__input"
                  placeholder="Nhập tài khoản"
                  onChange={(event) => {
                    setPass(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={12}>
              <div className="updatedevice-main__info">
                <div className="updatedevice-main__title">
                  Dịch vụ sử dụng : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <div className="updatedevice-main__selector">
                  <ServiceSelector
                    width="1104px"
                    Menu={ServiceActive}
                    onGetValue={getValueService}
                  />
                  <div className="updatedevice-main__group1">
                    <Grid container columnSpacing={3.2} rowSpacing={1.2}>
                      {service.map((item: any, index: any) => (
                        <Grid item key={index}>
                          <button className="updatedevice-main__item">
                            <span>{item}</span>
                            <img
                              srcSet={`${close} 2x`}
                              alt=""
                              onClick={() => {
                                CloseTab(index);
                              }}
                            />
                          </button>
                        </Grid>
                      ))}
                    </Grid>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <span className="updatedevice-main__desc">
            {" "}
            <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
          </span>
        </div>
      </div>
      <div className="updatedevice-main__button">
        <Button
          handleClick={handleBack}
          backgroundColor="orange1"
          color="orange"
          border="red"
        >
          Hủy bỏ
        </Button>
        <Button
          handleClick={() => handleUpdate(id, updatecode)}
          backgroundColor="orange"
          color="white"
        >
          Cập nhật
        </Button>
      </div>
    </div>
  );
};

export default UpDatedevice;
