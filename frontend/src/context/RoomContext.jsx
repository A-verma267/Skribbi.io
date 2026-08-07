import { createContext, useState } from "react";

const RoomContext = createContext();

const RoomContextProvider = ({ children }) => {
  const [roomId, setRoomId] = useState("");
  const [players, setPlayers] = useState([]);
  const [hostId, setHostId] = useState("");
  const [maxplayers, setMaxPlayers] = useState("8");
  const [drawtime, setDrawtime] = useState("80");
  const [rounds, setRounds] = useState("3");
  const [gameMode, setGameMode] = useState("Normal");
  const [wordCount, setWordCount] = useState("3");
  const [hints, setHints] = useState("2");
  const [customWords, setCustomWords] = useState("");
  const [customWordsOnly, setCustomWordsOnly] = useState(false);
  const [gamestarted, setGameStarted] = useState(false);
  const [drawer, setDrawer] = useState(null);
  const [scoreboard, setScoreBoard] = useState([]);
  const [currentRound, setCurrentRound] = useState(1);
    const [language, setLanguage] = useState("English");

  const settings = [
    {
      key: "maxplayers",
      label: "maxPlayers",
      value: ["2", "3", "4", "5", "6", "7", "8", "9"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" />
        </svg>
      ),
    },
    {
      key: "language",
      label: "Language",
      value: ["English"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <text x="7" y="16" fontSize="9" fill="currentColor">
            A
          </text>
        </svg>
      ),
    },
    {
      key: "drawtime",
      label: "Drawtime",
      value: ["20", "40", "60", "80"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="13" r="8" />
          <path d="M12 9v4l3 2" />
          <path d="M9 2h6" />
        </svg>
      ),
    },
    {
      key: "rounds",
      label: "Rounds",
      value: ["2", "3", "4", "5"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="currentColor"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      ),
    },
    {
      key: "gameMode",
      label: "Game Mode",
      value: ["Normal"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <path d="M6 12h.01M10 12h.01M14 12h.01M18 12h.01" />
        </svg>
      ),
    },
    {
      key: "wordCount",
      label: "Word Count",
      value: ["3", "4", "5", "6", "7"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      ),
    },
    {
      key: "hints",
      label: "Hints",
      value: ["2", "3", "4", "5", "6"],
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 16v.01M12 8a2.5 2.5 0 0 1 2.5 2.5c0 1.5-2.5 1.8-2.5 3.5" />
        </svg>
      ),
    },
  ];

  const value = {
    roomId,
    setRoomId,
    players,
    setPlayers,
    hostId,
    setHostId,
    currentRound,
    setCurrentRound,
    gamestarted,
    setGameStarted,
    drawer,
    setDrawer,
    scoreboard,
    setScoreBoard,
    settings,
    maxplayers,
    setMaxPlayers,
    drawtime,
    setDrawtime,
    rounds,
    setRounds,
    gameMode,
    setGameMode,
    wordCount,
    setWordCount,
    hints,
    setHints,
    customWordsOnly,
    setCustomWordsOnly,
    customWords,
    setCustomWords, language, setLanguage
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export { RoomContext , RoomContextProvider};
