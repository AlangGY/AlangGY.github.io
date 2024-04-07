import { Post } from "../components/post/Post";
import { POST_JSON_FIXTURES } from "../models/__fixtures__/POST_JSON_FIXTURES";

interface Props {
  id: string;
}

export function PostDetailPage({ id }: Props) {
  const post = POST_JSON_FIXTURES.find((post) => post.id === id);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Post post={post} />
    </>
  );
}
