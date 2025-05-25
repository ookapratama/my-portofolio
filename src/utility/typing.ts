import { setTyper } from "./typer";

export const typing = () => {
  const words = [
    "Fullstack Developer",
    "Backend Enthusiast",
  ];

  const text = document.querySelector(".trm-typed-text") as HTMLElement | null;
  if (text) {
    setTyper(text, words);
  }

  // reinit
  document.addEventListener("swup:contentReplaced", () => {
    const replacedText = document.querySelector(
      ".trm-typed-text"
    ) as HTMLElement | null;
    if (replacedText) {
      setTyper(replacedText, words);
    }
  });
};
