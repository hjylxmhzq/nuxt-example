import { H3Event, EventHandler, EventHandlerRequest } from "h3";
import { AsyncLocalStorage } from "async_hooks";

export function defineRouteHandler_0<R>(
  handler: EventHandler<EventHandlerRequest, R>
) {
  return async (ev: H3Event) => {
    return await handler(ev);
  };
}

export function defineRouteHandler_1<R>(
  handler: EventHandler<EventHandlerRequest, R>
) {
  return async (ev: H3Event) => {
    try {
      return await handler(ev);
    } catch (err: any) {
      return "some error message or redirect or something else";
    }
  };
}

export const requestScopeStorage = new AsyncLocalStorage<{
  requestId?: string;
  scopes?: string[];
}>();

export function defineRouteHandler<R>(
  handler: EventHandler<EventHandlerRequest, R>
) {
  return defineEventHandler(async (ev: H3Event) => {
    const store = {
      requestId: getHeader(ev, "x-request-id"),
      scopes: [],
    };
    return requestScopeStorage.run(store, async () => {
      try {
        return await handler(ev);
      } catch (err: any) {
        log(err.message);
        return "some error message or redirect or something else";
      }
    });
  });
}
