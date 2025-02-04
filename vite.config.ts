import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/devops-playground/",
  // build: {
  //   rollupOptions: {
  //     external: ['dummy1']
  //   },
  // },
  resolve: {
    alias: {
      'dummy1': '@johntao/dummy1',
    },
  },
});