import Main from "./pages/Main";
import AppBar from "./components/AppBar";
import { MenuContextProvider } from "./contexts/MenuContext";

const App = () => {
  return (
    <>
      <AppBar />
      <MenuContextProvider>
        <Main />
      </MenuContextProvider>
    </>
  );
};

export default App;
