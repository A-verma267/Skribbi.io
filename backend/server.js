import express from "express";
import http from "http";
import { Server } from "socket.io";

import cors from "cors";

const rooms = {};

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
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
        
        if (!room){
            return;
        } 

        if (room.hostId !== socket.id) return;

        if (room.players.length < 2) {
            socket.emit("game-error", {
                message: "At least 2 players are required to start the game."
            })
            return;
        }

        room.gameStarted = true;
        room.currentDrawerIndex = 0;
        room.currentRound = 1;

        const drawer = room.players[0];
        
        io.to(roomId).emit("game-started", {
            gameStarted: room.gameStarted,
            drawerId: drawer.id,
            currentRound: room.currentRound,
        })
    })
})

server.listen(3001, () => {
    console.log("Server running on ");

})