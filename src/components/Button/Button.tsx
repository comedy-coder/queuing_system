import "./button.scss";
type ButtonProps = {
  backgroundColor?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  border?: string;
  icon?: string;
  color?: string;
  size?: string;
};
const Button: React.FC<ButtonProps | null> = ({
  children,
  backgroundColor,
  border,
  handleClick,
  icon,
  color,
  size,
}) => {
  const bg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const bd = border ? "bd-" + border : "";
  const cl = color ? "cl-" + color : "";
  const sz = size ? "sz-" + size : "";
  return (
    <button
      className={`btn ${bg} ${bd} ${cl} ${sz}`}
      onClick={(event) => handleClick(event, 1)}
    >
      {icon ? <img srcSet={`${icon} 2x `} alt="" /> : ""}
      <span className="btn__txt">{children}</span>
    </button>
  );
};

export default Button;
