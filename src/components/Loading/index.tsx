import type { JSX } from "react";

import { styled } from "@stitches/react";

import { ILoading } from "../../types";

const SVGStyled = styled("svg");

export default function Loading({ css, width = 20 }: ILoading): JSX.Element {
  const animationDuration = "2.5s";

  return (
    <SVGStyled
      css={{
        height: `${width}px !important`,
        width: `${width}px !important`,
        ...css,
      }}
      fill="none"
      height={width}
      opacity={1}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="8"
      viewBox="-10 -10 153.9 161.4"
      width={width}
      xmlns="http://www.w3.org/2000/svg">
      {/* Each path from the logo, converted to stroke-only with tracing animation */}
      <path
        d="M44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3c-7.5-10.3-13.3-22.9-16.1-35.8c-7.3,6.4-14.7,16.2-18.4,27.2
        C17.1,93.4,30.9,95.6,44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3z"
        strokeDasharray="200"
        strokeDashoffset="200">
        <animate
          attributeName="stroke-dashoffset"
          dur={animationDuration}
          repeatCount="indefinite"
          values="200;0;200"
        />
      </path>

      <path
        d="M44.4,96.3C44.4,96.3,44.4,96.3,44.4,96.3c-13.5-0.7-27.3-2.9-34.6-8.6c-2.9,8.4-3.7,17.5-0.9,26.5
        c6.5,20.7,28.6,28.7,44.7,25.9c15.3-2.6,21.9-10.1,25.7-18.3C66.5,119.3,54,109.6,44.4,96.3z"
        strokeDasharray="300"
        strokeDashoffset="300">
        <animate
          attributeName="stroke-dashoffset"
          begin="0.2s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="300;0;300"
        />
      </path>

      <path
        d="M28.3,60.4c5.4-4.7,8.1-7.2,11.1-9.8c1.4-1.2,3-2.5,4.7-3.8c3.6-2.8,8.6-6.5,17.2-12.8
        C71.1,27.4,86,24,99.7,27.2c0,0,0,0,0,0C98-1.8,64.2-4.6,47.4,7.5C30.6,19.7,35.8,36.4,28.3,46.8c-3.7,5.2-14.3,6.1-21.1,12.5
        c-6.9,6.6-9.8,18.7,2.6,28.4c0,0,0,0,0,0C13.6,76.6,20.9,66.8,28.3,60.4z"
        strokeDasharray="400"
        strokeDashoffset="400">
        <animate
          attributeName="stroke-dashoffset"
          begin="0.4s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="400;0;400"
        />
      </path>

      <path
        d="M131,61.5c-4.3-20.7-17.1-31-31.3-34.3c0.7,10.8-1.7,22.9-4.9,34c8.7,9.6,13.2,18.4,9.1,25.6
        c-4.3,7.5-11.1,6.4-15.4,11.9c-4.4,5.7-5.5,14.8-9.4,23.1c2.1,0.4,4.2,0.6,6.3,0.6C110.6,122.4,139.5,102.3,131,61.5z"
        strokeDasharray="350"
        strokeDashoffset="350">
        <animate
          attributeName="stroke-dashoffset"
          begin="0.6s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="350;0;350"
        />
      </path>

      <path
        d="M104,86.8c4.1-7.2-0.4-16-9.1-25.6l0,0c-5.4,18.6-13.3,34-13.3,34s-18.4,2.1-37.2,1.1c0,0,0,0,0,0c0,0,0,0,0,0
        c9.6,13.2,22.1,23,34.9,25.4c3.9-8.3,5-17.4,9.4-23.1C92.9,93.1,99.8,94.3,104,86.8z"
        strokeDasharray="280"
        strokeDashoffset="280">
        <animate
          attributeName="stroke-dashoffset"
          begin="0.8s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="280;0;280"
        />
      </path>

      <path
        d="M61.3,34.1c19.5,12.5,23.2,15.9,32.6,26c0.3,0.4,0.7,0.7,1,1.1c3.2-11,5.5-23.2,4.9-34
        C86,24,71.1,27.4,61.3,34.1z"
        strokeDasharray="180"
        strokeDashoffset="180">
        <animate
          attributeName="stroke-dashoffset"
          begin="1.0s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="180;0;180"
        />
      </path>

      <path
        d="M61.3,34.1c-8.7,6.3-13.7,10-17.2,12.8c-1.7,1.3-3.2,2.6-4.7,3.8c-3,2.5-5.7,5-11.1,9.8
        c2.8,12.9,8.6,25.5,16.2,35.9c18.8,0.9,37.2-1.1,37.2-1.1s7.9-15.4,13.3-34c-0.3-0.4-0.7-0.7-1-1.1C84.5,50,80.8,46.6,61.3,34.1z"
        strokeDasharray="450"
        strokeDashoffset="450">
        <animate
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur={animationDuration}
          repeatCount="indefinite"
          values="450;0;450"
        />
      </path>
    </SVGStyled>
  );
}
