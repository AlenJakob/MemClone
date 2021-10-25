module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parserOptions: {
		parser: 'babel-eslint',
	},
	extends: ['prettier', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
	plugins: ['vue'],
	rules: {
		semi: [2, 'never'],
		'no-console': 'off',
		'no-trailing-spaces': 'error',
		'prettier/prettier': [
			'error',
			{
				semi: false,
				endOfLine: 'auto',
				singleQuote: true,
				printWidth: 150,
				useTabs: true,
				trailingComma: 'es5',
			},
		],
	},
}
