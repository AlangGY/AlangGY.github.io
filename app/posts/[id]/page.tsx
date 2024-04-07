import { POST_JSON_FIXTURES } from "@/modules/models/__fixtures__/POST_JSON_FIXTURES";
import { PostDetailPage } from "@/modules/pages/PostDetailPage";

export default function Page({ params: { id } }: { params: { id: string } }) {
  return <PostDetailPage id={id} />;
}

export async function generateStaticParams() {
  return POST_JSON_FIXTURES.map((post) => ({
    id: post.id,
  }));
}
