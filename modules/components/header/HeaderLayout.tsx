import { cx } from "@/styled-system/css";
import { center, hstack } from "@/styled-system/patterns";

interface Props {
  left?: React.ReactNode;
  center?: React.ReactNode;
  right?: React.ReactNode;
  className?: string;
}

export function HeaderLayout({ left, center: ct, right, className }: Props) {
  return (
    <header className={cx(headerStyles, className)}>
      <div className={leftStyles}>{left}</div>
      <div className={centerStyles}>{ct}</div>
      <div className={rightStyles}>{right}</div>
    </header>
  );
}

const headerStyles = hstack({
  gap: 0,
  h: "16",
  p: 4,
  bg: "Background",
  boxShadow: "sm",
});

const leftStyles = center({});

const centerStyles = center({
  flexGrow: 1,
  textStyle: "body1Bold",
  color: "text.secondary",
});

const rightStyles = center({});
