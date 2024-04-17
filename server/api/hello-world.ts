import { log } from "../utils/log";

export default defineRouteHandler(() => {
  return asyncWorkA();
});

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function asyncWorkA() {
  // begin a new scope
  using _ = useScope("a");

  await sleep(500);
  log('asyncWorkA() called'); // [Scopes: a] asyncWorkA() called
  const result = await asyncWorkB();
  log('asyncWorkA() finished'); //  // [Scopes: a] asyncWorkA() finished
  return result
}

async function asyncWorkB() {
  // begin a new nested scope
  using _ = useScope("b");

  await sleep(500);
  log('asyncWorkB() called'); // [Scopes: a=b] asyncWorkB() called
  return "Hello, World!";
}
