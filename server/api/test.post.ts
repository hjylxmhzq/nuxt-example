import JSZip from "jszip";
import "setimmediate";

export default defineEventHandler((ev) => {
  const zip = new JSZip();
  zip.name;
  return {
    name: "text",
    data: {
      text: "Hello, World!",
    },
  };
});
