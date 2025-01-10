import { makeStyles } from "@material-ui/core/styles";

const itemListStyle = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  nested: {
    paddingLeft: theme.spacing(4),
    display: "flex",
    overflow: "scroll",
  },
  submit: {
    display: "block",
    alignSelf: "end",
  },

  edit: {
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  delete: {
    "&:hover": {
      color: theme.palette.error.main,
    },
  },
  chip: {
    padding: theme.spacing(0, 1),
    margin: theme.spacing(0, 1),
  },
}));

export default itemListStyle;
