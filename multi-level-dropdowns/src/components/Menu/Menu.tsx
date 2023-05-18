import { FC, HTMLAttributes } from "react";

import SubMenu from "./SubMenu";
import List from "../core/List";
import ListItem from "../core/ListItem";

import classes from "./Menu.module.css";

interface MenuProps extends HTMLAttributes<HTMLElement> {
  menu: Array<MultiLevelDropdown>;
}

const Menu: FC<MenuProps> = ({ menu, ...rest }) => {
  return (
    <nav className={classes.nav} {...rest}>
      <List>
        {menu.map(({ id, name, children }) => (
          <ListItem key={id}>
            {name}
            <SubMenu menu={children} />
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default Menu;
