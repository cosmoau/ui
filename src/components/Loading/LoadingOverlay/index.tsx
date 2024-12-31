import type { JSX } from "react";

import Loading from "..";
import { ILoadingOverlay } from "../../../types";
import { LoadingOverlayStyled, LoadingOverlayTitledStyled } from "../styles";

export default function LoadingOverlay({ width, title }: ILoadingOverlay): JSX.Element {
  return (
    <LoadingOverlayStyled>
      <Loading width={width} />
      <LoadingOverlayTitledStyled>{title}</LoadingOverlayTitledStyled>
    </LoadingOverlayStyled>
  );
}
