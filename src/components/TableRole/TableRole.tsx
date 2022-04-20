import React from "react";
import { Link } from "react-router-dom";

import pages from "../../assets/images/table/pages.png";
import "./tablerole.scss";
const TableRole = () => {
  return (
    <div className="tablerole-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Tên vai trò</th>
            <th>Số người dùng</th>
            <th>Mô tả</th>
            <th></th>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>Kế toán</td>
            <td>6</td>
            <td>Thực hiện nhiệm vụ về thống kê số liệu và tổng hợp số liệu</td>

            <td>
              <Link to="/setting/vai-tro/update">Cập nhật</Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="tablerole-pages">
        <img srcSet={`${pages} 2x`} alt="" />
      </div>
    </div>
  );
};

export default TableRole;
