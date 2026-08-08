import { useContext } from "react";
import { RoomContext } from "../context/RoomContext";
import socket from "../services/socket";

export default function Game(){

    const {
        drawerId,
        currentRound,
        rounds,
    } = useContext(RoomContext);

    const isDrawer = socket.id === drawerId;

    return (

        <div>

            <h1>Round {currentRound}</h1>

            {isDrawer ? (
                <h2>You are drawing!</h2>
            ) : (
                <h2>Guess the word!</h2>
            )}

        </div>

    );
}