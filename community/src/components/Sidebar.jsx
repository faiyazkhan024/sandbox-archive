import { twMerge } from "tailwind-merge";
import { IoIosArrowDown } from "react-icons/io";

import Link from "./core/Link";
import List from "./core/List";
import ListItem from "./core/ListItem";
import Button from "./core/Button";
import Typography from "./core/Typography";

import { NAV_ITEMS, COMMUNITY_DATA } from "../data";

const Sidebar = () => {
  const scrollbarClass =
    "scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-primary scrollbar-thumb-rounded-2xl";

  return (
    <aside className="p-4 pt-14 min-w-[16rem] h-screen bg-white shadow-md flex-initial flex flex-col">
      <nav className="mb-6 space-y-2 text-gray-600">
        {NAV_ITEMS.map(({ name, ...rest }, idx) => (
          <Link key={idx} {...rest}>
            {name}
          </Link>
        ))}
      </nav>

      <hr />

      <section
        className={twMerge(
          "pt-8 flex-auto space-y-4 overflow-y-auto",
          scrollbarClass
        )}
      >
        <Typography variant="h4">My Community</Typography>
        <List>
          {COMMUNITY_DATA.map((community, idx) => (
            <ListItem key={idx} {...community} />
          ))}
          {COMMUNITY_DATA.map((community, idx) => (
            <ListItem key={idx} {...community} />
          ))}
        </List>
        <Button
          variant="text"
          icon={IoIosArrowDown}
          className="mx-auto font-medium"
        >
          Show 5 more
        </Button>
      </section>
    </aside>
  );
};

export default Sidebar;
