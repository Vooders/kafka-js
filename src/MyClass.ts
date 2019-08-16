export interface MyInterface {
  readonly name: string
}

export class MyClass implements MyInterface {
  constructor (public name: string) {
  }
}
