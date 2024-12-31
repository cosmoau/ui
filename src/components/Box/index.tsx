import { useState, type JSX } from "react";

import { Icons } from "../../icons";
import { Button, Image, Loading } from "../../index";
import { IBox } from "../../types";

import {
  BoxExitStyled,
  BoxExpanderTrigger,
  BoxFlexStyled,
  BoxFooterStyled,
  BoxHeaderStyled,
  BoxInnerStyled,
  BoxLoadingStyled,
  BoxStyled,
} from "./styles";

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
  cta,
  small,
  header,
  loading,
  theme,
  children,
  footer,
  minimal,
  closable,
  expandable,
  expandableHeight,
}: IBox): JSX.Element | null {
  const [isOpen, setIsOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  function handleClose(): void {
    setIsOpen(false);
    setTimeout(() => {
      setIsMounted(false);
    }, 250);
  }

  if (!isMounted) return null;

  const useHeaderOrFooter =
    (theme && theme !== "warning" && theme !== "error" && theme !== "success") || !theme;

  return (
    <BoxStyled
      animation={!isOpen}
      as={cta ? "a" : "div"}
      collapsed={expandable && !isExpanded}
      css={{
        ...(expandable && expandableHeight && !isExpanded && { maxHeight: expandableHeight }),
        ...css,
      }}
      footer={footer ? true : false}
      hover={cta || imageCTA ? true : false}
      href={cta}
      loading={loading || false}
      padding={header || footer || image || minimal ? "none" : small ? "small" : "default"}
      target={cta ? "_blank" : undefined}
      theme={theme || "default"}>
      {loading && (
        <BoxLoadingStyled>
          <Loading />
        </BoxLoadingStyled>
      )}
      <BoxFlexStyled>
        {image &&
          (imageCTA && !cta ? (
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
        {header && useHeaderOrFooter && (
          <BoxHeaderStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {header}
          </BoxHeaderStyled>
        )}

        {image || header || footer ? (
          <BoxInnerStyled padding={minimal ? "none" : small ? "small" : "default"}>
            {children}
          </BoxInnerStyled>
        ) : (
          children
        )}
      </BoxFlexStyled>

      {footer && useHeaderOrFooter && (
        <BoxFooterStyled padding={minimal ? "none" : small ? "small" : "default"}>
          {footer}
        </BoxFooterStyled>
      )}
      {expandable && !cta && (
        <BoxExpanderTrigger expanded={isExpanded}>
          <Button
            icon={
              isExpanded ? (
                <Icons.ArrowsInSimple weight="regular" />
              ) : (
                <Icons.ArrowsOutSimple weight="regular" />
              )
            }
            small
            theme={isExpanded ? "default" : "solid"}
            onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? "Collapse" : "Expand"}
          </Button>
        </BoxExpanderTrigger>
      )}
      {closable && !cta && (
        <BoxExitStyled onClick={(): void => handleClose()}>
          <Button small theme={"minimal"}>
            <Icons.X />
          </Button>
        </BoxExitStyled>
      )}
    </BoxStyled>
  );
}
