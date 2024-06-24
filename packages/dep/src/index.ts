import './index.css';
export { foo } from './foo';
export * from './component';
export function createWorker() {
  new Worker(new URL('./worker.ts', import.meta.url));
}