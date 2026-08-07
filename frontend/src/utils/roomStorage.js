export const setPendingRoom = (roomId) =>{
    sessionStorage.setItem("pendingRoom", roomId);
};

export const getPendingRoom = () =>{
    return sessionStorage.getItem("pendingRoom");
}

export const clearPendingRoom = () =>{
    sessionStorage.removeItem("pendingRoom");
}
