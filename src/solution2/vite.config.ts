import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/solution2",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../dist/solution2",
        assetsDir: "../resources",
        emptyOutDir: true,
    },
});
