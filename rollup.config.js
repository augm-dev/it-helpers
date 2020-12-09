import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
	input: 'src/index.js',
	cache: false,
	output: [{
		format: 'esm',
		file: pkg.module,
		sourcemap: false,
	}, {
		format: 'cjs',
		file: pkg.main,
		sourcemap: false,
	}, {
		name: pkg['umd:name'] || pkg.name,
		format: 'umd',
		file: pkg.unpkg,
		sourcemap: false,
		plugins: [
			terser()
		]
	}, {
		format: 'esm',
		file: "es.js",
		sourcemap: false,
		plugins: [
			terser()
		]
	}, {
		name: pkg['umd:name'] || pkg.name,
		format: 'umd',
		file: "min.js",
		sourcemap: false,
		plugins: [
			terser()
		]
	}],
	// external: [
	// 	...require('module').builtinModules,
	// 	...Object.keys(pkg.dependencies || {}),
	// 	...Object.keys(pkg.peerDependencies || {})
	// ],
	plugins: [
		resolve()
	]
}
