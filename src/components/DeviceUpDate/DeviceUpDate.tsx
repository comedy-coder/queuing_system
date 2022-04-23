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
const UpDatedevice = () => {
  const [updatecode, setCode] = useState<any | null>("");
  const [userName, setUserName] = useState<any | null>("");
  const [accuser, setAccuser] = useState<any | null>("");
  const [updateip, setIp] = useState<any | null>("");
  const [pass, setPass] = useState<any | null>("");
  const [type, setType] = useState<any | null>("");

  const [state] = useContext(Context);

  const id = state.detailid;

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
      type !== ""
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
                <div className="updatedevice-main__group1">
                  <Grid container columnSpacing={3.2}>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tim mạch</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám sản phụ khoa</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám răng hàm mặt</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tai mũi họng</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám hô hấp</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                    <Grid item>
                      <button className="updatedevice-main__item">
                        <span>Khám tổng quát</span>
                        <img srcSet={`${close} 2x`} alt="" />
                      </button>
                    </Grid>
                  </Grid>
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
