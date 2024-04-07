import { PostJson } from "@/modules/models/Post";
import { css } from "@/styled-system/css";
import { vstack } from "@/styled-system/patterns";

interface Props {
  post: PostJson;
  onClick: (post: PostJson) => void;
}

export function PostListItem({ post, onClick }: Props) {
  return (
    <li className={containerStyle} onClick={() => onClick(post)}>
      <h3 className={titleStyle}>{post.title}</h3>
      <p className={descriptionStyle}>{post.description}</p>
      <p className={updatedAtStyle}>{post.updatedAt}</p>
    </li>
  );
}

const containerStyle = vstack({
  position: "relative",
  alignItems: "flex-start",
  padding: 4,

  boxShadow: "sm",
  rounded: "md",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "gray.100",
    opacity: 0.8,
  },
});

const titleStyle = css({
  textStyle: "lg",
  fontWeight: "bold",
});

const descriptionStyle = css({
  textStyle: "md",
  color: "GrayText",
});

const updatedAtStyle = css({
  position: "absolute",
  top: 4,
  right: 4,
  textStyle: "sm",
  color: "GrayText",
});
