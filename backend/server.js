import express from "express";
import http from "http";
import { Server } from "socket.io";

import cors from "cors";
import { getRandomWords } from "./utils/getRandomWords.js";

import dotenv from "dotenv";

dotenv.config();

const rooms = {};

const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
const port = process.env.PORT || 3001;
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: process.env.CLIENT_URL,
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    console.log("User connected :", socket.id);

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);

        for (const roomId in rooms) {
            const room = rooms[roomId];

            room.players = room.players.filter(
                (player) => player.id !== socket.id
            );

            if (room.hostId === socket.id) {
                room.hostId = room.players[0]?.id || "";
            }

            if (room.players.length === 0) {
                delete rooms[roomId];
            } else {
                io.to(roomId).emit("room-updated", {
                    players: room.players,
                    hostId: room.hostId,
                });
            }
        }
    });

    socket.on("join-room", ({ roomId, player }) => {
        socket.join(roomId);

        if (!rooms[roomId]) {
            rooms[roomId] = {
                hostId: "",
                players: [],
                settings: {
                    maxplayers: "8",
                    language: "English",
                    drawtime: "80",
                    rounds: "3",
                    gameMode: "Normal",
                    wordCount: "3",
                    hints: "2",
                    customWords: "",
                    customWordsOnly: false
                },

                gameStarted: false,
                currentRound: 1,
                currentDrawer: null,
                currentDrawerIndex: 0,
                scoreboard: [],
                currentWords: "",
                wordOptions: [],
                choosingWord: false,
            };

        }
        const room = rooms[roomId];
        if (!room.hostId) {
            room.hostId = player.id;
        }
        const existingPlayer = room.players.find(
            (p) => p.id === player.id
        );

        if (!existingPlayer) {
            room.players.push(player);
        }

        io.to(roomId).emit("room-updated", {
            players: room.players,
            hostId: room.hostId
        });


    })
    socket.on("update-settings", ({ roomId, settings }) => {
        const room = rooms[roomId];
        if (!room) return;

        if (room.hostId !== socket.id) return;

        room.settings = settings;

        io.to(roomId).emit("room-updated", {
            players: room.players,
            hostId: room.hostId,
            settings: room.settings
        })
    })

    socket.on("start-game", ({ roomId }) => {
        const room = rooms[roomId];
        if (!room) {
            return;
        }

        if (room.hostId !== socket.id) return;

        if (room.players.length < 2) {
            socket.emit("game-error", {
                message: "At least 2 players are required to start the game."
            })
            return;
        }

        const drawer = room.players[0];
        room.gameStarted = true;
        room.currentDrawerIndex = 0;
        room.currentRound = 1;
        room.currentDrawer = drawer.id;
        const options = getRandomWords(3);
        room.wordOptions = options;
        room.choosingWord = true;


        io.to(roomId).emit("game-started", {
            gameStarted: room.gameStarted,
            drawerId: room.currentDrawer,
            currentRound: room.currentRound,
        });

        setTimeout(() => {
            io.to(drawer.id).emit("choose-word", {
                words: options,
            });
        }, 2000);
    })

    socket.on("word-selected", ({ roomId, word }) => {

        const room = rooms[roomId];

        if (!room) return;

        // Only current drawer can choose
        if (socket.id !== room.currentDrawer)
            return;

        // Already selected?
        if (room.currentWord)
            return;

        room.currentWord = word;
        room.choosingWord = false;

        io.to(roomId).emit("drawing-started", {
            drawerId: room.currentDrawer,
            wordLength: word.length
        });

        io.to(room.currentDrawer).emit("drawer-word", {
            word
        });
    });
})

server.listen(port, () => {
    console.log("Server running on ");

})
app.get("/",(req,res) =>{
    "Server is running";
})