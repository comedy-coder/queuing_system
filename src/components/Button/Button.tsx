import "./button.scss";
type ButtonProps = {
  backgroundColor?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  border?: string;
};
const Button: React.FC<ButtonProps | null> = ({
  children,
  backgroundColor,
  border,
  handleClick,
}) => {
  const bg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const bd = border ? "bd-" + border : "bd-main";
  return (
    <button
      className={`btn ${bg} ${bd}`}
      onClick={(event) => handleClick(event, 1)}
    >
      <div className="btn__txt">{children}</div>
    </button>
  );
};

export default Button;
