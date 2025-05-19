type WordList = string[];

export const setTyper = (element: HTMLElement, words: WordList): void => {
  const LETTER_TYPE_DELAY = 100;
  const WORD_STAY_DELAY = 3000;

  const DIRECTION_FORWARDS = 0;
  const DIRECTION_BACKWARDS = 1;

  let direction = DIRECTION_FORWARDS;
  let wordIndex = 0;
  let letterIndex = 0;
  let wordTypeInterval: NodeJS.Timeout;

  startTyping();

  function startTyping() {
    wordTypeInterval = setInterval(typeletter, LETTER_TYPE_DELAY);
  }

  function typeletter() {
    const word = words[wordIndex];

    if (direction === DIRECTION_FORWARDS) {
      letterIndex++;
      if (letterIndex === word.length) {
        direction = DIRECTION_BACKWARDS;
        clearInterval(wordTypeInterval);
        setTimeout(startTyping, WORD_STAY_DELAY);
      }
    } else if (direction === DIRECTION_BACKWARDS) {
      letterIndex--;
      if (letterIndex === 0) {
        nextWord();
      }
    }

    const textToType = word.substring(0, letterIndex);
    element.textContent = textToType;
  }

  function nextWord() {
    letterIndex = 0;
    direction = DIRECTION_FORWARDS;
    wordIndex = (wordIndex + 1) % words.length;
  }
};
