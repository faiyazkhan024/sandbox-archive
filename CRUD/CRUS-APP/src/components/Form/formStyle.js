import { makeStyles } from "@material-ui/core/styles";

const formStyle = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: { width: "100%" },

  formInputs: {
    display: "grid",
    gap: "0 2rem",
    gridTemplateColumns: "repeat(2, 1fr);",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },

  textField: {},

  submit: {
    display: "block",
    width: "40%",
    margin: theme.spacing(3, "auto", 2),
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
}));

export default formStyle;
