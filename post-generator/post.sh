echo "POSTS: Generating posts..."
cp -r ./posts/* ./app/posts/
echo "POSTS: Generating Done."
  
if [ "$1" == "--watch" ]; then
  echo "POSTS: Watching for changes..."
  fswatch -r ./posts | while read; do
    echo "POSTS: Regenerating posts..."
    cp -r ./posts/* ./app/posts/
    echo "POSTS: Regenerating Done."
  done
fi
