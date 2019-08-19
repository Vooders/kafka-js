import { exec } from 'child_process'
import * as util from 'util'

const chalk = require('chalk')

const execute = util.promisify(exec)

export async function runCommand (command: string) {
  console.log(`running: ${chalk.bold(command)}`)
  const { stdout, stderr } = await execute(command)
  return {
    stdout,
    stderr
  }
}
