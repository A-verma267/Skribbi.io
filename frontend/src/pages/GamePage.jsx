import React, { useContext, useEffect } from "react";
import { RoomContext } from "../context/RoomContext";
import socket from "../services/socket";

import TopBar from "../components/Game/TopBar";
import PlayerSidebar from "../components/Game/PlayerSidebar";
import DrawingCanvas from "../components/Game/DrawingCanvas";
import ChatPanel from "../components/Game/ChatPanel";
import BottomToolbar from "../components/Game/BottomToolbar";
import WordModal from "../components/Game/WordModal";
import GameOverModal from "../components/Game/GameOverModal";

export default function GamePage() {
  const {
    roomId,
    players,

    // round / word info
    // currentRound,
    // rounds,
    // currentWord,
    // setCurrentWord,
    // wordLength,
    // setWordLength,
    // revealedLetters,

    // // timing
    // secondsLeft,
    // totalSeconds,

    // // drawer / turn state
    drawerId,
    // setDrawerId,
    // wordOptions,
    // setWordOptions,
    // choosingWord,
    // setChoosingWord,

    // // overall game state
    // gameStarted,
    // gameOver,
    // setGameOver,
  } = useContext(RoomContext);

  // const isDrawer = socket.id === drawerId;

  // ----- Socket listeners -----
  // useEffect(() => {
  //   console.log("GamePage mounted");

  //   function handleChooseWord(data) {
  //     console.log("choose-word received:", data);
  //     setWordOptions(data.words);
  //     setChoosingWord(true);
  //   }

  //   socket.on("choose-word", handleChooseWord);
  //   return () => socket.off("choose-word", handleChooseWord);
  // }, [setWordOptions, setChoosingWord]);

  // useEffect(() => {
  //   function handleDrawerWord(data) {
  //     console.log("Drawer word:", data.word);
  //     setCurrentWord(data.word);
  //     setChoosingWord(false);
  //   }

  //   socket.on("drawer-word", handleDrawerWord);
  //   return () => socket.off("drawer-word", handleDrawerWord);
  // }, [setCurrentWord, setChoosingWord]);

  // useEffect(() => {
  //   function handleDrawingStarted(data) {
  //     console.log("Drawing started");
  //     setDrawerId(data.drawerId);
  //     setWordLength(data.wordLength);
  //     setChoosingWord(false);
  //   }

  //   socket.on("drawing-started", handleDrawingStarted);
  //   return () => socket.off("drawing-started", handleDrawingStarted);
  // }, [setDrawerId, setWordLength, setChoosingWord]);

  // useEffect(() => {
  //   function handleGameOver(data) {
  //     console.log("game-over received:", data);
  //     setGameOver(true);
  //   }

  //   socket.on("game-over", handleGameOver);
  //   return () => socket.off("game-over", handleGameOver);
  // }, [setGameOver]);

  // ----- Actions -----
  // function selectWord(word) {
  //   socket.emit("word-selected", { roomId, word });
  //   setChoosingWord(false);
  // }

  // function handlePlayAgain() {
  //   socket.emit("play-again", { roomId });
  //   setGameOver(false);
  // }

  // function handleLeave() {
  //   socket.emit("leave-room", { roomId });
  //   setGameOver(false);
  // }

  return (

    <div className="flex h-screen w-screen flex-col overflow-hidden bg-slate-100 dark:bg-slate-950">
      {/* <TopBar
        round={currentRound}
        totalRounds={rounds}
        word={isDrawer ? currentWord : currentWord /* server should mask this for guessers */}
        {/* isDrawer={isDrawer}
        revealedLetters={revealedLetters}
        secondsLeft={secondsLeft}
        totalSeconds={totalSeconds} */}
      {/* /> */}

      <div className="flex min-h-0 flex-1">
        
        <PlayerSidebar players={players} drawerId={drawerId} />

        {/* <main className="flex min-w-0 flex-1 flex-col">
          {gameStarted ? (
            <DrawingCanvas isDrawer={isDrawer} />
          ) : (
            <div className="flex flex-1 items-center justify-center">
              <p className="text-lg font-semibold text-slate-400 dark:text-slate-600">
                Waiting for host to start...
              </p>
            </div>
          )}
        </main> */}

        {/* <ChatPanel isDrawer={isDrawer} /> */}
      </div>

      {/* <BottomToolbar /> */}

      {/* Modals */}
      {/* <WordModal
        isOpen={choosingWord}
        words={wordOptions}
        onSelectWord={selectWord}
      />
      <GameOverModal
        isOpen={gameOver}
        onPlayAgain={handlePlayAgain}
        onLeave={handleLeave}
      /> */}
    </div>
  );
}