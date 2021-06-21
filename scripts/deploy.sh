#! /usr/bin/env bash

DEPLOY_DIR="hg-deployment"

yarn build

cd $DEPLOY_DIR

rm -r $(find . -maxdepth 1 -not -name '.*')
cp -r ../build/* .

git add -A
git commit -m "Run deploy script..."

echo "Ready to push"

