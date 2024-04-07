import { css } from "@/styled-system/css";
import { HeaderLayout } from "./HeaderLayout";
import { HeaderLinks } from "./HeaderLinks";
import { HeaderLogo } from "./HeaderLogo";

interface Props {
  className?: string;
}

export function Header({ className }: Props) {
  return (
    <HeaderLayout
      left={<HeaderLogo />}
      right={<HeaderLinks />}
      className={className}
    />
  );
}
