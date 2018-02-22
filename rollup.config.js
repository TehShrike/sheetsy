import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

const pkg = require(`./package.json`)

export default {
	entry: `index-browser.js`,
	moduleName: `sheetsy`,
	plugins: [
		commonjs(),
		resolve(),
		babel({
			exclude: `node_modules/**`,
			babelrc: false,
			presets: [
				[
					`env`,
					{
						modules: false,
					},
				],
			],
			plugins: [
				`external-helpers`,
			],
		}),
	],
	targets: [
		{ dest: pkg.browser, format: `cjs` },
	],
}
