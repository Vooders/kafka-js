import { hello } from '../actions/hello'
import { CommandDefinition } from '../KafkaCommand'

export type DependencyCheckOptions = {
  readonly configFile: string
}

export const helloDefinition: CommandDefinition<DependencyCheckOptions> = {
  name: 'hello',
  description: 'Say hello',
  options: {
    'name': {
      describe: 'Name to say hello to',
      demandOption: false
    }
  },
  action: hello
}
