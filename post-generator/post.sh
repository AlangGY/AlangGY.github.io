# posts/{post-name}.mdx to app/posts/{post-name}/page.mdx 
generate_posts() {
  echo "POSTS: Generating posts..."

  echo "POSTS: Cleaning up..."
  # Remove all files from app/posts/* except post.tsx
  find ./app/posts -type f ! -name 'page.tsx' -delete
  echo "POSTS: Cleaning up Done."

  echo "POSTS: Generate postInfos.json"
  node ./post-generator/index.js
  echo "POSTS: Generate postInfos.json Done."

  cp -f ./posts/postInfos.json ./app/posts/postInfos.json
  
  for file in ./posts/*.mdx; do
    filename=$(basename "$file")
    postname="${filename%.*}"
    echo "  POSTS: Generating $postname"
    mkdir -p "./app/posts/$postname"
    touch "./app/posts/$postname/page.mdx"
    cp -f "$file" "./app/posts/$postname/page.mdx"
  done
  echo "POSTS: Generating Done."  
}

generate_posts

if [ "$1" == "--watch" ]; then
  echo "POSTS: Watching for changes..."
  fswatch -r ./posts | while read; do
    generate_posts;
  done
fi
