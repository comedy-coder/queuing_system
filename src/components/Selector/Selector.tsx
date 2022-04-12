import React from "react";
import "./selector.scss";
import arrow from "../../assets/images/dashboard/arrow.png";
import { useState } from "react";
type SelectorProp = {
  title?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  size?: string;
};
const Selector: React.FC<SelectorProp | null> = ({
  title,
  option1,
  option2,
  option3,
  size,
}) => {
  const [isActive, setActive] = useState(false);
  const handleChange = () => {
    setActive(!isActive);
  };
  const sz = size ? "sz-" + size : "";

  const activeSelect = isActive ? "active" : "";
  return (
    <div className="selector-wrap">
      <div className="selector-title">{title}</div>
      <select
        onClick={handleChange}
        className={`sl ${sz} ${activeSelect}`}
        style={{ backgroundImage: arrow }}
      >
        <option>{option1}</option>
        <option>{option2}</option>
        <option>{option3}</option>
      </select>
    </div>
  );
};

export default Selector;
