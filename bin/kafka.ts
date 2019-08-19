#! /usr/bin/env node

import * as Yargs from 'yargs'
import { KafkaCommand } from '../src/cli/KafkaCommand'
import { ConsoleLogger } from '../src/logging/ConsoleLogger'
import { listTopicsDefinition } from '../src/cli/commands/listTopicsDefinition'

const logger = new ConsoleLogger()

Yargs.demandCommand(1) // tslint:disable-line
  .strict()
  .command(new KafkaCommand(logger, listTopicsDefinition))
  .argv
