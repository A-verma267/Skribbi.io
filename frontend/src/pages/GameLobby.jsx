import { useEffect } from "react";
import { useContext, useState } from "react";
import AvatarPreview from "../components/Avatar/AvatarPreview";
import UserContext from "../context/UserContext";
import { useNavigate, useParams } from "react-router-dom";
import socket from "../services/socket"
import {RoomContext} from "../context/RoomContext";
import { setPendingRoom } from "../utils/roomStorage";

const FOOTER_CARDS = [
  {
    title: "About",
    body: "Learn more about the game, how it works, and the team behind it.",
  },
  {
    title: "News",
    body: "Check out the latest updates, patch notes, and announcements.",
  },
  {
    title: "How To Play",
    body: "New here? Read the rules and tips to get started quickly.",
  },
];

export default function GameLobby() {
  const navigate = useNavigate();
  const {roomid} = useParams();
  const inviteLink = `${window.location.origin}/room/${roomid}`;
  const {avataricon, name} = useContext(UserContext);
  // const [roomPlayers , setRoomPlayers] = useState([]);
  const {players , setPlayers , setRoomId ,settings ,maxplayers, setMaxPlayers,drawtime, setDrawtime,rounds, setRounds,gameMode, setGameMode ,wordCount, setWordCount ,hints, setHints,customWordsOnly, setCustomWordsOnly,customWords, setCustomWords ,language, setLanguage , hostId , setHostId , setGameStarted , setDrawerId , setCurrentRound } = useContext(RoomContext)
 
  const isHost = socket.id === hostId;
  useEffect(() => {
    const handleRoomUpdated = (room) => {
      setPlayers(room.players);
      setHostId(room.hostId);
      if(room.settings){
        setMaxPlayers(room.settings.maxplayers);
        setLanguage(room.settings.language);
        setDrawtime(room.settings.drawtime);
        setRounds(room.settings.rounds);
        setGameMode(room.settings.gameMode);
        setWordCount(room.settings.wordCount);
        setHints(room.settings.hints);
        setCustomWords(room.settings.customWords);
        setCustomWordsOnly(room.settings.customWordsOnly);
      }
    };

    socket.on("room-updated", handleRoomUpdated);

    return () => {
      socket.off("room-updated", handleRoomUpdated);
  };
}, [setPlayers, setHostId]);

  useEffect(() => {
    if (!name) {
      setPendingRoom(roomid);      
      navigate("/", { replace: true });
    }
  }, [name, roomid, navigate]);

  useEffect(()=>{
    setRoomId(roomid);
  },[roomid])
  console.log(players);
  
  useEffect(() => {

    const handleGameStarted = (data) => {
        
        setGameStarted(data.gameStarted);
        setDrawerId(data.drawerId);
        setCurrentRound(data.currentRound);
        navigate(`/game/${roomid}`);

    }

    socket.on("game-started", handleGameStarted);

    return ()=>{
        socket.off("game-started", handleGameStarted);
    }

}, [roomid, navigate]);

  const settingValues = { maxplayers, language, drawtime, rounds, gameMode, wordCount, hints , customWords , customWordsOnly };
  const settingSetters = {
    maxplayers: setMaxPlayers,
    language: setLanguage,
    drawtime: setDrawtime,
    rounds: setRounds,
    gameMode: setGameMode,
    wordCount: setWordCount,
    hints: setHints,
    customWords : setCustomWords,
    customWordsOnly:setCustomWordsOnly
  };

    
    useEffect(()=>{
      if(!roomid || !socket.connected || !name) return ;
    function joinRoom(){
      socket.emit("join-room",{
        roomId:roomid,
        player:{
          id:socket.id, 
          name ,
          avatar : avataricon,
        }
      });

      
    }
    if(socket.connected){
      joinRoom();
    }
    else{
      socket.on("connect",joinRoom);
    }

    return ()=>{
      socket.off("connect", joinRoom);
    }
  },[roomid , name , avataricon])

  useEffect(()=>{
    function handleGameError(data){
      alert(data.message);
    } 

    socket.on("game-error",handleGameError);

    return (()=>{
      socket.off("game-error",handleGameError);
    })
  },[])
  function handleSettingChange(key , value){
    
    
    settingSetters[key](value);

    socket.emit("update-settings",{
      roomId: roomid,
      settings:{
        maxplayers,
        language,
        drawtime,
        rounds,
        gameMode,
        wordCount,
        hints,
        customWords,
        customWordsOnly,
        [key] : value,
      }
    })
  }

  function handlestart(){
    
    
    const words = customWords
    .split(",")
    .map(word => word.trim())
    .filter(word => word !== "");
    
    
    if (customWordsOnly || words.length < 2) {
      
      alert("Please enter at least 2 custom words.");
      return;
    }
    
    socket.emit("start-game", {
      roomId: roomid
    });
  }
  const handleInvite = async() =>{
    try {

      await navigator.clipboard.writeText(inviteLink);
      alert("Invite Link Copied !");
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <main className="min-h-screen w-full bg-blue-700 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:24px_24px]">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b-2 border-black bg-white px-3 py-2">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black text-sm font-bold">
            0
          </span>
          <span className="text-lg font-bold text-slate-800">Round 1 of {rounds}</span>
        </div>
        <span className="text-sm font-bold tracking-widest text-slate-700">WAITING</span>
        {/* <button
          aria-label="Settings"
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-black transition hover:rotate-45"
        >
          ⚙️
        </button> */}
      </div>

      <section className="mx-auto flex max-w-[1800px] flex-col gap-3 p-3 lg:flex-row">
        {/* Left sidebar */}
        <aside className="w-full shrink-0 lg:w-72">
          {players.map((player , index) =>(
            <div key={player.id} className="flex items-center gap-3 rounded-md border-2 border-black bg-white p-2 shadow-md">
              <span className="text-sm font-bold text-slate-500">#{index + 1}</span>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-bold text-blue-600">{player.name} {player.id === hostId && (
                  <span className="ml-2 rounded bg-yellow-400 px-2 py-1 text-xs">Host</span>
                )}</span>
                <span className="text-xs text-slate-500">0 points</span>
              </div>
              <div className={`flex h-10 w-10 items-center justify-center rounded-full `}>
                <AvatarPreview preset={player.avatar} size="small" />
              </div>
            </div>
          ))}
        </aside>

        {/* Center settings panel */}
        <section className="flex-1 rounded-md border-2 border-black bg-slate-800 p-4 shadow-md" aria-label="Room settings">
          <div className="space-y-3">
            {settings.map((s) => (
              <div key={s.key} className="grid grid-cols-2 items-center gap-4">
                <label htmlFor={s.key} className="flex items-center gap-2 font-bold text-white">
                  <span className="text-white">{s.icon}</span>
                  {s.label}
                </label>
                <select disabled={!isHost}
                  id={s.key}
                  value={settingValues[s.key]}
                  onChange={(e) => handleSettingChange(s.key , e.target.value)}
                  className="w-full rounded-md border-2 border-black bg-white px-3 py-2 font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  {
                    
                    (s.value).map((val)=>(
                      <option key={val} value={val}>{val}</option>
                      
                    ))
                  }
                  
                </select>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between">
            <h2 className="font-bold text-white">Custom words</h2>
            <label className="flex items-center gap-2 text-sm font-bold text-white">
              Use custom words only
              <input
                disabled={!isHost}
                type="checkbox"
                checked={customWordsOnly}
                onChange={(e) =>handleSettingChange("customWordsOnly" , e.target.checked)}
                className="h-4 w-4 accent-blue-500"
              />
            </label>
          </div>

          <textarea
          disabled={!isHost}
            value={customWords}
            onChange={(e) => handleSettingChange("customWords" , e.target.value)}
            placeholder="Minimum of 10 words. 1-32 characters per word! 20000 characters maximum. Separated by a , (comma)"
            className="mt-2 h-64 w-full resize-none rounded-md border-2 border-black bg-white p-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
            <button disabled={!isHost} onClick={handlestart} className="flex-1 rounded-md border-2 border-black bg-green-500 py-3 text-lg font-extrabold text-white shadow-md transition hover:scale-[1.02] hover:bg-green-400 active:scale-95">
              Start!
            </button>
            <button onClick={handleInvite} className="flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-black bg-blue-500 py-3 text-lg font-extrabold text-white shadow-md transition hover:scale-[1.02] hover:bg-blue-400 active:scale-95">
              🔗 Invite
            </button>
          </div>
        </section>

        
      </section>

      {/* Footer cards */}
      <footer className="mx-auto grid max-w-[1800px] grid-cols-1 gap-3 p-3 sm:grid-cols-3">
        {FOOTER_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-md border-2 border-black bg-blue-900 p-4 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-1 text-lg font-bold text-white">{card.title}</h3>
            <p className="text-sm text-blue-200">{card.body}</p>
          </div>
        ))}
      </footer>
    </main>
  );
}
