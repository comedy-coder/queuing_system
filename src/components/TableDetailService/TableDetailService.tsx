import React from "react";

import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./tabledetailservice.scss";

type TableProps = {
  data: any;
};
const TableDetailService = ({ data }: TableProps) => {
  return (
    <div className="tabledetailservice-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Số thứ tự</th>
            <th>Trạng thái</th>
          </tr>
          {data.map((item: any, index: any) => (
            <tr>
              <td>2010001</td>

              <td>
                {item.active ? (
                  <img srcSet={`${greendot} 2x`} alt="" />
                ) : (
                  <img srcSet={`${dotred} 2x`} alt="" />
                )}
                <span>{item.active ? "Đã hoàn thành" : "Vắng"}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDetailService;
