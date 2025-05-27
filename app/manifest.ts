import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ooka Pratama Portfolio",
    short_name: "Ooka's Portfolio",
    description:
      "Hi! I'm Ooka Pratama, a recent informatics graduate and fullstack developer, passionate about backend systems and modern web technology.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
      },
      {
        src: "/favicon.ico",
        sizes: "64x64",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: [
      "portfolio",
      "template",
      "development",
      "nextjs",
      "react",
      "developer",
      "web development",
      "open source",
    ],
    lang: "en",
    dir: "ltr",
    scope: "/",
  };
}
