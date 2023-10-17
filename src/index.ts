import { createFilter } from "vite";

const filter = createFilter(
  [/\.[jt]sx?$/, /\.vue$/, /\.svelte$/, /\.astro$/],
  [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/]
);
export default function myPlugin() {
  return {
    name: "console-helper",

    transform(src: any, id: string) {
      console.log(id, src);
      if (!filter(id)) return;
      return {
        code: src,
        map: null, // 如果可行将提供 source map
      };
    },
  };
}
