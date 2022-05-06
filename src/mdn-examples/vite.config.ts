import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/mdn-examples",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        rollupOptions: {
            external: /^lit/,
        },
        outDir: "../../dist/mdn-examples",
        emptyOutDir: true,
    },
});
