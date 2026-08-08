import GamePage from "./pages/GamePage.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import Game from "./pages/Game.jsx";
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
        {/* <Route path="/game/:roomid" element={<Game />} /> */}
        <Route path="/game/:roomid" element={<GamePage />} />
        {/* <Route path="/result/:roomid" element={<Result />} /> */}
      </Routes>
      {/* <Home /> */}
    </MainLayout>
  );
}

export default App;
