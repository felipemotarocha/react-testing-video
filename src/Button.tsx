import { ReactNode } from "react";

const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: (number: number) => void;
}) => (
  <button
    style={{ backgroundColor: disabled ? "red" : "blue" }}
    onClick={() => onClick(10)}
  >
    {children}
  </button>
);

export default Button;
