rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:jinyomo/coco-ui-website.git &&
git push -f -u origin main &&
cd -
echo https://jinyomo.github.io/coco-ui-website/index.html