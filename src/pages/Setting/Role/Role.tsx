import React from "react";
import AddButton from "../../../components/AddButton/AddButton";
import Search from "../../../components/SearchBox/Search";
import addbtn from "../../../assets/images/addbutton/addbtn.png";
import Pages from "../../../components/PaginatonPages/Pages";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../utils/init-firebase";
import "./role.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Tablerole from "../../../components/TableRole/TableRole";
const Role = () => {
  const [currentPage, setCurrentPage] = useState<any | null>(1);
  const [userPerPage, setUserPerPage] = useState<any | null>(8);
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const [inputSearch, setInputSearch] = useState<any | "">("");
  const getInputValue = (input: any) => {
    setInputSearch(input);
  };
  const [User, setUser] = useState<any>([]);
  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Roles");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);
  console.log(User);
  const filterData = (datas: any) =>
    datas.filter(
      (item: any) =>
        item.name.toLowerCase().indexOf(inputSearch) > -1 ||
        item.nbusers.toLowerCase().indexOf(inputSearch) > -1 ||
        item.desc.toLowerCase().indexOf(inputSearch) > -1
    );

  const handleChange = () => {};
  return (
    <div className="role-wrap">
      <div className="role-title">Danh sách tài khoản</div>
      <div className="role-selectorgroup">
        <div className="role-selectorgroup1"></div>
        <Search
          title="Từ khóa"
          width="240px"
          left="206.5px"
          onGetValue={getInputValue}
        />
      </div>
      <Tablerole data={filterData(User)} />
      <div className="level-pages">
        <Pages
          userPerPage={userPerPage}
          totalUsers={User.length}
          paginate={paginate}
        />
      </div>
      <div className="button-positon">
        <Link to="/setting/vai-tro/addrole">
          <AddButton img={addbtn} handleClick={handleChange}>
            {" "}
            Thêm vai trò
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Role;
