import React from "react";
export interface IErorTextProps {
  error: string;
}
const ErrorText: React.FC<IErorTextProps> = (props) => {
  const { error } = props;
  if (error === "") return null;

  return <span className="text-danger">{error}</span>;
};

export default ErrorText;
