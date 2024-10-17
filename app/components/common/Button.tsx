import React from "react";

interface IButton {
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<IButton> = ({ children, disabled = false, type = "button" }) => {
  return (
    <button
      type={type}
      aria-disabled={disabled}
      className={`py-2 text-xl uppercase rounded-xl text-white border border-slate-300 transition duration-300 w-full ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
      disabled={disabled} // Ensures that the button is truly disabled
    >
      {children}
    </button>
  );
};

export default Button;
