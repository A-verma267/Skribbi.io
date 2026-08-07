import express from "express";
import http from "http";
import { Server } from "socket.io";

import cors from "cors";

const rooms = {};

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server , {
    cors :{
        origin : "http://localhost:5173",
        methods : ["GET","POST"],
    },
});

io.on("connection",(socket) =>{
    console.log("User connected :" , socket.id);

    socket.on("disconnect",()=>{
        console.log("User disconnected:" , socket.id);

        for(const roomId in rooms){
            rooms[roomId] = rooms[roomId].filter(
            (player) => player.id !== socket.id
            )
            io.to(roomId).emit("players-updated", rooms[roomId]);
    
            if(rooms[roomId].length === 0){
                delete rooms[roomId];
            }
        }
        
    });

    socket.on("join-room",({roomId , player}) => {
        console.log("JOIN EVENT");
        console.log(roomId);
        console.log(player);
        console.log(socket.id);
        socket.join(roomId);
        console.log(`${player.name} joined ${roomId}`);

        if(!rooms[roomId]){
            rooms[roomId] = [];

        }
        const existingPlayer = rooms[roomId].find(
            (p) => p.id === socket.id
        );

        if (!existingPlayer) {
            rooms[roomId].push({
                id: socket.id,
                name: player.name,
                avatar: player.avatar,
            });
        }

        console.log(rooms);

        io.to(roomId).emit("players-updated",rooms[roomId]);
        
        
    })
    
})

server.listen(3001 , () =>{
    console.log("Server running on ");
    
})