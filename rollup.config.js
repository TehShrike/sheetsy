import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

const pkg = require(`./package.json`)

export default {
	input: `index-browser.js`,
	output: [
		{
			name: `sheetsy`,
			file: pkg.browser,
			format: `cjs`,
			exports: `named`,
		}, {
			name: `sheetsy`,
			file: pkg.module,
			format: `es`,
			exports: `named`,
		},
	],
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
}
