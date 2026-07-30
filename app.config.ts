import { defineConfig } from "@tanstack/react-start/config";

export default defineConfig({
  server: {
    prerender: {
      enabled: true,
    },
  },
  prerender: {
    enabled: true,
  },
});
