import AppBar from "./components/AppBar";
import Form from "./components/Form";
import Menu from "./components/Menu";

import DROPDOWN_MENU from "./data/dropdownMenu";

import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <AppBar />
      <main className={classes.appMain}>
        <Form dropdowns={DROPDOWN_MENU} />
        <Menu menu={DROPDOWN_MENU} />
      </main>
    </>
  );
};

export default App;
