import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  base: "/",
  server: {
    prerender: {
      enabled: true,
    },
  },
});
