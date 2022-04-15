import React from "react";
import Calendar from "../Calendar/Calendar";
import Search from "../SearchBox/Search";
import Selector from "../Selector/Selector";
import "./servicedetail.scss";
const ServiceDetail = () => {
  return (
    <div className="servicedetail-wrap">
      <div className="servicedetail-main">
        <div className="servicedetail-title">Quản lý dịch vụ</div>
        <div className="servicedetail-main__top">Thông tin dịch vụ</div>
        <div className="servicedetail-main__info">
          Mã dịch vụ : <span> 201</span>
        </div>
        <div className="servicedetail-main__info">
          Tên dịch vụ : <span> Khám tim mạch</span>
        </div>
        <div className="servicedetail-main__info">
          Mô tả : <span> Chuyên các bệnh lý về tim</span>
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
          <Selector
            title="Trạng thái"
            option1="Tất cả"
            option2="Đã hoàn thành"
            option3="Đã thực hiện"
            size="small"
          />
          <Calendar styles={{ marginLeft: "12px" }} />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
