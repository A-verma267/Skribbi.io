import { useContext, useState } from "react";
import Logo from "../components/Logo/Logo.jsx";
import NameInput from "../components/Inputs/NameInput.jsx";
import LanguageSelect from "../components/Inputs/LanguageSelect.jsx";
import AvatarSelector from "../components/Avatar/AvatarSelector.jsx";
import PlayButton from "../components/Buttons/PlayButton.jsx";
import PrivateRoomButton from "../components/Buttons/PrivateRoomButton.jsx";
import AdvertisementCard from "../components/Advertisement/AdvertisementCard.jsx";
import Footer from "../components/Footer/Footer.jsx";
import useAvatar from "../hooks/useAvatar.js";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext.jsx";
import { nanoid } from "nanoid";
import { clearPendingRoom, getPendingRoom } from "../utils/roomStorage.js";
import { RoomContext } from "../context/RoomContext.jsx";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const {avataricon , setavataricon , name , setName} = useContext(UserContext);
  const { avatar, avatarIndex, goToPrevious, goToNext, randomize, selectAvatar } =
  useAvatar();
  const {language, setLanguage} = useContext(RoomContext);
  
  const handlePlay = () => {
    
    if(!name.trim()){
      alert("Enter your name");
      return ;
      
    } 
    setavataricon(avatar);
    const pendingRoom = getPendingRoom();

    if(pendingRoom){
      clearPendingRoom();
      navigate(`/room/${pendingRoom}`);

    }else{
      const newRoom = nanoid(8);
      navigate(`/room/${newRoom}`)
    }

  };

  const handlePrivateRoom = () => {
    if(!name.trim()){
      alert("Entr your name");
      return;
    }

    setavataricon(avatar)
    const roomId = nanoid(8);
    navigate(`/room/${roomId}`);
  };

  return (
    <main className="flex flex-1 flex-col items-center px-4 pb-16 sm:px-6">
      <Logo activeAvatarIndex={avatarIndex} onSelectAvatar={selectAvatar} />

      <section
        aria-label="Join a game"
        className="mt-10 flex w-full max-w-4xl flex-col gap-4 md:flex-row justify-center items-center"
      >
        <div className="flex w-full flex-col gap-3 rounded-lg bg-brand-panel p-4 shadow-card md:max-w-md">
          <div className="flex gap-3">
            <NameInput value={name} onChange={setName} />
            <LanguageSelect value={language} onChange={setLanguage} />
          </div>

          <AvatarSelector
            avatar={avatar}
            onPrevious={goToPrevious}
            onNext={goToNext}
            onRandomize={randomize}
          />
          
          <PlayButton onClick={handlePlay} />
          <PrivateRoomButton onClick={handlePrivateRoom} />
        </div>

        {/* <AdvertisementCard /> */}
      </section>

      <div className="w-full self-stretch">
        <Footer />
      </div>
    </main>
  );
}
