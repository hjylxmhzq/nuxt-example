export default defineRouteHandler((ev) => {
  const auth = getCookie(ev, "auth");
  if (!auth) {
    setResponseStatus(ev, 401);
    return "Unauthorized";
  }
  return "Hello, World!";
});
