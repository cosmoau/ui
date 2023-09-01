import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (!isBrowser) return defaultValue;

  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : defaultValue;

  return initial;
}

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    const listener = (e: StorageEvent): void => {
      if (e.storageArea === localStorage && e.key === key) {
        setValue(JSON.parse(e.newValue || ""));
      }
    };

    window.addEventListener("storage", listener);

    return () => {
      window.removeEventListener("storage", listener);
    };
  }, [key]);

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
