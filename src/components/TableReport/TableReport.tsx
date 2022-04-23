import React from "react";

import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import pages from "../../assets/images/table/pages.png";
import "./tablereport.scss";
const TableReport = () => {
  return (
    <div className="tablereport-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Số thứ tụ</th>
            <th>Tên Dịch vụ</th>
            <th>Thời gian cấp</th>
            <th>Tình trạng</th>

            <th>Nguồn cấp</th>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>{" "}
          <tr>
            <td>2010001</td>
            <td>Khám tim mạch</td>
            <td>07:20 - 07/10/2021 </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Đang chờ
            </td>

            <td>Kiosk</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;
