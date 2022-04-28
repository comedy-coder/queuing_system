import { Grid } from "@mui/material";
import React from "react";
import sao from "../../assets/images/addbutton/sao.png";
import Button from "../Button/Button";
import "./updateservice.scss";
import { Context } from "../../Store/Provider";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../utils/init-firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
const Updateservice = () => {
  const [code, setCode] = useState<any | null>("");
  const [name, setName] = useState<any | null>("");
  const [desservice, setDesservice] = useState<any | null>("");
  const [state] = useContext(Context);
  const id = state.detailid;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dich-vu");
  };
  const handleNext = (id: any, code: any) => {
    if (code !== "" && name !== "" && desservice !== "") {
      console.log(id);
      const updateservice = async (id: any, code: any) => {
        const userDoc = doc(db, "Services", id);

        const newFields = {
          code: code,
          desservice: desservice,
          nameservice: name,
        };
        await updateDoc(userDoc, newFields);
      };
      updateservice(id, code);
      alert("Cập nhật thành công");
      navigate("/dich-vu");
    } else {
      return alert("Nhập đầy đủ thông tin");
    }
  };
  return (
    <div className="updateservice-wrap">
      <div className="updateservice-title">Quản lý dịch vụ</div>
      <div className="updateservice-main">
        <div className="updateservice-main__top">Thông tin dịch vụ</div>
        <div className="updateservice-main__group">
          <Grid container my={2} columnSpacing={4}>
            <Grid item xs={6}>
              <div className="updateservice-main__info">
                <div className="updateservice-main__title">
                  Mã dịch vụ: <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <input
                  type="text"
                  className="updateservice-main__input"
                  placeholder="Nhập mã"
                  onChange={(event) => {
                    setCode(event.target.value);
                  }}
                />
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="updateservice-main__info">
                <div className="updateservice-main__title">
                  Mô tả : <img srcSet={`${sao} 2x`} alt="" />
                </div>
                <textarea
                  onChange={(event) => {
                    setDesservice(event.target.value);
                  }}
                ></textarea>
              </div>
            </Grid>
            <div className="test">
              <Grid item xs={6}>
                <div className="updateservice-main__info">
                  <div className="updateservice-main__title">
                    Tên dịch vụ : <img srcSet={`${sao} 2x`} alt="" />
                  </div>
                  <input
                    type="text"
                    className="updateservice-main__input"
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
        <div className="updateservice-main__top">Quy tắc cấp số</div>
        <div className="updateservice-rules">
          <input type="checkbox" className="updateservice-checkbox"></input>
          <span>
            {" "}
            Tăng tự động từ :{" "}
            <input
              type="text"
              className="updateservice-text"
              placeholder="0001"
            />{" "}
            đến{" "}
            <input
              className="updateservice-text"
              type="text"
              placeholder="9999"
            />
          </span>
        </div>
        <div className="updateservice-rules">
          <input type="checkbox" className="updateservice-checkbox"></input>
          <span>
            {" "}
            Prelix:{" "}
            <input
              type="text"
              className="updateservice-text green"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="updateservice-rules">
          <input type="checkbox" className="updateservice-checkbox"></input>
          <span>
            {" "}
            Surflix:{" "}
            <input
              type="text"
              className="updateservice-text red"
              placeholder="0001"
            />{" "}
          </span>
        </div>
        <div className="updateservice-rules ">
          <input type="checkbox" className="updateservice-checkbox"></input>
          <span> Reset mỗi ngày: </span>
        </div>

        <span className="updateservice-main__desc">
          {" "}
          <img srcSet={`${sao} 2x`} alt="" /> Là trường thông tin bắt buộc
        </span>
      </div>
      <div className="updateservice-main__button">
        <Button
          handleClick={handleBack}
          backgroundColor="orange1"
          color="orange"
          border="red"
        >
          Hủy bỏ
        </Button>
        <Link to="/dich-vu">
          <Button
            handleClick={() => {
              handleNext(id, code);
            }}
            backgroundColor="orange"
            color="white"
          >
            Cập nhật
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Updateservice;
