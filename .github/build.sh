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

# 获取后端
# cd backend/ 
pnpm run data:info
pnpm run data:chart
# cd ../

# # 构建前端
# cd frontend/
# pnpm website:build
# cd ../

# 复制构建结果以便部署
# mkdir $dist
# cp -rf backend/dist/ frontend/dist/* $dist/

echo "Done!"
