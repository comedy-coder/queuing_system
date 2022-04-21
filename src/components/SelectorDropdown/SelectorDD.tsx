import React, { useState } from "react";
import "./selectordd.scss";
import arrowdown from "../../assets/images/dashboard/arrow.png";
import arrowup from "../../assets/images/selector/arrow.png";

export interface IDropDownProps {
  width: string;
  title?: string;
  Menu: {
    display: string;
    value: string;
  }[];
}

const DropDownDD = (props: IDropDownProps) => {
  const width = { width: `${props.width}` };
  const title = props.title;
  const listMenu = props.Menu;
  const [itemShow, setItemShow] = useState(listMenu[0]);
  const [isActive, setActive] = useState(false);
  const itemClick = (index: number) => {
    setItemShow(listMenu[index]);
  };
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="dropdown" style={width}>
      <div className="dropdown__header">
        <span className="dropdown__header--title">{title}</span>
      </div>
      <div className="dropdown__content ">
        <button
          className={`dropdown__button  ${isActive ? "active" : ""}`}
          style={width}
          onClick={handleClick}
        >
          <span className="dropdown__button--title">{itemShow.display}</span>
          <img
            srcSet={`${isActive ? arrowup : arrowdown} 2x `}
            className="dropdown__button--icon"
            alt="Dropdown"
          />
        </button>
        <div
          className={`dropdown__list  ${isActive ? "active" : ""}`}
          style={width}
        >
          <div className="dropdown__list--content" style={width}>
            {listMenu.map((item, index, listMenu) => {
              return (
                <button
                  className="dropdown__list--content-item"
                  key={index}
                  onClick={() => itemClick(index)}
                >
                  <span className="dropdown__list--content-item-title">
                    {item.display}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropDownDD;
