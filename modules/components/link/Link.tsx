import { css, cx } from "@/styled-system/css";
import NextLink from "next/link";
import { ComponentProps } from "react";

export function Link({ className, ...props }: ComponentProps<typeof NextLink>) {
  return <NextLink className={cx(linkStyle, className)} {...props} />;
}

const linkStyle = css({
  textDecoration: "none",
  transition: "color 0.2s",
  color: "link",
  "&:hover": {
    color: "link.hover",
  },
});
