import React from "react";

import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./tabledetailservice.scss";
const TableDetailService = () => {
  return (
    <div className="tabledetailservice-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Số thứ tự</th>
            <th>Trạng thái</th>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đã hoàn thành
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đã hoàn thành
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
          <tr>
            <td>2010001</td>

            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableDetailService;
