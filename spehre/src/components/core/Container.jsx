import { twMerge } from "tailwind-merge";

const Container = ({ bgPrimary100, children, className }) => {
  return (
    <section
      className={twMerge(
        "relative flex flex-col items-center px-6 py-16 text-center",
        bgPrimary100 && "bg-primary-100",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
