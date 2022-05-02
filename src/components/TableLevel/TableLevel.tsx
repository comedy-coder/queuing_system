import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import bluedot from "../../assets/images/table/bluedot.png";
import blackdot from "../../assets/images/table/blackdot.png";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import "./tablelevel.scss";
import { setDetailDevice } from "../../Store/action";
const TableLevel = ({ data }: any) => {
  const [state, dispatch] = useContext(Context);
  const handleDetail = (id: any) => {
    const Item = data.filter((item: any, index: any) => item.id === id);
    const { ...Item1 } = Item;

    dispatch(setDetailDevice(Item1));
  };
  const stt = 200000;
  const datetime1: any = [];
  data.forEach((item: any, index: any) =>
    datetime1.push(new Date(item.time1.seconds * 1000).toLocaleString())
  );
  const datetime2: any = [];
  data.forEach((item: any, index: any) =>
    datetime2.push(new Date(item.time2.seconds * 1000).toLocaleString())
  );

  const dot = (data: any) => {
    if (data === "Đang chờ") return bluedot;
    if (data === "Đã sử dụng") return blackdot;
    else return dotred;
  };

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
          {data.map((item: any, index: any) => (
            <tr>
              <td>{stt + index}</td>
              <td>{item.name}</td>
              <td>{item.nameservice}</td>
              <td>{datetime1[index]}</td>
              <td>{datetime2[index]}</td>
              <td>
                {" "}
                <img srcSet={`${dot(item.state)} 2x`} alt="" /> {item.state}
              </td>
              <td>{item.source}</td>
              <td>
                <Link to="/cap-so/detail">
                  <span
                    onClick={() => {
                      handleDetail(item.id);
                    }}
                  >
                    Chi tiết
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableLevel;
