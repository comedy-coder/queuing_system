import AddButton from "../../components/AddButton/AddButton";
import Search from "../../components/SearchBox/Search";
import adbtn from "../../assets/images/addbutton/addbtn.png";
import Table from "../../components/Table/Table";
import "./device.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../utils/init-firebase";
import SelectorDD from "../../components/SelectorDropdown/SelectorDD";
import { Link } from "react-router-dom";
import Pages from "../../components/PaginatonPages/Pages";
import { useState, useEffect } from "react";
import { PaginationEntity } from "../../components/PaginatonPages/entity";

const Devices = () => {
  const [valueState, setvalueState] = useState<any | null>();
  const [valueConnect, setvalueConnect] = useState<any | null>();
  const [currentPage, setCurrentPage] = useState<any | null>(1);
  const [userPerPage, setUserPerPage] = useState<any | null>(8);
  const [User, setUser] = useState<any>([]);
  const [inputSearch, setInputSearch] = useState<any | "">("");

  useEffect(() => {
    const getUser = async () => {
      const UserColecctionRef = collection(db, "Devices");
      const data = await getDocs(UserColecctionRef);

      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUser();
  }, []);

  const indexOfLastUser = currentPage * userPerPage;
  const indexOfFirstUser = indexOfLastUser - userPerPage;
  const currentUser = User.slice(indexOfFirstUser, indexOfLastUser);
  const filterData = (datas: any) => {
    if (valueState === 1) {
      let result = datas.filter(
        (data: any) => data.active === Boolean(valueState)
      );

      if (valueConnect === 1) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (valueConnect === 0) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (inputSearch !== "") {
        return result.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }

      return result;
    } else if (valueState === 0) {
      let result = datas.filter(
        (data: any) => data.active === Boolean(valueState)
      );

      if (valueConnect === 1) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (valueConnect === 0) {
        return result.filter(
          (data: any) => data.connect === Boolean(valueConnect)
        );
      } else if (inputSearch !== "") {
        return result.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }
      return result;
    } else {
      if (valueConnect === 0) {
        let result = datas.filter(
          (item: any) => item.connect === Boolean(valueConnect)
        );

        if (inputSearch)
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
              item.service.toLowerCase().indexOf(inputSearch) > -1
          );
        else return result;
      } else if (valueConnect === 1) {
        let result = datas.filter(
          (item: any) => item.connect === Boolean(valueConnect)
        );
        if (inputSearch)
          return result.filter(
            (item: any) =>
              item.code.toLowerCase().indexOf(inputSearch) > -1 ||
              item.name.toLowerCase().indexOf(inputSearch) > -1 ||
              item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
              item.service.toLowerCase().indexOf(inputSearch) > -1
          );
        else return result;
      } else if (inputSearch) {
        return datas.filter(
          (item: any) =>
            item.code.toLowerCase().indexOf(inputSearch) > -1 ||
            item.name.toLowerCase().indexOf(inputSearch) > -1 ||
            item.ip.toLowerCase().indexOf(inputSearch) > -1 ||
            item.service.toLowerCase().indexOf(inputSearch) > -1
        );
      }
    }
    return datas;
  };

  const Active = [
    {
      display: "T???t c???",
      value: "-1",
    },
    {
      display: "Ho???t ?????ng",
      value: "1",
    },
    {
      display: "Ng??ng ho???t ?????ng",
      value: "0",
    },
  ];
  const getValueState = (value: any) => {
    setvalueState(Number(value));
  };
  const getInputValue = (input: any) => {
    setInputSearch(input);
  };
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
  const Connect = [
    {
      display: "T???t c???",
      value: "-1",
    },
    {
      display: "K???t n???i",
      value: "1",
    },
    {
      display: "M???t k???t n???i",
      value: "0",
    },
  ];
  const getValueConnet = (value: any) => {
    setvalueConnect(Number(value));
  };

  const handleChange = () => {};
  return (
    <div className="device-wrap">
      <div className="device-title">Danh s??ch thi???t b???</div>
      <div className="device-selectorgroup">
        <div className="device-selectorgroup1">
          <SelectorDD
            width="300px"
            title="Tr???ng tha?? ho???t ?????ng"
            Menu={Active}
            onGetValue={getValueState}
          />
          <SelectorDD
            title="Tr???ng th??i k???t n???i"
            width="300px"
            Menu={Connect}
            onGetValue={getValueConnet}
          />
        </div>
        <Search
          width="300px"
          title="T??? kh??a"
          left="266.5px"
          onGetValue={getInputValue}
        />
      </div>
      <Table data={filterData(currentUser)} />
      <div className="device-pages">
        <Pages
          userPerPage={userPerPage}
          totalUsers={User.length}
          paginate={paginate}
        />
      </div>

      <div className="button-positon">
        <Link to="/device/adddevice">
          <AddButton img={adbtn} handleClick={handleChange}>
            {" "}
            Th??m thi???t b???
          </AddButton>
        </Link>
      </div>
    </div>
  );
};

export default Devices;
