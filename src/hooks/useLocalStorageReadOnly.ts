import { useState } from "react";

const isBrowser = typeof window !== "undefined";

function getStorageValue<T>(key: string): T | null {
  if (!isBrowser) return null;

  const saved = localStorage.getItem(key);
  const initial = saved ? JSON.parse(saved) : null;

  return initial;
}

export default function useLocalStorageReadOnly<T>(key: string): T | null {
  const [value] = useState(() => {
    return getStorageValue<T>(key);
  });

  return value;
}
