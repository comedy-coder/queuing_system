import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import "./tableservice.scss";
import { setDetailDevice, getID } from "../../Store/action";
type TableProps = {
  data: any;
};
const TableService = ({ data }: TableProps) => {
  const [state, dispatch] = useContext(Context);
  const handleDetail = (id: any) => {
    const Item = data.filter((item: any, index: any) => item.id === id);
    const { ...Item1 } = Item;

    dispatch(setDetailDevice(Item1));
  };

  const handleUpdate = (id: any) => {
    dispatch(getID(id));
    console.log(id);
  };

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
          {data.map((item: any, index: any) => (
            <tr>
              <td>
                {item.code}
                <span></span>
              </td>
              <td>
                {item.nameservice}
                <span></span>
              </td>
              <td>
                {item.desservice} <span></span>
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
                <Link to="/dich-vu/detail">
                  {" "}
                  <span
                    onClick={() => {
                      handleDetail(item.id);
                    }}
                  >
                    {" "}
                    Chi tiết
                  </span>
                </Link>
                <span></span>
              </td>
              <td>
                <Link to="/dich-vu/update">
                  {" "}
                  <span
                    onClick={() => {
                      handleUpdate(item.id);
                    }}
                  >
                    {" "}
                    Cập nhật
                  </span>
                  t
                </Link>
                <span></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableService;
