import { listTopics } from '../actions/listTopics'
import { CommandDefinition } from '../KafkaCommand'

export type listTopicsOptions = {
  readonly cluster: string
}

export const listTopicsDefinition: CommandDefinition<listTopicsOptions> = {
  name: 'list-topics',
  description: 'list all the topics on the given cluster',
  options: {
    'cluster': {
      describe: 'Kafka cluster <CLUSTER:PORT>',
      demandOption: true
    }
  },
  action: listTopics
}
