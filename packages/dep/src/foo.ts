import { Person } from '@/decorator';

import { foo2 } from 'dep2';

export function foo() {
  foo2();
  console.log('FOO');
  new Person('abc').greet();
  return 'hello world';
}
