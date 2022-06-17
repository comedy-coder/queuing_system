import React from "react";
import "./pages.scss";
import { useState } from "react";
type PagesProps = {
  userPerPage: any;
  totalUsers: any;
  paginate: any;
};
const Pages = ({ userPerPage, totalUsers, paginate }: PagesProps) => {
  const pagesNumber = [];
  for (let i = 1; i <= Math.ceil(totalUsers / userPerPage); i++) {
    pagesNumber.push(i);
  }
  const [selected, setSelected] = useState(0);
  return (
    <nav>
      <ul className="pagination">
        {pagesNumber.map((number, index) => (
          <li
            onClick={() => {
              paginate(number);
              setSelected(index);
            }}
            key={number}
            className={`${index === selected ? "selected" : ""}`}
          >
            {" "}
            <a className="page-link">{number}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
