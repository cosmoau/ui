import { useEffect } from "react";
import toast, { useToaster } from "react-hot-toast";

import { Icons } from "../../icons";
import { Button, Select, Text, useEventListener, useMountSSR, useTheme } from "../../index";
import { darkTheme } from "../../stitches.config";
import { IProvider, ISelect, IToast } from "../../types";

import { ProviderStyled, ToastContainerStyled, ToastStyled, providerReset } from "./styles";

const tag = `design + dev by @dolmios`;

function ToastController(props: IToast): JSX.Element {
  const { toasts, handlers } = useToaster();
  const { startPause, endPause } = handlers;
  const TOAST_LIMIT = 4;

  useEventListener("keydown", (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Enter") {
      event.preventDefault();
      toast.dismiss();
    }
  });

  useEffect(() => {
    toasts
      .filter((t) => t.visible)
      .filter((_, i) => i >= TOAST_LIMIT)
      .forEach((t) => toast.dismiss(t.id));
  }, [toasts]);

  return (
    <ToastContainerStyled onMouseEnter={startPause} onMouseLeave={endPause} {...props}>
      {toasts.map((t) => {
        t.duration = 5000;

        return (
          <ToastStyled key={t.id} animation={t.visible} onClick={(): void => toast.dismiss(t.id)}>
            <Text
              as="span"
              highlight={t.type === "success" ? "green" : t.type === "error" ? "red" : "default"}
              inline="small">
              {t.type === "success" ? <Icons.Check /> : t.type === "error" ? <Icons.Warning /> : <Icons.Info />}&nbsp;
              {t.type === "success" ? "Success" : t.type === "error" ? "Error" : "Info"}
            </Text>
            {t.message?.toString() || t.message?.toString() || ""}
          </ToastStyled>
        );
      })}
    </ToastContainerStyled>
  );
}

export function ProviderToggle(): JSX.Element {
  const { theme, setTheme, isDarkTheme } = useTheme();
  const mounted = useMountSSR();

  const options = [
    { icon: <Icons.Moon />, iconPosition: "right", label: "Dark", value: "dark" },
    { icon: <Icons.Sun />, iconPosition: "right", label: "Light", value: "light" },
    { icon: <Icons.Monitor />, iconPosition: "right", label: "System", value: "system" },
  ] as ISelect["options"];

  return (
    <Select
      options={options}
      selection={[theme]}
      trigger={
        <Button
          css={{
            textTransform: "capitalize",
          }}
          icon={options.find((option) => option.value === theme)?.icon}
          small>
          {isDarkTheme ? "Dark" : "Light"}
        </Button>
      }
      onSelection={(value): void => {
        if (value === theme) {
          return;
        }
        setTheme(value as "dark" | "light" | "system");

        if (mounted) {
          window.location.reload();
        }
      }}
    />
  );
}

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  providerReset();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(tag);
  }, []);

  return (
    <ProviderStyled
      className={dark ? darkTheme : ""}
      css={{
        ...css,
      }}>
      <Icons.IconContext.Provider value={{ weight: "duotone" }}>
        <ToastController />
        {children}
      </Icons.IconContext.Provider>
    </ProviderStyled>
  );
}
