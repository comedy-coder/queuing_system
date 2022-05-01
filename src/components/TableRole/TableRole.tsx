import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../Store/Provider";
import "./tablerole.scss";
import { getID } from "../../Store/action";
const TableRole = ({ data }: any) => {
  const [state, dispatch] = useContext(Context);
  const handleUpdate = (id: any) => {
    dispatch(getID(id));
  };
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
          {data.map((item: any, index: any) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.nbusers}</td>
              <td>{item.desc}</td>

              <td>
                <Link to="/setting/vai-tro/update">
                  <span onClick={() => handleUpdate(item.id)}>Cập nhật</span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableRole;
