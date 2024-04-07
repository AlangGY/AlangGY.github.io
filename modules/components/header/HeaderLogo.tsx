import { Link } from "@/modules/components/link/Link";
import { css, cx } from "@/styled-system/css";

interface Props {
  className?: string;
}

export function HeaderLogo({ className }: Props) {
  return (
    <Link href="/" className={cx(logoStyle, className)}>
      Alang Blog
    </Link>
  );
}

const logoStyle = css({
  fontSize: "2xl",
  fontWeight: "bold",
  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "black",
  },
});
