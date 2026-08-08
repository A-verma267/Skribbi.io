import { useContext, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";
import socket from "../services/socket";

export default function Game() {
  const {
    setWordOptions,
    setChoosingWord,
    choosingWord,
    roomId,
    wordOptions,
    drawerId,
    currentRound,
    rounds,
  } = useContext(RoomContext);

  useEffect(() => {
    function handleDrawerWord(data) {
      console.log("Drawer word:", data.word);

      setCurrentWord(data.word);
      setChoosingWord(false);
    }

    socket.on("drawer-word", handleDrawerWord);

    return () => socket.off("drawer-word", handleDrawerWord);
  }, []);

  useEffect(() => {
    function handleDrawingStarted(data) {
      console.log("Drawing started");

      setDrawerId(data.drawerId);
      setWordLength(data.wordLength);
      setChoosingWord(false);

    }

    socket.on("drawing-started", handleDrawingStarted);

    return () => socket.off("drawing-started", handleDrawingStarted);
  }, []);

  function selectWord(word) {
    socket.emit("word-selected", {
      roomId,
      word,
    });

    setChoosingWord(false);
  }
  useEffect(() => {
    console.log("Game-mounted");

    function handleChooseWord(data) {
      console.log("choose-word received:", data);

      setWordOptions(data.words);

      setChoosingWord(true);
    }

    socket.on("choose-word", handleChooseWord);

    return () => {
      socket.off("choose-word", handleChooseWord);
    };
  }, [setWordOptions, setChoosingWord]);

  const isDrawer = socket.id === drawerId;

  return (
    <div>
      <h1>
        Round {currentRound} / {rounds}
      </h1>

      {isDrawer ? (
        <>
          <h2>You are drawing!</h2>
          {choosingWord && (
            <div className="choose-word-modal">
              <h2>Choose a word</h2>

              {wordOptions.map((word) => (
                <button key={word} onClick={() => selectWord(word)}>
                  {word}
                </button>
              ))}
            </div>
          )}
        </>
      ) : (
        <h2>Guess the word!</h2>
      )}
    </div>
  );
}
