import { spawn } from 'child_process'
const chalk = require('chalk')

export function run (command: string, ...args: string[]) {
  console.log(chalk.bold(`${command} ${args.join(' ')}`))
  const cmd = spawn(command, args)

  cmd.stdout.on('data', (data) => {
    console.log(chalk.green(data))
  })

  cmd.stderr.on('data', (data) => {
    console.log(chalk.red(data))
  })

  cmd.on('close', (code) => {
    console.log(chalk.bold(chalk.white(code)))
  })
}
