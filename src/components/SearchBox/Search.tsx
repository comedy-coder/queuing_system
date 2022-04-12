import React from "react";
import search from "../../assets/images/selector/search.png";
const Search = () => {
  return (
    <div className="search-logo">
      <img srcSet={`${search} 2x`} alt="" />
    </div>
  );
};

export default Search;
