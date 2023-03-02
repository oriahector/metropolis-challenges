import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";
import eslintPLugin from "vite-plugin-eslint";
import { resolve } from "path";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), "") };

  return defineConfig({
    base: process.env.VITE_APP_BASE_URL,
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
    plugins: [
      vue(),
      svgLoader({
        svgoConfig: {
          multipass: true,

          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: {
                  removeTitle: false,
                },
              },
            },
            "removeDimensions",
            {
              name: "sortAttrs",
              params: {
                xmlnsOrder: "alphabetical",
              },
            },
            {
              name: "cleanupListOfValues",
              params: {
                floatPrecision: 0,
              },
            },
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ preserveAspectRatio: "none" }],
              },
            },
          ],
        },
      }),
      eslintPLugin(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/styles/basics.scss";`,
        },
      },
    },
  });
};
