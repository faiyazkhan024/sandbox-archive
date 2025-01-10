import React, { useContext } from "react";
import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
} from "@material-ui/core";

import itemContext from "../../context/itemContext";

import { updateItem, createItem } from "../../helpers/http";

import formStyle from "./formStyle";
import { useFormik } from "formik";

const Form = () => {
  const classes = formStyle();

  const { dispatch, editing, setEditing } = useContext(itemContext);

  const formInputs = [
    {
      value: editing.name ?? "",
      id: "name",
      type: "text",
      name: "name",
      label: "Name",
    },
    {
      value: editing.mobile ?? "",
      id: "mobile",
      type: "number",
      name: "mobile",
      label: "Mobile Number",
    },
    {
      value: editing.email ?? "",
      id: "email",
      type: "email",
      name: "email",
      label: "Email",
    },
    {
      value: editing.hobbies?.join(",") ?? "",
      id: "hobbies",
      type: "text",
      name: "hobbies",
      label: "Hobbies",
    },
  ];

  const initialValues = formInputs
    .map((i) => ({ [i.id]: i.value }))
    .reduce((pre, next) => ({ ...pre, ...next }));

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (JSON.stringify(values) === JSON.stringify(initialValues)) return;

      const newItem = {
        ...values,
        hobbies: values.hobbies.split(","),
      };

      if (!editing._id) {
        try {
          const createdItem = await createItem(newItem);
          dispatch({ type: "Create", payload: createdItem });
          formik.setValues(initialValues);
        } catch (error) {
          console.log(
            "🚀 ~ file: Form.js ~ line 73 ~ onSubmit: ~ error",
            error
          );
        }
      }

      if (editing._id) {
        try {
          const updatedItem = await updateItem({ ...editing, ...newItem });
          dispatch({
            type: "Update",
            payload: updatedItem,
          });
          setEditing({});
        } catch (error) {
          console.log(
            "🚀 ~ file: Form.js ~ line 91 ~ onSubmit editing: ~ error",
            error
          );
        }
      }
    },

    enableReinitialize: true,
  });

  return (
    <Container component="main">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          {editing.name ? "Update Item" : "Create New Item"}
        </Typography>

        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.formInputs}>
            {formInputs.map((formInput) => (
              <TextField
                key={formInput.id}
                className={classes.textField}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={formik.values[formInput.id]}
                id={formInput.id}
                label={formInput.label}
                name={formInput.name}
                onChange={formik.handleChange}
                error={
                  formik.touched[formInput.name] &&
                  Boolean(formik.errors[formInput.name])
                }
                helperText={
                  formik.touched[formInput.name] &&
                  formik.errors[formInput.name]
                }
              />
            ))}
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {editing.name ? "Update" : "Create"}
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default Form;
