import React from "react";
import AddButton from "../../components/AddButton/AddButton";
import download from "../../assets/images/addbutton/download.png";
import "./report.scss";
import { Link } from "react-router-dom";
import Calendar from "../../components/Calendar/Calendar";
import TableReport from "../../components/TableReport/TableReport";
import Pages from "../../components/PaginatonPages/Pages";
import { useState, useEffect, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import { Context } from "../../Store/Provider";
const Report = () => {
  const handleChange = () => {};
  const [User, setUser] = useState<any>([]);
  const [state] = useContext(Context);
  const datetime = state.datetime;
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Devices");
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

  return (
    <div className="report-wrap">
      <div className="report-selectorgroup">
        <Calendar />
      </div>
      <TableReport data={fiterTime(User)} />
      <div className="level-pages">
        <Pages />
      </div>
      <div className="button-positon">
        <Link to="/bao-cao">
          <AddButton img={download} handleClick={handleChange}>
            {" "}
            Tải về
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Report;
