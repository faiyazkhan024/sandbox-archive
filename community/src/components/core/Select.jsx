import { twMerge } from "tailwind-merge";

const Select = ({ options, variant, className, ...rest }) => {
  return (
    <select
      className={twMerge(
        "border-slate-300 rounded-lg focus:border-slate-500 focus:ring-0",
        variant === "sm" && "py-1 text-sm",
        className
      )}
      {...rest}
    >
      {options.map(({ name, value, ...rest }, idx) => (
        <option key={idx} value={value} {...rest}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default Select;
