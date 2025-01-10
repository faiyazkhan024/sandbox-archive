import React, { useState } from "react";

import cnj from "classnames";
import { FaWallet } from "react-icons/fa";
import { GoFileSubmodule } from "react-icons/go";
import { IoIosArrowBack } from "react-icons/io";
import {
  BsList,
  BsFillBookmarksFill,
  BsChatDotsFill,
  BsImages,
  BsPeopleCircle,
} from "react-icons/bs";

import IconButton from "../../utilities/IconButton/IconButton";

import classes from "./Navbar.module.css";

const Navbar = ({ className }) => {
  const [navState, setNavState] = useState(false);

  const toggleNav = () => {
    setNavState((preState) => !preState);
  };

  const navItems = [
    { title: "Bookmark", Icon: BsFillBookmarksFill },
    { title: "Gallery", Icon: BsImages },
    { title: "Documents", Icon: GoFileSubmodule },
    { title: "Contacts", Icon: BsPeopleCircle },
    { title: "Chat", Icon: BsChatDotsFill },
    { title: "Wallet", Icon: FaWallet },
  ];

  return (
    <nav
      className={cnj(className, classes.Navbar, navState && classes.OpenNav)}
    >
      <div className={classes.Container}>
        <IconButton
          className={classes.Menu}
          titleStyle={classes.MenuTitle}
          iconStyle={classes.MenuIcon}
          Icon={navState ? IoIosArrowBack : BsList}
          title="Navigation"
          showTitle={navState}
          onClick={toggleNav}
        />
        <br />
        <br />
        <div className={classes.NavItems}>
          {navItems.map((navItem) => (
            <IconButton
              key={navItem.title}
              Icon={navItem.Icon}
              title={navItem.title}
              showTitle={navState}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
