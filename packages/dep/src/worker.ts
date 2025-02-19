import { foo } from '@/foo';
import { init, loadRemote } from '@module-federation/enhanced/runtime';

console.log('WORKER at dep');
foo();

init({
  name: 'rslib_worker',
  remotes: [
    {
      name: 'mf_remote',
      entry: 'http://localhost:3002/mf-manifest.json',
    },
  ],
});

async function bar() {
  const remote = await loadRemote('mf_remote');
  console.log(remote);
}

void bar();