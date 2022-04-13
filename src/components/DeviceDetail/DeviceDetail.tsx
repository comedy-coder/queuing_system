import React from "react";
import "./devicedetail.scss";
const DeviceDetail = () => {
  return (
    <div className="devicedetail-wrap">
      <div className="devicedetail-title">Quản lý thiết bị</div>
      <div className="devicedetail-main">
        <div className="devicedetail-main__top">Thông tin thiết bị</div>
        <span className="devicedetail-main__title">
          Mã thiết bị : <span className="devicedetail-main__desc">KIO_01</span>
        </span>
      </div>
    </div>
  );
};

export default DeviceDetail;
