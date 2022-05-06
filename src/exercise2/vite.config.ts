import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/exercise2",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../dist/exercise2",
        assetsDir: "../resources",
        emptyOutDir: true,
    },
});
