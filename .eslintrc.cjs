module.exports = {
  extends: ['eslint:recommended', 'plugin:import/recommended', '@adonisjs/eslint-config/app'],
  rules: {
    // コンポーネントファイル名が単一単語でも許容する
    'vue/multi-word-component-names': 'off',
    // 'import/no-unresolved': [
    //   'error',
    //   {
    //     // unplugin-iconsのパスが解決できないことを許容する
    //     ignore: ['^~icons/sp', '^~icons/material-symbols/', '^~icons/lucide/'],
    //   },
    // ],
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
        },
      },
    ],
  },
}
