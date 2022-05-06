import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src/example/step-0",
    build: {
        lib: {
            entry: "index.ts",
            formats: ["es"],
        },
        outDir: "../../../dist/example/step-0",
        emptyOutDir: true,
    },
});
