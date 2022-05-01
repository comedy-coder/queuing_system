import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";
import addbtn from "../../../assets/images/addbutton/addbtn.png";
import "./user.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";
import { useContext } from "react";
import { Context } from "../../../Store/Provider";
import { useState, useEffect } from "react";
import Pages from "../../../components/PaginatonPages/Pages";
import { Link } from "react-router-dom";
import Calendar from "../../../components/Calendar/Calendar";
import Tableuser from "../../../components/TableUser/TableUser";
const User = () => {
  const [state] = useContext(Context);
  const datetime = state.datetime;
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "DiaryActive");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  const fiterTime = (Data: any) => {
    if (datetime.start !== datetime.end) {
      return Data.filter(
        (item: any) =>
          item.date.seconds * 1000 >= datetime.start &&
          item.date.seconds * 1000 <= datetime.end
      );
    } else return Data;
  };
  const handleChange = () => {};
  return (
    <div className="user-wrap">
      <div className="user-selectorgroup">
        <div className="device-selectorgroup1">
          <Calendar />
        </div>
        <Search title="Từ khóa" width="300px" left="266.5px" />
      </div>
      <Tableuser data={fiterTime(User)} />
      <div className="level-pages">
        <Pages />
      </div>
      <div className="button-positon">
        <Link to="/bao-cao">
          <AddButton img={addbtn} handleClick={handleChange}>
            {" "}
            Tải về
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default User;
