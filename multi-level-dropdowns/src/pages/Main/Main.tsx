import { FC, FormEvent } from "react";

import Form from "../../components/Form";
import Menu from "../../components/Menu";
import useMenu from "../../hooks/useMenu";

import classes from "./Main.module.css";

const Main: FC = () => {
  const { menu, addMenu } = useMenu();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const { parent, child } = event.target as HTMLFormElement;
    addMenu?.({ parentID: parent.value, name: child.value });
    child.value = "";
    parent.value = "";
  };

  return (
    <main className={classes.main}>
      <Form onSubmit={handleSubmit} />
      {menu && <Menu menu={menu} />}
    </main>
  );
};

export default Main;
