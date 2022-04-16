import close from "../../assets/images/modal/close.png";
import "./closebutton.scss";
type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button: React.FC<ButtonProps | null> = ({ handleClick }) => {
  return (
    <button className="button-close" onClick={(event) => handleClick(event, 1)}>
      <img srcSet={`${close} 2x `} alt="" />
    </button>
  );
};

export default Button;
