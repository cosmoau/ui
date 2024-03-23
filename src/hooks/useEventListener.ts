import { RefObject, useEffect, useRef } from "react";

export default function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element?: RefObject<Window | HTMLElement>,
  options?: boolean | AddEventListenerOptions,
): void {
  const savedHandler = useRef(handler);

  useEffect(() => {
    const eventListener = ((event: WindowEventMap[K]) =>
      savedHandler.current(event)) as EventListener;

    const targetElement: Window | HTMLElement | null = element?.current || window;

    if (!targetElement) return;

    savedHandler.current = handler;
    targetElement.addEventListener(eventName, eventListener, options);

    return () => {
      targetElement.removeEventListener(eventName, eventListener, options);
    };
  }, [eventName, element, handler]);
}
