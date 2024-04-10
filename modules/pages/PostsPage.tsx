import { PostList } from "../components/post-list/PostList";
import { PostJson } from "../models/Post";

interface Props {
  posts: PostJson[];
}

export function PostsPage({ posts }: Props) {
  return (
    <>
      <PostList posts={posts} />
    </>
  );
}
