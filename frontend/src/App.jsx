import MainLayout from "./layout/MainLayout.jsx";
import GameLobby from "./pages/GameLobby.jsx";
import Home from "./pages/Home.jsx";
import { Routes , Route } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/privategamelobby" element={<GameLobby />}/> */}
        <Route path="/room/:roomid" element={<GameLobby/>} />
      </Routes>
      {/* <Home /> */}
    </MainLayout>
  );
}

export default App;
