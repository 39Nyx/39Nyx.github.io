import input from '@inquirer/input'
import fs from 'fs'
import path from 'path'
import search, { Separator } from '@inquirer/search'
import matter from "gray-matter"
import select from "@inquirer/select"

export async function createMd() {
  const baseDir = process.cwd()
  let readDir = 'docs'
  while (1) {
    const directories = getDirectories(path.join(baseDir, readDir))
    if (directories.length === 0) {
      break
    }
    const answer = await search({
      message: '选择文件夹',
      pageSize: directories.length,
      source: async (input, { signal }) => {
        if (!input) {
          return directories.map(item => item.name)
        }

        return directories.filter((item) => {
          return item.name.includes(input)
        }).map(item => item.name)
      },
    })
    readDir = path.join(readDir, answer)
  }
  const frontMatter = getFrontMatter(path.join(baseDir, readDir))
  const orderList = [...new Set(frontMatter.map(item => item.order))].sort((a, b) => a - b)
  const groupOrderList = [...new Set(frontMatter.map(item => item.group.order))].sort((a, b) => a - b)
  const groupList = frontMatter.map(item => item.group)
  const fileName = await input({ message: '请输入文件名：' })
  const order = await input({
    message: '请输入排序序号：',
    default: orderList[orderList.length - 1] + 1
  })
  let groupTitle = await select({
    message: '选择分组名',
    choices: [
      ...[... new Set(groupList.map(item => item.title))],
      '新建分组'
    ]
  })
  let groupOrder = null
  if (groupTitle === '新建分组') {
    groupTitle = await input({ message: '请输入分组名：' })
  } else {
    groupOrder = groupList.find(item => item.title === groupTitle).order
  }
  if (groupOrder === null) {
    groupOrder = await select({
      message: '选择分组排序序号',
      choices: [
        ...groupOrderList,
        '新建分组'
      ]
    })
    if (groupOrder === '新建分组') {
      groupOrder = await input({
        message: '请输入分组排序序号：',
        default: groupOrderList[groupOrderList.length - 1] + 1
      })
    }
  }
  const newFrontMatter = {
    title: fileName,
    order: parseInt(order),
    group: {
      title: groupTitle,
      order: parseInt(groupOrder)
    }
  }
  const newContent = matter.stringify('', newFrontMatter)
  fs.writeFileSync(path.join(baseDir, readDir, `${fileName}.md`), newContent)

}

function getDirectories(filePath) {
  const excludeDirs = ['images']
  return fs.readdirSync(filePath)
    .filter(name => !excludeDirs.includes(name))
    .map(name => {
      return {
        name: name,
        url: path.join(filePath, name)
      }
    })
    .filter(source => fs.statSync(source.url).isDirectory())
}

function getFrontMatter(filePath) {
  return fs.readdirSync(filePath)
    .filter(name => name.endsWith('.md'))
    .map(name => {
      const fileContent = fs.readFileSync(path.join(filePath, name), 'utf8')
      const { data } = matter(fileContent)
      return data
    })
}
