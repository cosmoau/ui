import { useEffect, useState } from "react";

export default function useAdblockDetect(): boolean {
  const [isAdblocker, setAdblocker] = useState(false);

  useEffect(() => {
    const baitNode = document.createElement("div");

    baitNode.innerHTML = "&nbsp;";
    baitNode.className = "adBanner";
    document.body.appendChild(baitNode);

    window.setTimeout(() => {
      const adHeight = baitNode.offsetHeight;

      if (adHeight === 0) {
        setAdblocker(true);
      }
      baitNode.remove();
    }, 100);
  }, []);

  return isAdblocker;
}
