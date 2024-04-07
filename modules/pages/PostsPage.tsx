import { PostList } from "../components/post-list/PostList";
import { Post } from "../models/Post";
import { POST_JSON_FIXTURES } from "../models/__fixtures__/POST_JSON_FIXTURES";

interface Props {}

export function PostsPage({}: Props) {
  return (
    <>
      <PostList
        posts={[
          ...POST_JSON_FIXTURES,
          // new Post({
          //   id: "4",
          //   title: "Post 4",
          //   content: "This is Post 4 content",
          //   description: "This is Post 4",
          //   thumbnail: "https://via.placeholder.com/150",
          //   updatedAt: 1672531200000,
          // }).toJson(),
        ]}
      />
    </>
  );
}
