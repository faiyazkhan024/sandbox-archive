import { IoIosArrowDown } from "react-icons/io";

import Card from "./core/Card";
import List from "./core/List";
import ListItem from "./core/ListItem";
import Typography from "./core/Typography";

import { COMMUNITY_DATA } from "../data";

const TopCommunity = () => {
  return (
    <Card>
      <Typography flex variant="h4" className="justify-between pb-3 border-b">
        Top Community <IoIosArrowDown />
      </Typography>
      <List>
        {COMMUNITY_DATA.map((community, idx) => (
          <ListItem key={idx} {...community} />
        ))}
      </List>
    </Card>
  );
};

export default TopCommunity;
