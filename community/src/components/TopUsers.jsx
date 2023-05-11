import { IoIosArrowDown } from "react-icons/io";

import Card from "./core/Card";
import List from "./core/List";
import ListItem from "./core/ListItem";
import Typography from "./core/Typography";

import { TOP_USERS } from "../data";

const TopUsers = () => {
  return (
    <Card>
      <Typography flex variant="h4" className="justify-between pb-3 border-b">
        Top User <IoIosArrowDown />
      </Typography>
      <List>
        {TOP_USERS.map((users, idx) => (
          <ListItem key={idx} {...users} />
        ))}
      </List>
    </Card>
  );
};

export default TopUsers;
