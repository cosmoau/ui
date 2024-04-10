import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

import { IPortal } from "../../../types";

export default function Portal({ children, disabled }: IPortal): JSX.Element {
  const portalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portalElement = document.createElement("div");

    document.body.appendChild(portalElement);
    portalRef.current = portalElement;

    return () => {
      if (portalRef.current) {
        document.body.removeChild(portalRef.current);
      }
    };
  }, []);

  if (!portalRef.current || disabled) {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  }

  return createPortal(children, portalRef.current);
}
