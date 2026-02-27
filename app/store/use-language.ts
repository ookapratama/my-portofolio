import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Language = "en" | "id";

interface LanguageStore {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

export const useLanguageStore = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
      toggleLanguage: () =>
        set((state) => ({ language: state.language === "en" ? "id" : "en" })),
    }),
    {
      name: "language-storage",
    },
  ),
);
