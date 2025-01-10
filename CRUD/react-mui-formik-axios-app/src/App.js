import { Fragment } from "react";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import ItemList from "./components/ItemList/ItemList";

import { ItemContextProvider } from "./context/itemContext";

const App = () => {
  return (
    <Fragment>
      <Header />
      <ItemContextProvider>
        <Form />
        <ItemList />
      </ItemContextProvider>
    </Fragment>
  );
};

export default App;
