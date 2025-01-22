import { defineConfig } from "vite";
import path from "path";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "./src/js/main.js"),
			name: "framework ESGI",
			//formats: ["es"],
		},
	},
});
