import fs from 'node:fs'
import path from 'node:path'

// 读写
export function readFile(filePath: string) {
  // 读取文件
  const data = fs.readFileSync(filePath, { encoding: 'utf8' })
  return JSON.parse(data)
}

export function writeFile(
  filePath: string,
  data: string | NodeJS.ArrayBufferView,
) {
  // 获取目标目录路径
  const dirPath = path.dirname(filePath)

  // 检查目录是否存在，如果不存在则创建目录
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }

  // 写入文件
  fs.writeFileSync(filePath, data, 'utf8')
  console.log(`    ${filePath} 写入完成`)
}

export function copyFileSync(source: string, target: string) {
  let targetFile = target

  // If target is a directory, a new file with the same name will be created
  if (fs.existsSync(target)) {
    if (fs.lstatSync(target).isDirectory()) {
      targetFile = path.join(target, path.basename(source))
    }
  }

  fs.writeFileSync(targetFile, fs.readFileSync(source))
}

export function copyFolderRecursiveSync(source: string, target: string) {
  let files = []

  // Check if folder needs to be created or integrated
  const targetFolder = path.join(target)
  if (!fs.existsSync(targetFolder)) {
    fs.mkdirSync(targetFolder)
  }

  // Copy
  if (fs.lstatSync(source).isDirectory()) {
    files = fs.readdirSync(source)
    files.forEach((file) => {
      const curSource = path.join(source, file)
      if (fs.lstatSync(curSource).isDirectory()) {
        copyFolderRecursiveSync(curSource, targetFolder)
      }
      else {
        copyFileSync(curSource, targetFolder)
      }
    })
  }
}
