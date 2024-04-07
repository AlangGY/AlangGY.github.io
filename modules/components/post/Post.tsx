import { PostJson } from "@/modules/models/Post";

interface Props {
  post: PostJson;
}

export function Post({ post }: Props) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
