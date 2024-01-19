import { Icons } from "../../../icons";
import { Select, Button, useTheme, useMountSSR } from "../../../index";
import { ISelect } from "../../../types";

export default function ProviderToggle(): JSX.Element {
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
      selection={theme}
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
