import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import headerStyles from "./headerStyles";

const Header = () => {
  const classes = headerStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            CRUDS
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
