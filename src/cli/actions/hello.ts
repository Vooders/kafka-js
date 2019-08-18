#!/usr/bin/env node

const chalk = require('chalk')

export async function hello (): Promise<void> {
  console.log(chalk.green('Hello World'))
  return Promise.resolve()
}
