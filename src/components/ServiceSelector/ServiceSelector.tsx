import React, { useRef, useState } from "react";
import "./serviceselector.scss";

export interface IservicedropdownProps {
  width: string;
  title?: string;
  onGetValue?: any;
  Menu: {
    display: string;
    value: string;
  }[];
  special?: boolean;
}

const ServiceSelector = (props: IservicedropdownProps) => {
  const width = { width: `${props.width}` };
  const title = props.title;
  const listMenu = props.Menu;
  const special = props.special ? "special" : "";
  const [itemShow, setItemShow] = useState(listMenu[0]);
  const [isActive, setActive] = useState(false);
  const itemClick = (index: number) => {
    setItemShow(listMenu[index]);
    props.onGetValue(listMenu[index].value);
    setActive(!isActive);
  };
  const ref = useRef<any | null>(null);

  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <div className="servicedropdown" style={width}>
      <div className="servicedropdown__header">
        <span className="servicedropdown__header--title">{title}</span>
      </div>
      <div className="servicedropdown__content ">
        <button
          className={`servicedropdown__button  ${
            isActive ? "active" : ""
          } ${special}`}
          style={width}
          onClick={handleClick}
        ></button>
        <div
          className={`servicedropdown__list  ${isActive ? "active" : ""}`}
          style={width}
        >
          <div
            className="servicedropdown__list--content"
            style={width}
            ref={ref}
          >
            {listMenu.map((item, index, listMenu) => {
              return (
                <button
                  className="servicedropdown__list--content-item"
                  key={index}
                  onClick={() => itemClick(index)}
                >
                  <span className="servicedropdown__list--content-item-title">
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

export default ServiceSelector;
