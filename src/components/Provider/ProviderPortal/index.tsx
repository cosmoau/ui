import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { IPortal } from "../../../types";

export default function Portal({ children, disabled }: IPortal): JSX.Element {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalElement = document.createElement("div");

    // Check the number of <main> instances
    const mainElements = document.querySelectorAll("main");

    if (mainElements.length === 1) {
      // If only one <main> instance, append to the end of <main>
      mainElements[0].appendChild(portalElement);
    } else {
      // If more than one <main> or no <main>, append to <body> as a fallback
      document.body.appendChild(portalElement);
    }

    portalRef.current = portalElement;

    return (): void => {
      portalElement.remove();
    };
  }, []);

  if (!portalRef.current || disabled) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return createPortal(children, portalRef.current);
}
