import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "danger"; // Button styles
  size?: "small" | "medium" | "large"; // Button sizes
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary", // Default variant is 'primary'
  size = "medium", // Default size is 'medium'
  onClick,
  disabled = false, // Default state is enabled
}) => {
  // Base Tailwind classes for all buttons
  const baseClasses =
    "rounded-md font-regular focus:outline-none transition ease-in-out duration-300 border";

  // Conditional classes based on the button variant
  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "bg-transparent border-2 border-gray-300 text-gray-700 hover:border-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  }[variant];

  // Conditional classes based on the button size
  const sizeClasses = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  }[size];

  // Combine classes using clsx and merge using tailwind-merge
  const buttonClasses = twMerge(
    clsx(baseClasses, variantClasses, sizeClasses, {
      "opacity-50 cursor-not-allowed": disabled,
    })
  );

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
