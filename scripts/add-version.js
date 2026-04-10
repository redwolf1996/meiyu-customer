// 在 index.html 中添加版本号参数
// 使用方式: node scripts/add-version.js

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const indexPath = path.resolve(__dirname, '../dist/build/h5/index.html')
const version = Date.now() // 使用时间戳作为版本号

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf-8')

  // 为 JS 和 CSS 文件添加版本号参数
  content = content.replace(
    /(src|href)="([^"]+\.(js|css))"/g,
    `$1="$2?v=${version}"`
  )

  fs.writeFileSync(indexPath, content, 'utf-8')
  console.log(`✅ 版本号已添加: v=${version}`)
} else {
  console.error('❌ 找不到 index.html 文件')
}
