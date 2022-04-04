import "./button.scss";
type ButtonProps = {
  backgroundColor?: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
const Button: React.FC<ButtonProps | null> = ({
  children,
  backgroundColor,
  handleClick,
}) => {
  const bg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  return (
    <button className={`btn ${bg}`} onClick={(event) => handleClick(event, 1)}>
      <div className="btn__txt">{children}</div>
    </button>
  );
};

export default Button;
