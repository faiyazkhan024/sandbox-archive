import { FC, FormHTMLAttributes } from "react";

import Input from "../core/Input";
import Select from "../core/Select";
import Button from "../core/Button";

import classes from "./Form.module.css";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  dropdowns: Array<MultiLevelDropdown>;
}

const Form: FC<FormProps> = ({ dropdowns }) => {
  return (
    <form className={classes.form}>
      <Select label="Parent" name="parent" placeholder="eg: Home Page"></Select>
      <Input label="Child" name="child" placeholder="eg: Page 1" />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
