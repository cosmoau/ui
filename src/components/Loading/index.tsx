import { styled } from "@stitches/react";

import { ILoading } from "../../types";

import { LoadingOverlayStyled } from "./styles";

const SVGStyled = styled("svg");

export default function Loading({ width = 20, css }: ILoading): JSX.Element {
  return (
    <SVGStyled
      css={{
        height: `${width}px !important`,
        width: `${width}px !important`,
        ...css,
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
              dur="1.25s"
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
