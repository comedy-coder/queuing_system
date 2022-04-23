import React from "react";
import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";

import "./tableaccount.scss";
const TableAccount = () => {
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
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/setting/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/setting/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/setting/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>

            <td>
              <Link to="/setting/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/setting/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${dotred} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Ngưng hoạt động
            </td>

            <td>
              <Link to="/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
          <tr>
            <td>tuyetnguyen@12</td>
            <td>Nguyen Văn A</td>
            <td>0919256712</td>
            <td>tuyetnguyen123@gmail.comi</td>
            <td>
              Kế toán <br />
            </td>
            <td>
              {" "}
              <img srcSet={`${greendot} 2x`} alt="" /> Hoạt động
            </td>

            <td>
              <Link to="/tai-khoan/update">Cập nhật</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableAccount;
