import React from "react";

import dotred from "../../assets/images/table/dotred.png";
import bluedot from "../../assets/images/table/bluedot.png";

import "./tablereport.scss";

const TableReport = ({ data }: any) => {
  // const date = new Date(data[0].date.seconds * 1000);
  const datetime: any = [];
  data.forEach((item: any, index: any) =>
    datetime.push(new Date(item.date.seconds * 1000).toLocaleString())
  );

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
          {data.map((item: any, index: any) => (
            <tr>
              <td>2010001</td>
              <td> {item.service}</td>
              <td>{datetime[index]}</td>
              <td>
                {item.active ? (
                  <img srcSet={`${bluedot} 2x`} alt="" />
                ) : (
                  <img srcSet={`${dotred} 2x`} alt="" />
                )}
                <span>{item.active ? "Đang chờ" : "Bỏ qua"}</span>
              </td>

              <td>{item.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableReport;
