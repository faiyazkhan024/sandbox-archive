import { twMerge } from "tailwind-merge";

const Link = ({
  to,
  icon,
  isActive,
  children,
  className,
  position = "start",
}) => {
  const Icon = icon instanceof Function ? icon : null;

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", to);
    const popState = new PopStateEvent("popstate");
    window.dispatchEvent(popState);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={twMerge(
        "px-4 py-2 rounded hover:bg-primary hover:shadow active:shadow-inner",
        icon && "flex items-center gap-2",
        isActive && "bg-primary shadow-inner",
        className
      )}
    >
      {position === "start" && (Icon ? <Icon /> : icon)}
      {children}
      {position === "end" && (Icon ? <Icon /> : icon)}
    </a>
  );
};

export default Link;
