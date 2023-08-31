import { RefObject } from "react";

import { useEventListener } from "../index";

export default function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {
  useEventListener(mouseEvent, (event: MouseEvent | TouchEvent) => {
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }

    handler(event);
  });
}
