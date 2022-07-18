import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import del from "rollup-plugin-delete";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.ts",
  output: [{
    inlineDynamicImports: true,
    dir: "lib/cjs",
    format: "cjs",
    sourcemap: true
  }],
  plugins: [
    del({ targets: "lib/*" }),
    resolve({
      preferBuiltins: true,
      modulesOnly: false,
    }),
    commonjs({
      esmExternals: true,
      transformMixedEsModules: true,
    }),
    peerDepsExternal(),
    typescript({
      tsconfig: "./tsconfig.json",
      useTsconfigDeclarationDir: true
    }),
    postcss({
      extract: "styles.css"
    }),
    json(),
  ],
  external: [
    "classnames",
    "require",
    "prop-types-extra",
  ],
};
