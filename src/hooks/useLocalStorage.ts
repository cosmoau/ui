/* eslint-disable no-console */
import { useState, useEffect } from "react";

const isBrowser = typeof window !== "undefined";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (!isBrowser) return defaultValue;

  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : defaultValue;

  return initial;
}

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(() => getStorageValue<T>(key, defaultValue));

  useEffect(() => {
    const listener = (e: StorageEvent): void => {
      if (e.storageArea === localStorage && e.key === key) {
        try {
          setValue(e.newValue ? JSON.parse(e.newValue) : defaultValue);
        } catch (error) {
          console.error(`Error parsing JSON from local storage key “${key}”:`, error);
        }
      }
    };

    window.addEventListener("storage", listener);

    return (): void => {
      window.removeEventListener("storage", listener);
    };
  }, [key, defaultValue]);

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
}
