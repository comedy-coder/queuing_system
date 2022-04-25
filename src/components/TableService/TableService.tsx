import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./tableservice.scss";
type TableProps = {
  data: any;
};
const TableService = ({ data }: TableProps) => {
  return (
    <div className="tableservice-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Mã Dịch vụ</th>
            <th>Tên Dịch vụ</th>
            <th>Mô tả</th>
            <th>Trạng thái hoat động</th>

            <th></th>
            <th></th>
          </tr>
          {data.map((item: any, index: any) => (
            <tr>
              <td>
                {item.code}
                <span></span>
              </td>
              <td>
                {item.name}
                <span></span>
              </td>
              <td>
                Mô tả dịch vụ <span></span>
              </td>
              <td>
                {item.active ? (
                  <img srcSet={`${greendot} 2x`} alt="" />
                ) : (
                  <img srcSet={`${dotred} 2x`} alt="" />
                )}
                <span>{item.active ? "Hoạt động" : "Ngưng hoạt động"}</span>
              </td>

              <td>
                <Link to="/dich-vu/detail">Chi tiết</Link>
                <span></span>
              </td>
              <td>
                <Link to="/dich-vu/update">Cập nhật</Link>
                <span></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableService;
