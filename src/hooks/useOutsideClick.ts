/* eslint-disable no-console */
import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  const saved = localStorage.getItem(key);

  try {
    if (saved) {
      return JSON.parse(saved);
    }

    return defaultValue;
  } catch (error) {
    console.error(`Error parsing localStorage key “${key}”:`, error);

    return defaultValue;
  }
}

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [value, setValue] = useState<T>(defaultValue);

  useEffect(() => {
    const initialValue = getStorageValue(key, defaultValue);

    setValue(initialValue);
  }, [key, defaultValue]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
