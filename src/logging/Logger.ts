export interface Logger {
  error (...messages: string[]): void
  info (...messages: string[]): void
  pretty (object: object): void
}
