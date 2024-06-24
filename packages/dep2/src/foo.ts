import { Person } from '@/decorator';

export function foo2() {
  console.log('foo in dep2');
  new Person('name');
}
