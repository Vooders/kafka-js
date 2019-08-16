import { MyClass } from '../src/MyClass'
import { Gen } from 'verify-it'

describe('MyClass', () => {
  verify.it('should have a name', Gen.string, (name: string) => {
    const myClass = new MyClass(name)
    myClass.name.should.eql(name)
  })
})
