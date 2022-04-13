import React from "react";
import "./addbutton.scss";
import adbtn from "../../assets/images/addbutton/addbtn.png";
type AddButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const AddButton: React.FC<AddButtonProp | null> = ({
  children,

  handleClick,
}) => {
  return (
    <button className="btnadd" onClick={(event) => handleClick(event, 1)}>
      {" "}
      <img srcSet={`${adbtn} 2x `} alt="" />
      <span>{children}</span>{" "}
    </button>
  );
};

export default AddButton;
