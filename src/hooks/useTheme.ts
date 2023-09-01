import { useEffect, useState } from "react";

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

  useEffect(() => {
    if (theme === "system") {
      setIsDarkTheme(systemDarkMode);
    } else {
      setIsDarkTheme(theme === "dark");
    }
  }, [systemDarkMode, theme]);

  return {
    isDarkTheme,
    setTheme,
    theme,
  };
}
