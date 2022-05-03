import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./addservice.scss";
import { useState } from "react";
import { db } from "../../utils/init-firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Addservice = () => {
  const userCollectionRef = collection(db, "Services");
  const [code, setCode] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const [desservice, setDesservice] = useState<any | null>("");
  const createUser = async () => {
    await addDoc(userCollectionRef, {
      code: code,
      nameservice: name,
      desservice: desservice,
      date: new Date(),
    });
  };
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dich-vu");
  };
  const handleNext = () => {
    if (code !== "" && name !== "" && desservice !== "") {
      createUser();
      alert("Thêm dịch vụ thành công");
      navigate("/dich-vu");
    } else {
      return alert("Nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="addservice-wrap">
      <div className="addservice-title">Quản lý dịch vụ</div>
      <div className="addservice-main">
        <div className="addservice-main__top">Thông tin dịch vụ</div>
        <div className="addservice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Mã dịch vụ: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="addservice-main__input"
                  placeholder="Nhập mã"
                  onChange={(event) => {
                    setCode(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="addservice-main__info">
                <div className="addservice-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <textarea
                  onChange={(event) => {
                    setDesservice(event.target.value);
                  }}
                  placeholder="Mô tả dịch vụ"
                ></textarea>
              </div>
            </Grid>
            <div className="test">
              <Grid item xs={6}>
                <div className="addservice-main__info">
                  <div className="addservice-main__title">
                    Tên dịch vụ : <img srcSet={`${sao} 2x`} alt="" />
                  </div>
                  <input
                    type="text"
                    className="addservice-main__input"
                    placeholder="Khám tim mạch"
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                  />
                </div>
              </Grid>{" "}
            </div>
          </Grid>
        </div>
        <div className="addservice-main__top">Quy tắc cấp số</div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Tăng tự động từ :{" "}
            <input
              type="text"
              className="addservice-text"
              placeholder="0001"
            />{" "}
            đến{" "}
            <input className="addservice-text" type="text" placeholder="9999" />
          </span>
        </div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Prelix:{" "}
            <input
              type="text"
              className="addservice-text green"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="addservice-rules">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span>
            {" "}
            Surflix:{" "}
            <input
              type="text"
              className="addservice-text red"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="addservice-rules ">
          <input type="checkbox" className="addservice-checkbox"></input>
          <span> Reset mỗi ngày: </span>
        </div>

        <span className="addservice-main__desc">
          {" "}
          <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
        </span>
      </div>
      <div className="addservice-main__button">
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

export default Addservice;
