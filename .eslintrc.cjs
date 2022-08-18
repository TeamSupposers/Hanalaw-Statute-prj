module.exports = {
	'env': {
		'node': true,
		'es2021': true,
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'sourceType': 'module',
		'ecmaVersion': 'latest',
	},
	'rules': {
		'no-useless-catch': ['off'],

		'curly': ['error'],
		'eqeqeq': ['error'],
		'no-var': ['error'],
		'no-eq-null': ['error'],
		'no-plusplus': ['error'],
		'brace-style': ['error'],
		'prefer-const': ['error'],
		'no-lonely-if': ['error'],
		'default-case': ['error'],
		'dot-notation': ['error'],
		'require-await': ['error'],
		'no-undef-init': ['error'],
		'no-lone-blocks': ['error'],
		'no-else-return': ['error'],
		'no-multi-assign': ['error'],
		'no-new-wrappers': ['error'],
		'prefer-template': ['error'],
		'no-extra-parens': ['error'],
		'no-multi-spaces': ['error'],
		'block-scoped-var': ['error'],
		'no-return-assign': ['error'],
		'no-throw-literal': ['error'],
		'no-empty-function': ['error'],
		'default-case-last': ['error'],
		'no-useless-return': ['error'],
		'no-param-reassign': ['error'],
		'default-param-last': ['error'],
		'no-mixed-operators': ['error'],
		'no-trailing-spaces': ['error'],
		'space-before-blocks': ['error'],
		'prefer-destructuring': ['error'],
		'no-implicit-coercion': ['error'],
		'prefer-object-has-own': ['error'],
		'no-useless-computed-key': ['error'],

		'indent': ['error', 'tab'],
		'semi': ['error', 'always'],
		'quotes': ['error', 'single'],
		'eol-last': ['error', 'always'],
		'semi-style': ['error', 'last'],
		'comma-style': ['error', 'last'],
		'block-spacing': ['error', 'always'],
		'max-len': ['error', { 'code': 100 }],
		'no-multiple-empty-lines': ['error'],
		'spaced-comment': ['error', 'always'],
		'space-in-parens': ['error', 'never'],
		// 'linebreak-style': ['error', 'windows'],
		'object-shorthand': ['error', 'always'],
		'no-whitespace-before-property': ['error'],
		'object-curly-spacing': ['error', 'always'],
		'template-curly-spacing': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'keyword-spacing': ['error', { 'before': true }],
		'key-spacing': ['error', { 'beforeColon': false }],
		'max-statements-per-line': ['error', { 'max': 1 }],
		'multiline-comment-style': ['error', 'starred-block'],

		'arrow-spacing': ['error', {
			'before': true,
			'after': true,
		}],
		'switch-colon-spacing': ['error', {
			'after': true,
			'before': false,
		}],
		'array-element-newline': ['error', {
			'ArrayExpression': 'consistent',
			'ArrayPattern': { 'minItems': 3 },
		}],
		'no-use-before-define': ['error', {
			'functions': true,
			'classes': true,
			'variables': true,
			'allowNamedExports': false,
		}],
	},
};