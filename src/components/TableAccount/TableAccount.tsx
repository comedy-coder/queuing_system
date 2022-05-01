import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import { Context } from "../../Store/Provider";
import { useContext } from "react";
import "./tableaccount.scss";
import { getID } from "../../Store/action";
const TableAccount = ({ data }: any) => {
  const [state, dispatch] = useContext(Context);
  const handleUpdate = (id: any) => {
    dispatch(getID(id));
  };

  return (
    <div className="account-data">
      <table>
        <tbody>
          <tr style={{ backgroundColor: "#FFF2E7" }}>
            <th>Tên đăng nhập</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Vai trò</th>
            <th>Trạng thái hoạt động</th>
            <th></th>
          </tr>
          {data.map((item: any, index: any) => (
            <tr>
              <td>{item.acc}</td>
              <td>{item.name}</td>
              <td>{item.sdt}</td>
              <td>{item.email}</td>
              <td>
                {item.role} <br />
              </td>
              <td>
                {item.state ? (
                  <img srcSet={`${greendot} 2x`} alt="" />
                ) : (
                  <img srcSet={`${dotred} 2x`} alt="" />
                )}
                <span>{item.state ? "Hoạt động" : "Ngưng hoạt động"}</span>
              </td>

              <td>
                <Link to="/setting/tai-khoan/update">
                  <span
                    onClick={() => {
                      handleUpdate(item.id);
                    }}
                  >
                    Cập nhật
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

export default TableAccount;
