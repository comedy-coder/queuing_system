import React from "react";
import "./addbutton.scss";

type AddButtonProp = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  img: any;
};
const AddButton: React.FC<AddButtonProp | null> = ({
  children,
  img,
  handleClick,
}) => {
  return (
    <button className="btnadd" onClick={(event) => handleClick(event, 1)}>
      {" "}
      <img srcSet={`${img} 2x `} alt="" />
      <span>{children}</span>{" "}
    </button>
  );
};

export default AddButton;
