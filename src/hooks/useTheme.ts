import { useEffect, useState } from "react";

import { useLocalStorage, useMountSSR } from "../index";

type Theme = "system" | "dark" | "light";

interface UseThemeOutput {
  isDarkTheme: boolean | undefined;
  setTheme: (theme: Theme) => void;
  theme: Theme;
}

export default function useTheme(): UseThemeOutput {
  const isBrowser = useMountSSR();
  const [systemTheme, setSystemTheme] = useState<boolean>(false);
  const [theme, setLocalStorageTheme] = useLocalStorage<Theme>("cosmo-ui-theme", "system");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean | undefined>();

  const setTheme = (newTheme: Theme): void => {
    setLocalStorageTheme(newTheme);
  };

  useEffect(() => {
    if (theme === "system") {
      setIsDarkTheme(systemTheme);
    } else {
      setIsDarkTheme(theme === "dark");
    }

    if (isBrowser) {
      const themeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      const handleThemeChange = (e: MediaQueryListEvent): void => {
        setSystemTheme(e.matches);
      };

      themeMediaQuery.addEventListener("change", handleThemeChange);

      // Initial setting of systemTheme
      setSystemTheme(themeMediaQuery.matches);

      // Cleanup function
      return () => {
        themeMediaQuery.removeEventListener("change", handleThemeChange);
      };
    }

    return () => {};
  }, [isBrowser, systemTheme, theme]);

  return {
    isDarkTheme,
    setTheme,
    theme,
  };
}
