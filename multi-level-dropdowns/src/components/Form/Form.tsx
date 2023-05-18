import { Fragment, FC, FormHTMLAttributes } from "react";

import Input from "../core/Input";
import Select from "../core/Select";
import Button from "../core/Button";

import classes from "./Form.module.css";

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  dropdowns: Array<MultiLevelDropdown>;
}

const Form: FC<FormProps> = ({ dropdowns, ...rest }) => {
  const getAllOptions = (options?: Array<MultiLevelDropdown>) => {
    if (!options) return null;
    return options.map(({ id, name, children }) => {
      return (
        <Fragment key={id}>
          <option value={id}>{name}</option>
          {getAllOptions(children)}
        </Fragment>
      );
    });
  };

  return (
    <form className={classes.form} {...rest}>
      <Select label="Parent" name="parent" placeholder="eg: Home Page" required>
        {getAllOptions(dropdowns)}
      </Select>
      <Input label="Child" name="child" placeholder="eg: Page 1" required />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default Form;
