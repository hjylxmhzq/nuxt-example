export default defineRouteHandler(() => {
  longTimeJob(200);
  return "success";
});

function longTimeJob(timeMs: number) {
  const start = Date.now();
  while (true) {
    if (Date.now() % 100 === 0) {
      console.log("Long time job");
    }
    if (Date.now() - start > timeMs) {
      break;
    }
  }
}
