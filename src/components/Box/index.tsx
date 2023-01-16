import { X } from "phosphor-react";
import { useState } from "react";

import { Button, Image } from "../../index";
import { BoxProps } from "../../types";

import { BoxExitStyled, BoxImageChildrenStyled, BoxStyled } from "./Box.styles";

export function Box(props: BoxProps): JSX.Element {
  const {
    image,
    imageAlt,
    imageCTA,
    imageFit,
    imageHeight,
    imagePosition,
    imageTarget,
    css,
    hover,
    loading,
    theme,
    children,
    minimal,
    closable,
  } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  return isMounted ? (
    image ? (
      <BoxStyled
        animation={!isOpen}
        css={css}
        hover={hover}
        loading={loading || false}
        padding={"none"}
        theme={theme || "default"}>
        {imageCTA ? (
          <a href={imageCTA} rel="noopener noreferrer" target={imageTarget || "_blank"}>
            <Image
              alt={imageAlt || ""}
              css={{
                img: {
                  borderTopLeftRadius: "$medium !important",
                  borderTopRightRadius: "$medium !important",
                },
              }}
              fill
              fillFit={imageFit || "cover"}
              fillHeight={imageHeight || "20rem"}
              fillPosition={imagePosition || "center"}
              src={image}
            />
          </a>
        ) : (
          <Image
            alt={imageAlt || ""}
            css={{
              img: {
                borderTopLeftRadius: "$medium !important",
                borderTopRightRadius: "$medium !important",
              },
            }}
            fill
            fillFit={imageFit || "cover"}
            fillHeight={imageHeight || "20rem"}
            fillPosition={imagePosition || "center"}
            src={image}
          />
        )}
        <BoxImageChildrenStyled padding={"default"}>{children}</BoxImageChildrenStyled>
      </BoxStyled>
    ) : (
      <BoxStyled
        animation={!isOpen}
        css={css}
        hover={hover}
        loading={loading || false}
        padding={minimal ? "none" : "default"}
        theme={theme || "default"}>
        {children}
        {closable && (
          <BoxExitStyled onClick={(): void => handleClose()}>
            <Button small theme={"minimal"}>
              <X />
            </Button>
          </BoxExitStyled>
        )}
      </BoxStyled>
    )
  ) : (
    <> </>
  );
}
