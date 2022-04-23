import React from "react";
import "./pages.scss";
import PaginatedItems from "react-paginate";
const Pages = () => {
  return (
    <PaginatedItems
      pageCount={10}
      className="pagination"
      previousLabel={"<"}
      nextLabel={">"}
    />
  );
};

export default Pages;
