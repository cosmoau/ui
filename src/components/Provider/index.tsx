import { useTernaryDarkMode } from "usehooks-ts";

import { Icons } from "../../icons";
import { darkTheme, theme } from "../../stitches.config";
import { IProvider, ISelect } from "../../types";
import { Button } from "../Button";
import { Select } from "../Select";
import { Toast } from "../Toast";

import { ProviderStyled, providerReset } from "./Provider.styles";

export function Provider(props: IProvider): JSX.Element {
  const { children, css, disableTheme } = props;
  const { isDarkMode } = useTernaryDarkMode();

  providerReset();

  return (
    <ProviderStyled
      className={isDarkMode && !disableTheme ? darkTheme : theme}
      css={{
        ...css,
      }}>
      <Icons.IconContext.Provider
        value={{ height: 19, mirrored: false, weight: "regular", width: 19 }}>
        <Toast />
        {children}
      </Icons.IconContext.Provider>
    </ProviderStyled>
  );
}

export function ProviderToggle(
  props: Omit<ISelect, "trigger" | "selection" | "options" | "onSelection">
): JSX.Element {
  const { vertical, horizontal } = props;
  const { ternaryDarkMode, setTernaryDarkMode } = useTernaryDarkMode();

  const options = [
    { icon: <Icons.Moon />, iconPosition: "right", label: "Dark", value: "dark" },
    { icon: <Icons.Sun />, iconPosition: "right", label: "Light", value: "light" },
    { icon: <Icons.Gear />, iconPosition: "right", label: "System", value: "system" },
  ] as ISelect["options"];

  return (
    <Select
      horizontal={horizontal || "left"}
      options={options}
      selection={[ternaryDarkMode]}
      trigger={
        <Button icon={options.find((option) => option.value === ternaryDarkMode)?.icon} small>
          {options.find((option) => option.value === ternaryDarkMode)?.label}
        </Button>
      }
      vertical={vertical || "top"}
      onSelection={(value): void => setTernaryDarkMode(value as "dark" | "light" | "system")}
    />
  );
}
