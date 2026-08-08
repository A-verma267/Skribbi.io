import { WORDS } from "../data/words.js";

export function getRandomWords(count = 3) {

    const shuffled = [...WORDS].sort(() => Math.random() - 0.5);

    return shuffled.slice(0, count);

}