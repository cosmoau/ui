import { styled } from "@stitches/react";

import { ILoading } from "../../types";

import { LoadingOverlayStyled } from "./styles";

const SVGStyled = styled("svg");

export default function Loading({ width = 20 }: ILoading): JSX.Element {
  const duration = (Math.random() * (1.75 - 0.85) + 0.85).toFixed(1) + "s";

  return (
    <SVGStyled
      css={{
        height: `${width}px !important`,
        width: `${width}px !important`,
      }}
      height={width}
      opacity={0.8}
      stroke="currentColor"
      viewBox="0 0 41 38"
      width={width}
      xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g strokeWidth={2} transform="translate(1 1)">
          <circle cx={18} cy={18} r={18} strokeOpacity={0.2} />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              dur={duration}
              from="0 18 18"
              repeatCount="indefinite"
              to="360 18 18"
              type="rotate"
            />
          </path>
        </g>
      </g>
    </SVGStyled>
  );
}

export function LoadingOverlay({ vertical = "bottom", horizontal = "right", width }: ILoading): JSX.Element {
  return (
    <LoadingOverlayStyled horizontal={horizontal} vertical={vertical}>
      <Loading width={width} />
    </LoadingOverlayStyled>
  );
}
