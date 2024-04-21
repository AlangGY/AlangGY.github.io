import { PostsPage } from "@/modules/pages/PostsPage";
import postInfos from "./postInfos.json";
import { Post } from "@/modules/models/Post";

const posts = postInfos.map(
  (postInfo) =>
    new Post({
      id: postInfo.href,
      description: postInfo.description,
      readability: postInfo.readability,
      tags: postInfo.tags,
      thumbnail: "",
      title: postInfo.title,
      updatedAt: postInfo.updatedAt,
    })
);

export default function Page() {
  return <PostsPage posts={posts.map((post) => post.toJson())} />;
}
