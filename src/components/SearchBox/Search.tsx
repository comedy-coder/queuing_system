import * as React from "react";
import "./search.scss";
import search from "../../assets/images/search/search.png";
export interface ISearchInputProps {
  width: string;
  left: string;
  title: string;
  onGetValue?: any;
}

const Search = (props: ISearchInputProps) => {
  const width = { width: `${props.width}` };
  const title = props.title;
  const getValue = (e: any) => {
    props.onGetValue(e);
  };
  return (
    <div className="searchinput" style={{ width: `${props.width}` }}>
      <div className="searchinput__title"> {title}</div>
      <div className="searchinput__content">
        <input
          className="searchinput__content--input"
          style={width}
          type="text"
          placeholder="Nhập từ khóa"
          onChange={(event) => getValue(event.target.value)}
        />
        <img
          srcSet={`${search} 2x`}
          className="searchinput__content--icon"
          alt="Search"
          style={{ marginLeft: `${props.left}` }}
        />
      </div>
    </div>
  );
};
export default Search;
