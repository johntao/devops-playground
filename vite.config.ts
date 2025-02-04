import { defineConfig } from "vite";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/devops-playground/",
  build: {
    rollupOptions: {
      external: ['@johntao/dummy1']
    }
  }
});