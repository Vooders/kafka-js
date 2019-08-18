import * as util from 'util'
import { Logger } from './Logger'

export class ConsoleLogger implements Logger {
  error (...messages: string[]) {
    messages.forEach((message) => {
      console.error(`${message}`)
    })
  }

  info (...messages: string[]) {
    console.error(...messages)
  }

  pretty (object: object) {
    console.error(util.inspect(object, { colors: true, depth: null, breakLength: 20 }))
  }
}
