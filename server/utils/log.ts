import { requestScopeStorage } from "../utils/event-handler";

// polyfill Symbol.dispose and Symbol.asyncDispose for node<=18
// @ts-expect-error
Symbol.dispose ??= Symbol("Symbol.dispose");
// @ts-expect-error
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose");

export function log(msg: string) {
  const store = requestScopeStorage.getStore();
  console.log(
    `[Request ID: ${store?.requestId}] [Scopes: ${store?.scopes?.join(
      "=>"
    )}] ${msg}`
  );
}

class LogScope {
  constructor(public name: string) {
    requestScopeStorage.getStore()?.scopes?.push(name);
  }
  dispose() {
    requestScopeStorage.getStore()?.scopes?.pop();
  }
  [Symbol.dispose]() {
    this.dispose();
  }
}

export function useScope(name: string) {
  return new LogScope(name);
}
