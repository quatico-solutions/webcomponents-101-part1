import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/solution1-2",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../dist/solution1-2",
        assetsDir: "../resources",
        emptyOutDir: true,
    },
});
