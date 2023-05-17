import AppBar from "./components/AppBar";
import Form from "./components/Form";
import Menu from "./components/Menu";

import classes from "./App.module.css";

const App = () => {
  return (
    <>
      <AppBar />
      <main className={classes.appMain}>
        <Form />
        <Menu />
      </main>
    </>
  );
};

export default App;
