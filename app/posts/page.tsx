import { PostsPage } from "@/modules/pages/PostsPage";
import { posts } from "./posts";

export default function Page() {
  return <PostsPage posts={posts} />;
}
