import { useReducer, useEffect, useState } from "react";

import { useLocalStorage, useMountSSR } from "../index";

type Theme = "system" | "dark" | "light";

interface UseThemeOutput {
  isDarkTheme: boolean;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export default function useTheme(): UseThemeOutput {
  const mounted = useMountSSR();
  const [systemTheme, setSystemTheme] = useState<boolean>(false);
  const [theme, setLocalStorageTheme] = useLocalStorage<Theme>("cosmo-ui-theme", "system");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  const setTheme = (newTheme: Theme): void => {
    setLocalStorageTheme(newTheme);
    forceUpdate();
  };

  useEffect(() => {
    if (theme === "system") {
      setIsDarkTheme(systemTheme);
    } else {
      setIsDarkTheme(theme === "dark");
    }
  }, [systemTheme, theme]);

  useEffect(() => {
    if (mounted) {
      const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleThemeChange = (e: MediaQueryListEvent): void => {
        setSystemTheme(e.matches);
      };

      themeMediaQuery.addEventListener("change", handleThemeChange);

      setSystemTheme(themeMediaQuery.matches);

      return () => {
        themeMediaQuery.removeEventListener("change", handleThemeChange);
      };
    }

    return () => {};
  }, [mounted]);

  return {
    isDarkTheme,
    setTheme,
    theme,
  };
}
