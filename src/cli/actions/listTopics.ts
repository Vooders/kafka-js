import { runCommand } from '../../lib/commandRunner'
import { listTopicsOptions } from '../commands/listTopicsDefinition'

export async function listTopics (options: listTopicsOptions): Promise<string> {
  const result = await runCommand(`/opt/kafka/bin/kafka-topics.sh --bootstrap-server ${options.cluster} --list`)
  return result.stdout
}
