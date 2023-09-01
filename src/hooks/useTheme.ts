import { useEffect, useReducer, useState } from "react";

import { useLocalStorage } from "../index";

type Theme = "system" | "dark" | "light";

interface UseThemeOutput {
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export default function useTheme(): UseThemeOutput {
  const isBrowser = typeof window !== "undefined";
  const systemDarkMode = isBrowser && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage<Theme>("cosmo-ui-theme", "system");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(systemDarkMode);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    if (theme === "system") {
      setIsDarkTheme(systemDarkMode);
    } else {
      setIsDarkTheme(theme === "dark");
    }

    forceUpdate();
  }, [systemDarkMode, theme]);

  return {
    isDarkTheme,
    setTheme,
    theme,
  };
}
