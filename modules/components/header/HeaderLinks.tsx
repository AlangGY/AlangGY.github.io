import { Link } from "@/modules/components/link/Link";
import { hstack } from "@/styled-system/patterns";

interface Props {}

export function HeaderLinks({}: Props) {
  return (
    <div className={containerStyle}>
      <Link href="/posts">Posts</Link>
      <Link href="/about">About</Link>
    </div>
  );
}

const containerStyle = hstack({
  gap: 4,
});
