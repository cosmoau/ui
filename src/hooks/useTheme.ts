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

  const checkDarkMode = (): boolean => {
    return document.documentElement.classList.contains("dark");
  };

  const mutateTheme = (currentTheme: Theme): void => {
    const rootElement = document.documentElement;

    rootElement.classList.remove("dark", "light");

    if (currentTheme === "dark" || (currentTheme === "system" && systemTheme)) {
      rootElement.classList.add("dark");
    } else {
      rootElement.classList.add("light");
    }
  };

  const setTheme = (newTheme: Theme): void => {
    setLocalStorageTheme(newTheme);
    mutateTheme(newTheme);
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
        if (theme === "system") {
          mutateTheme("system");
        }
      };

      themeMediaQuery.addEventListener("change", handleThemeChange);

      setSystemTheme(themeMediaQuery.matches);
      mutateTheme(theme);

      const mutationObserver = new MutationObserver(() => {
        setIsDarkTheme(checkDarkMode());
      });

      mutationObserver.observe(document.documentElement, {
        attributeFilter: ["class"],
        attributes: true,
      });

      return (): void => {
        themeMediaQuery.removeEventListener("change", handleThemeChange);
        mutationObserver.disconnect();
      };
    }

    return (): void => {};
  }, [isBrowser, systemTheme, theme]);

  return {
    isDarkTheme,
    setTheme,
    theme,
  };
}
