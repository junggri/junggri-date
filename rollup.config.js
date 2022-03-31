import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import flatDts from 'rollup-plugin-flat-dts';
import typescript from 'rollup-plugin-typescript2';
import pkg from "./package.json"

export default [{
  input: "src/index.ts",
  output: {
    sourcemap: true,
    format: 'cjs',
    file: pkg.main,
    plugins: [
      flatDts()
    ]
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript()
  ]
}]

