import { forwardRef, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLSelectElement> {
  label: string;
  error?: string;
  options?: string[];
}

const Input = forwardRef<HTMLInputElement | HTMLSelectElement, IProps>(
  ({ label, error, type = "text", options, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputClasses = `
      bg-white py-2 px-4 text-xl w-full border rounded-xl 
      ${error ? "border-red-500" : "border-slate-300"} 
      focus:border-blue-500 focus:outline-none
      ${type === "password" ? "pr-14" : ""}`;

    const togglePasswordVisibility = () => {
      setShowPassword((prev) => !prev);
    };

    return (
      <div className="relative">
        <label
          htmlFor={props.id}
          className="absolute left-5 -top-3 bg-slate-50 rounded-xl px-2 transition-all duration-200 ease-in-out"
        >
          {label}
        </label>

        {/* Conditional rendering for select or input based on the type */}
        {options ? (
          <select id={props.id} className={inputClasses} {...props} ref={ref}>
            <option value="">Select an option</option>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <>
            <input
              id={props.id}
              type={type === "password" && showPassword ? "text" : type}
              className={inputClasses}
              {...props}
              ref={ref}
            />
            {type === "password" && (
              <span
                onClick={togglePasswordVisibility}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-stone-600 text-xl z-10 mr-2"
              >
                {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </span>
            )}
          </>
        )}

        {/* Display error message if exists */}
        {error && (
          <span className="absolute uppercase right-0 -bottom-6 text-red-500 text-sm">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
