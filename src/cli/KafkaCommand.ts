import * as yargs from 'yargs'
import { Logger } from '../../src/logging/Logger'

type OptionsDefinition = {
  readonly [key: string]: yargs.Options
}

export type CommandDefinition<CommandOptions> = {
  readonly name: string
  readonly description: string
  readonly options: OptionsDefinition
  readonly action: (args: CommandOptions, logger: Logger) => Promise<string | void>
}

export class KafkaCommand<CommandOptions, Unused> implements yargs.CommandModule<Unused, CommandOptions> {
  readonly command: string
  readonly describe: string
  readonly builder: OptionsDefinition
  private readonly action: (args: CommandOptions, logger: Logger) => Promise<string | void>

  constructor (private readonly logger: Logger, definition: CommandDefinition<CommandOptions>) {
    this.command = definition.name
    this.describe = definition.description
    this.builder = definition.options
    this.action = definition.action
  }

  readonly handler = (args: yargs.Arguments<CommandOptions>) => {
    this.action(args as any as CommandOptions, this.logger)
      .then((result) => {
        if (result) {
          console.log(result)
        }
        this.logger.info(`👌 ${this.command} complete`)
      })
      .catch((error) => {
        this.logger.error(`❗ Error running ${this.command} - ${error.message}`)
        process.exitCode = 1
      })
  }
}
