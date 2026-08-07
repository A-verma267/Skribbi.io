import { useCallback, useState } from "react";

/**
 * Ordered palette + face-shape pairs used to procedurally render
 * the blocky monster-style avatars seen in the character strip
 * and the large preview panel.
 */
export const AVATAR_PRESETS = [
  { id: "red", color: "#E8483C", face: "sad" },
  { id: "orange", color: "#E8792C", face: "shock" },
  { id: "yellow", color: "#F2C230", face: "grin" },
  { id: "green", color: "#6FBE44", face: "grumpy" },
  { id: "cyan", color: "#3FC6D8", face: "cyclops" },
  { id: "blue", color: "#4E5FD8", face: "peek" },
  { id: "purple", color: "#9B3FD1", face: "shout" },
  { id: "pink", color: "#E85FA8", face: "wink" },
];

export default function useAvatar(initialIndex = 4) {
  const [avatarIndex, setAvatarIndex] = useState(initialIndex);

  const goToPrevious = useCallback(() => {
    setAvatarIndex((current) =>
      current === 0 ? AVATAR_PRESETS.length - 1 : current - 1
    );
  }, []);

  const goToNext = useCallback(() => {
    setAvatarIndex((current) => (current + 1) % AVATAR_PRESETS.length);
  }, []);

  const randomize = useCallback(() => {
    setAvatarIndex((current) => {
      let next = current;
      while (next === current) {
        next = Math.floor(Math.random() * AVATAR_PRESETS.length);
      }
      return next;
    });
  }, []);

  const selectAvatar = useCallback((index) => {
    setAvatarIndex(index);
  }, []);

  return {
    avatarIndex,
    avatar: AVATAR_PRESETS[avatarIndex],
    goToPrevious,
    goToNext,
    randomize,
    selectAvatar,
  };
}
