import { twMerge } from "tailwind-merge";

import Button from "./Button";

const ListItem = ({ to, logo, title, subtitle, action }) => {
  return (
    <li className="flex items-center gap-4">
      <a href={to || ""} className="flex items-center gap-2 group">
        {logo && (
          <span
            style={{ backgroundImage: `url(${logo})` }}
            className={twMerge("w-9 h-9 rounded-full bg-cover bg-center")}
          />
        )}
        <div>
          <p className="font-medium group-hover:underline group-active:text-gray-500">
            {title}
          </p>
          <p className="text-sm text-gray-400">{subtitle}</p>
        </div>
      </a>

      {action && (
        <Button size="small" variant="contained" className="rounded-2xl">
          {action}
        </Button>
      )}
    </li>
  );
};

export default ListItem;
