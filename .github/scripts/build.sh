#!/usr/bin/env sh

##########################
#                        #
# 此脚本仅作为最终部署使用 #
#                        #
##########################

set -e

dist="dist"

# 清除先前构建
if [ -d "$dist" ]; then
    rm -rf "$dist"
fi
mkdir $dist

# 获取数据
pnpm run data:info
# pnpm run data:chart

# 复制兼容性网页
mkdir $dist/dist
mv $dist/*.json $dist/xpi $dist/dist -f
cp .github/scripts/index.html $dist
cp .github/scripts/_redirects $dist

echo "Done!"
