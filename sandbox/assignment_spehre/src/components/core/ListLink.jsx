import { twMerge } from "tailwind-merge";

const ListLink = ({
  to = "#",
  flex,
  variant,
  children,
  listClass,
  className,
  ...rest
}) => {
  return (
    <li
      className={twMerge(
        "hover:underline",
        variant === "xs" && "text-xs font-medium leading-5 text-primary-400 ",
        variant === "lg" && "text-lg font-medium leading-7 text-primary-700",
        listClass
      )}
    >
      <a
        href={to}
        className={twMerge(flex && "flex items-center gap-3")}
        {...rest}
      >
        {children}
      </a>
    </li>
  );
};

export default ListLink;
