import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import pages from "../../assets/images/table/pages.png";
import "./table.scss";
const Table = () => {
  return (
    <div className="device-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Mã Thiết Bị</th>
            <th>Tên Thiết Bị</th>
            <th>Địa chỉ IP</th>
            <th>Trạng thái hoat động</th>
            <th>Trạng thái kết nối</th>
            <th>Dịch vụ sử dụng</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Mất kết nối</td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>
            <td>
              <img srcSet={`${greendot} 2x`} alt="" />
              Kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>
            <td>
              <img srcSet={`${greendot} 2x`} alt="" />
              Kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>
            <td>
              <img srcSet={`${greendot} 2x`} alt="" /> Kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>
              <img srcSet={`${dotred} 2x`} alt="" />
              Mất kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>
              <img srcSet={`${dotred} 2x`} alt="" /> Mất kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>{" "}
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>
            <td>
              <img srcSet={`${greendot} 2x`} alt="" /> Kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Mất kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
          <tr>
            <td>KIO_01</td>
            <td>Kiosk</td>
            <td>192.168.1.10</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>
            <td>
              <img srcSet={`${greendot} 2x`} alt="" /> Kết nối
            </td>
            <td>
              Kham tim mạch khám mắt <br />
              <Link to="">Xem thêm</Link>
            </td>
            <td>
              <Link to="/device/detail">Chi tiết</Link>
            </td>
            <td>Cập nhật</td>
          </tr>
        </tbody>
      </table>
      <div className="device-pages">
        <img srcSet={`${pages} 2x`} alt="" />
      </div>
    </div>
  );
};

export default Table;
