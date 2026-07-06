#!/usr/bin/env sh

##########################
#                        #
# 此脚本仅作为最终部署使用 #
#                        #
##########################

set -e

dist="dist"

# 获取数据
## pnpm run data:info
if [ ! -d "$dist" ]; then
    mkdir $dist
fi

curl -L -o "$dist/plugins.json" "https://github.com/syt2/zotero-addons-scraper/releases/latest/download/addon_infos.json"

## 2026-7-6: GitHub API 故障，listStargazersForRepo 今年返回有写权限仓库的 stargazers，余者均为 404，
## 临时禁用 charts 数据获取，保持旧数据缓存
curl -L -o "$dist/charts.json" "https://github.com/zotero-chinese/zotero-plugins/raw/refs/heads/gh-pages/charts.json"
# pnpm run data:chart


# 复制兼容性文件
if [ ! -d "$dist/dist" ]; then
    mkdir $dist/dist
fi
cp $dist/*.json $dist/dist
cp .github/scripts/index.html $dist
cp .github/scripts/_redirects $dist
touch $dist/.nojekyll

echo "Done!"
