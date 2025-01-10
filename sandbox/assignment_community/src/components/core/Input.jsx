import { twMerge } from "tailwind-merge";

const Input = ({ name, label, labelClass, className, ...rest }) => {
  return (
    <label htmlFor={name}>
      <span className={labelClass}>{label}</span>
      <input
        id={name}
        name={name}
        className={twMerge(
          "w-full px-4 py-2 mt-1 border rounded bg-slate-200 focus:outline-none focus:border-slate-500",
          className
        )}
        {...rest}
      />
    </label>
  );
};

export default Input;
