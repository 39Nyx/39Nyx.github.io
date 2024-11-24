#!/usr/bin/env node
import { program } from "commander"
import select from '@inquirer/select'
import { createMd } from "./createMd.js"

program
  .command('create')
  .description('创建文件')
  .action(async () => {
    const answer = await select({
      message: '选择操作类型',
      choices: [
        {
          name: '创建md文件',
          value: 'create',
          description: '创建md文件',
        }
      ]
    })
    if (answer === 'create') {
      createMd().then(() => {
        console.log('文件创建成功')
      }).catch(() => {
        console.log('文件创建失败')
      })
    }
  })

program.parse()
