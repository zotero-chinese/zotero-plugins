#!/usr/bin/env sh

##########################
#                        #
# 此脚本仅作为最终部署使用 #
#                        #
##########################

set -e

dist="dist"

# 获取数据
pnpm run data:info
pnpm run data:chart

# 复制兼容性文件
if [ ! -d "$dist/dist" ]; then
    mkdir $dist/dist
fi
cp $dist/*.json $dist/dist
cp .github/scripts/index.html $dist
cp .github/scripts/_redirects $dist
touch $dist/.nojekyll

echo "Done!"
