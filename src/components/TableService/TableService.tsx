import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import pages from "../../assets/images/table/pages.png";
import "./tableservice.scss";
const TableService = () => {
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
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>{" "}
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>Mô tả dịch vụ </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/dich-vu/detail">Chi tiết</Link>
            </td>
            <td>
              <Link to="/dich-vu/update">Cập nhật</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableService;
