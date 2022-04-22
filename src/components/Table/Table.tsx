import { Link } from "react-router-dom";
import dotred from "../../assets/images/table/dotred.png";
import greendot from "../../assets/images/table/greendot.png";
import pages from "../../assets/images/table/pages.png";
import "./table.scss";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
const Table = () => {
  const [User, setUser] = useState<any>([]);
  const UserColecctionRef = collection(db, "Devices");

  useEffect(() => {
    const getUser = async () => {
      const data = await getDocs(UserColecctionRef);
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const handleEvent = (id: any) => {
    const Item = User.filter((item: any, index: any) => item.id === id);
    console.log(Item);
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

          {User.map((item: any, index: number) => (
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
                        handleEvent(item.id);
                      }}
                    >
                      {" "}
                      Chi tiết
                    </span>
                  </Link>
                </td>
                <td>
                  <Link to="/device/update">
                    <span> Cập nhật</span>
                  </Link>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <div className="device-pages">
        <img srcSet={`${pages} 2x`} alt="" />
      </div>
    </div>
  );
};

export default Table;
