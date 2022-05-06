import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/exercise1",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../dist/exercise1",
        assetsDir: "../resources",
        emptyOutDir: true,
    },
});
