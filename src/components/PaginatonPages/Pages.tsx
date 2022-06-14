import React from "react";
import "./pages.scss";
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

  return (
    <nav>
      <ul className="pagination">
        {pagesNumber.map((number) => (
          <li key={number} className="page-item">
            {" "}
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pages;
