import { type ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  disabled?: boolean;
  intent?: "primary" | "secondary";
};

export function Button({ children, onPress, disabled = false, intent = "primary" }: ButtonProps) {
  return (
    <button
      className={`btn btn-${intent}`}
      onClick={onPress}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
