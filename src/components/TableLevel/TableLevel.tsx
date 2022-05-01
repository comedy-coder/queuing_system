import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./tablelevel.scss";
const Table = () => {
  const stt = 20000;
  return (
    <div className="level-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>STT</th>
            <th>Tên Khách hàng</th>
            <th>Tên dịch vụ</th>
            <th>Thời gian cấp</th>
            <th>Hạn sử dụng</th>
            <th>Trạng thái</th>
            <th>Nguồn cấp </th>
            <th></th>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>{stt}</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Kiosk</td>
            <td>Khám tim mạch</td>
            <td>14:35 - 07/11/2021</td>
            <td>14:35 - 12/11/2021</td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Ngưng hoạt động
            </td>
            <td>Kiosk</td>
            <td>
              <Link to="/cap-so/detail">Chi tiết</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
