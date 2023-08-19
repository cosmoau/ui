import { useState } from "react";

import { Icons } from "../../icons";
import { Button, Image } from "../../index";
import { IBox } from "../../types";

import { BoxExitStyled, BoxFooterStyled, BoxHeaderStyled, BoxInnerStyled, BoxStyled } from "./styles";

export default function Box({
  image,
  imageAlt,
  imageCTA,
  imageFit,
  imageSizes,
  imageHeight,
  imagePosition,
  imageTarget,
  css,
  header,
  loading,
  theme,
  children,
  footer,
  minimal,
  closable,
}: IBox): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  if (!isMounted) return null;

  return (
    <BoxStyled
      animation={!isOpen}
      css={css}
      footer={footer ? true : false}
      loading={loading || false}
      padding={header || image ? "none" : minimal ? "none" : "default"}
      theme={theme || "default"}>
      {image &&
        (imageCTA ? (
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
              fillFit={imageFit}
              fillHeight={imageHeight || "20rem"}
              fillPosition={imagePosition}
              sizes={imageSizes || "50vw"}
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
            fillFit={imageFit}
            fillHeight={imageHeight || "20rem"}
            fillPosition={imagePosition}
            sizes={imageSizes || "50vw"}
            src={image}
          />
        ))}
      {header && <BoxHeaderStyled>{header}</BoxHeaderStyled>}
      {image || header || footer ? (
        <BoxInnerStyled padding={minimal || footer ? "none" : "default"}>{children}</BoxInnerStyled>
      ) : (
        children
      )}
      {closable && (
        <BoxExitStyled onClick={(): void => handleClose()}>
          <Button small theme={"minimal"}>
            <Icons.X />
          </Button>
        </BoxExitStyled>
      )}
      {footer && <BoxFooterStyled>{footer}</BoxFooterStyled>}
    </BoxStyled>
  );
}
