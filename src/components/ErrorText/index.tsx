import React from "react";
import ExclamationCircleOutlined from "@ant-design/icons";
export interface IErorTextProps {
  error: string;
}
const ErrorText: React.FC<IErorTextProps> = (props) => {
  const { error } = props;
  if (error === "") return null;

  return (
    <span className="text-danger">
      {" "}
      <ExclamationCircleOutlined />
      {error}
    </span>
  );
};

export default ErrorText;
