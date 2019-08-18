#! /usr/bin/env node

import * as Yargs from 'yargs'
import { KafkaCommand } from '../src/cli/KafkaCommand'
import { ConsoleLogger } from '../src/logging/ConsoleLogger'
import { helloDefinition } from '../src/cli/commands/helloDefinition'

const logger = new ConsoleLogger()

Yargs.demandCommand(1) // tslint:disable-line
  .strict()
  .command(new KafkaCommand(logger, helloDefinition))
  .argv
