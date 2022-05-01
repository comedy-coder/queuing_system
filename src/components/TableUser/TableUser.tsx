import React from "react";

import "./tableuser.scss";
const TableUser = ({ data }: any) => {
  const datetime: any = [];
  data.forEach((item: any, index: any) =>
    datetime.push(new Date(item.date.seconds * 1000).toLocaleString())
  );
  return (
    <div className="tableuser-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Tên đăng nhập</th>
            <th>Thời gian tác động</th>
            <th>IP thực hiện </th>
            <th>Thao tác thực hiện</th>
          </tr>
          {data.map((item: any, index: any) => (
            <tr>
              <td>{item.name}</td>
              <td>{datetime[index]}</td>
              <td>{item.ip} </td>

              <td>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableUser;
