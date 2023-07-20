module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'airbnb-base',
		'eslint:recommended',
		'plugin:vue/recommended',
	],
	parser: 'vue-eslint-parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
		sourceType: 'module',
	},
	plugins: [
		'import',
		'vue',
		'@babel',
	],
	settings: {
		'import/resolver': {
			'babel-module': {},
		},
	},
	rules: {
		'arrow-spacing': ['error', { after: true, before: true }],
		'brace-style': ['error', 'stroustrup'],
		'comma-dangle': ['error', 'always-multiline'],
		'default-case': [
			'error', {
				commentPattern: '^skip\\sdefault',
			},
		],
		'func-names': ['error', 'never'],
		'function-paren-newline': 0,
		'implicit-arrow-linebreak': ['warn', 'beside'],
		'import/no-extraneous-dependencies': [
			'error',
			{
				devDependencies: [
					'**/vite.*.js',
				],
			},
		],
		'import/no-self-import': 0,
		'import/prefer-default-export': 0,
		indent: [2, 'tab', { SwitchCase: 1 }],
		'linebreak-style': 0,
		'max-len': 0,

		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'no-debugger': 0,
		'no-else-return': ['error', { allowElseIf: true }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
		'no-new': 0,
		'no-param-reassign': [
			'error', {
				ignorePropertyModificationsFor: ['Vue', 'field', 'model', 'el', 'item', 'state'],
				props: true,
			},
		],
		'no-plusplus': [
			'error', { allowForLoopAfterthoughts: true },
		],
		'no-tabs': [0, { allowIndentationTabs: true }],
		'no-underscore-dangle': [
			'error', {
				allow: ['_data', '__dirname', '__filename'],
				allowAfterThis: true,
			},
		],
		'no-unused-vars': 1,
		'no-useless-escape': 0,
		'object-curly-newline': ['error', {
			ObjectPattern: { multiline: false },
		}],
		'operator-linebreak': ['error', 'after'],
		'prefer-destructuring': [
			'error', {
				array: false,
				object: false,
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		quotes: ['error', 'single', { avoidEscape: true }],
		semi: ['error', 'always'],
		'sort-imports': ['error', {
			allowSeparatedGroups: false,
			ignoreCase: true,
			ignoreDeclarationSort: true,
			ignoreMemberSort: false,
			memberSyntaxSortOrder: ['none', 'single', 'all', 'multiple'],
		}],
		'space-before-function-paren': ['error', {
			anonymous: 'never',
			asyncArrow: 'never',
			named: 'never',
		}],
		'vue/attributes-order': ['error', {
			alphabetical: true,
			order: [
				'DEFINITION',
				'LIST_RENDERING',
				'CONDITIONALS',
				'RENDER_MODIFIERS',
				'GLOBAL',
				['UNIQUE', 'SLOT'],
				'TWO_WAY_BINDING',
				'OTHER_DIRECTIVES',
				'OTHER_ATTR',
				'EVENTS',
				'CONTENT',
			],
		}],
		'vue/component-tags-order': ['error', {
			order: ['template', 'script', 'style'],
		}],
		'vue/html-closing-bracket-newline': 0,
		'vue/html-comment-content-spacing': ['error',
			'always',
		],
		'vue/html-indent': 0,
		'vue/html-self-closing': 0,
		'vue/max-attributes-per-line': 0,
		'vue/multi-word-component-names': 0,
		'vue/no-template-shadow': 0,
		'vue/no-v-html': 0,
		'vue/no-v-text-v-html-on-component': 0,
		'vue/order-in-components': ['error', {
			order: [
				'el',
				'name',
				'key',
				'parent',
				'functional',
				['delimiters', 'comments'],
				['components', 'directives', 'filters'],
				'extends',
				'mixins',
				['provide', 'inject'],
				'ROUTER_GUARDS',
				'layout',
				'middleware',
				'validate',
				'scrollToTop',
				'transition',
				'loading',
				'inheritAttrs',
				'model',
				['props', 'propsData'],
				'emits',
				'setup',
				'asyncData',
				'data',
				'fetch',
				'head',
				'computed',
				'watch',
				'watchQuery',
				'beforeCreate',
				'created',
				'beforeMount',
				'mounted',
				'beforeUpdate',
				'updated',
				'activated',
				'deactivated',
				'beforeDestroy',
				'destroyed',
				'errorCaptured', // for Vue.js 2.5.0+
				'methods',
				['template', 'render'],
				'renderError',
			],
		}],
		'vue/padding-line-between-blocks': 1,
		'vue/require-name-property': 1,
		'vue/singleline-html-element-content-newline': 0,
	},
};