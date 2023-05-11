import AppBar from "./components/AppBar";
import Welcome from "./components/Welcome";
import Clients from "./components/Clients";
import GetStarted from "./components/GetStarted";
import BuildCV from "./components/BuildCV";
import CPandAP from "./components/CPandAP";
import Opportunity from "./components/Opportunity";
import Industry from "./components/Industry";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <AppBar />
      <Welcome />
      <Clients />
      <GetStarted />
      <BuildCV />
      <CPandAP />
      <Opportunity />
      <Industry />
      <Footer />
    </>
  );
};

export default App;
