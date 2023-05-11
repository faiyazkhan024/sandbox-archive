import AppBar from "./components/AppBar";
import Sidebar from "./components/Sidebar";

import Profile from "./pages/Profile";

const App = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col flex-auto h-screen">
        <AppBar />
        <main className="flex-1 px-4 py-8 space-y-8 overflow-y-auto">
          <Profile />
        </main>
      </div>
    </>
  );
};

export default App;
