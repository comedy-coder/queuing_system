import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./table.scss";
import React, { useState } from "react";

import { Context } from "../../Store/Provider";
import { useContext } from "react";
import { setDetailDevice, getID } from "../../Store/action";
type TableProps = {
  data: any;
};
const Table = ({ data }: TableProps) => {
  const [state, dispatch] = useContext(Context);

  const handleDetail = (id: any) => {
    const Item = data.filter((item: any, index: any) => item.id === id);
    const { ...Item1 } = Item;

    dispatch(setDetailDevice(Item1));
  };

  const handleUpdate = (id: any) => {
    dispatch(getID(id));
  };
  const [description, showDescription] = useState(false);
  const handleExpand = () => {
    showDescription(!description);
  };

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

          {data.map((item: any, index: number) => (
            <>
              <tr key={index}>
                <td>
                  {item.code}
                  <span></span>
                </td>
                <td>
                  {item.name}
                  <span></span>
                </td>
                <td>
                  {item.ip}
                  <span></span>
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
                  {item.connect ? (
                    <img srcSet={`${greendot} 2x`} alt="" />
                  ) : (
                    <img srcSet={`${dotred} 2x`} alt="" />
                  )}
                  <span>{item.connect ? "Kết nối" : "Mất kết nối"}</span>
                </td>

                <td>
                  <div className="device-service_deactive">
                    <div> {item.service}</div>

                    <Link
                      to=""
                      onClick={() => {
                        handleExpand();
                      }}
                    >
                      Xem thêm
                    </Link>
                  </div>
                </td>
                <td>
                  <Link to="/device/detail">
                    <span
                      onClick={() => {
                        handleDetail(item.id);
                      }}
                    >
                      {" "}
                      Chi tiết
                    </span>
                  </Link>
                </td>
                <td>
                  <Link to="/device/update">
                    <span
                      onClick={() => {
                        handleUpdate(item.id);
                      }}
                    >
                      {" "}
                      Cập nhật
                    </span>
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
