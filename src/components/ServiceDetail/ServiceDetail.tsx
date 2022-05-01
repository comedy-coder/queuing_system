import React from "react";
import Calendar from "../Calendar/Calendar";
import AddButton from "../AddButton/AddButton";
import SelectorDD from "../SelectorDropdown/SelectorDD";
import TableDetailService from "../TableDetailService/TableDetailService";
import edit from "../../assets/images/addbutton/edit.png";
import back from "../../assets/images/addbutton/back.png";
import "./servicedetail.scss";
import { db } from "../../utils/init-firebase";
import { collection, getDocs } from "firebase/firestore";
import { Context } from "../../Store/Provider";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getID } from "../../Store/action";
const ServiceDetail = () => {
  const [state, dispatch] = useContext(Context);
  const item = state.detaildevice[0];

  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Services");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const datetime = state.datetime;
  const [valueState, setvalueState] = useState<any | null>();
  const getValueState = (value: any) => {
    setvalueState(Number(value));
  };
  const filterData = (data: any) => {
    if (valueState === 1) {
      return data.filter((data: any) => data.active === Boolean(valueState));
    } else if (valueState === 0) {
      return data.filter((data: any) => data.active === Boolean(valueState));
    } else return data;
  };

  const fiterTime = (Data: any) => {
    if (datetime.start !== datetime.end) {
      return Data.filter(
        (item: any) =>
          item.date.seconds * 1000 >= datetime.start &&
          item.date.seconds * 1000 <= datetime.end
      );
    } else return Data;
  };

  const State = [
    {
      display: "Tất cả",
      value: "-1",
    },
    {
      display: "Vắng",
      value: "0",
    },
    {
      display: "Đã hoàn thành ",
      value: "1",
    },
  ];
  const navigate = useNavigate();
  const handleChange = () => {
    dispatch(getID(item.id));
    navigate("/dich-vu/update");
  };
  const handleBack = () => {
    navigate("/dich-vu");
  };
  return (
    <div className="servicedetail-wrap">
      <div className="servicedetail-main">
        <div className="servicedetail-title">Quản lý dịch vụ</div>
        <div className="servicedetail-main__top">Thông tin dịch vụ</div>
        <div className="servicedetail-main__info">
          Mã dịch vụ : <span> {item.code}</span>
        </div>
        <div className="servicedetail-main__info">
          Tên dịch vụ : <span> {item.nameservice}</span>
        </div>
        <div className="servicedetail-main__info">
          Mô tả : <span> {item.desservice}</span>
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

        <div className="servicedetail-rules ">
          <div> Reset mỗi ngày </div>
          <span>Ví dụ : 201-202</span>
        </div>
      </div>
      <div className="servicedetail-main1">
        <div className="servicedetail-main1__top">
          <SelectorDD
            title="Trạng thái"
            width="160px"
            Menu={State}
            onGetValue={getValueState}
          />
          <Calendar styles={{ marginLeft: "12px" }} />
        </div>
        <TableDetailService data={fiterTime(filterData(User))} />
      </div>
      <div className="servicedetail-button">
        <AddButton img={edit} handleClick={handleChange}>
          {" "}
          Cập nhật danh sách
        </AddButton>
      </div>
      <div className="servicedetail-button1">
        <AddButton img={back} handleClick={handleBack}>
          {" "}
          Quay lại
        </AddButton>
      </div>
    </div>
  );
};

export default ServiceDetail;
