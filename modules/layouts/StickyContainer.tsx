import { css, cx } from "@/styled-system/css";
import {
  PropsWithChildren,
  ReactElement,
  cloneElement,
  isValidElement,
} from "react";

interface Props {
  className?: string;
  asChild?: boolean;
}

export function StickyContainer({
  className,
  children,
  asChild,
}: PropsWithChildren<Props>) {
  if (asChild && isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      ...children.props,
      className: cx(children.props.className, stickyStyle, className),
    });
  }

  return <div className={cx(stickyStyle, className)}>{children}</div>;
}

const stickyStyle = css({
  position: "sticky",
  top: 0,
});
