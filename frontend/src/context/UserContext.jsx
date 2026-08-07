import { createContext, useState } from "react";

const UserContext = createContext();

export const UserContextProvider = ({children})=>{
    const [avataricon , setavataricon] = useState({id: 'cyan', color: '#3FC6D8', face: 'cyclops'});
    const [name , setName] = useState("");
    

    const value = {
        avataricon , setavataricon , name , setName 
    }
    return (
        <UserContext.Provider value= {value}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;