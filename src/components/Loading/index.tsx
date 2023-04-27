import { ILoading } from "../../types";

import { LoadingOverlayStyled } from "./Loading.styles";

export function Loading({ width = 18 }: ILoading): JSX.Element {
  return (
    <svg height={width} stroke="currentColor" viewBox="0 0 38 38" width={width}>
      <g fill="none" fillRule="evenodd">
        <g strokeWidth="2" transform="translate(1 1)">
          <circle cx="18" cy="18" r="18" strokeOpacity="0.6" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              dur=".55s"
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
        </g>
      </g>
    </svg>
  );
}

export function LoadingOverlay({
  vertical = "bottom",
  horizontal = "right",
  width,
}: ILoading): JSX.Element {
  return (
    <LoadingOverlayStyled horizontal={horizontal} vertical={vertical}>
      <Loading width={width} />
    </LoadingOverlayStyled>
  );
}
