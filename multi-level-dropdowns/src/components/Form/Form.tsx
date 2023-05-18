import { FC, FormHTMLAttributes } from "react";

import Options from "./Options";
import Input from "../core/Input";
import Select from "../core/Select";
import Button from "../core/Button";

import DROPDOWN_MENU from "../../data/dropdownMenu";

import classes from "./Form.module.css";

type FormProps = FormHTMLAttributes<HTMLFormElement>;

const Form: FC<FormProps> = (props) => {
  return (
    <form className={classes.form} {...props}>
      <Select label="Parent" name="parent" placeholder="eg: Home Page" required>
        <Options options={DROPDOWN_MENU} />
      </Select>
      <Input label="Child" name="child" placeholder="eg: Page 1" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
