import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  ssr: false,
  server: {
    prerender: {
      enabled: true,
      routes: ["/"],
    },
  },
});
