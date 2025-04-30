import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/test-for-119681732",
  plugins: [vue()],
})

module.exports = {
  publicPath: "/test-for-119681732/"
}