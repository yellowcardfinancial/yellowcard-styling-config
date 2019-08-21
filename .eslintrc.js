module.exports = {
  "extends": [
    "prettier",
    "plugin:vue/essential"
  ],
  plugins: ["prettier"],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "vue/no-unused-vars": "error",
    "no-console": "off",
    "no-await-in-loop": 0,
    "no-return-assign": [
      "error",
      "except-parens"
    ],
    "no-unused-vars": [
      1,
      {
        "ignoreSiblings": true,
        "argsIgnorePattern": "res|next|^err"
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "all"
      }
    ],
    "prettier/prettier": [2, {
      "printWidth": 100,
      "singleQuote": false,
      "tabWidth": 2,
      "useTabs": false,
      "semi": false,
      "trailingComma": "none",
      "bracketSpacing": true,
      "arrowParens": "always",
      "jsxBracketSameLine": false,
      "requirePragma": false,
      "insertPragma": false,
      "proseWrap": "preserve",
      "overrides": [
        {
          "files": "*.scss",
          "options": {
            "parser": "scss"
          }
        }
      ]
    }]
  },
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "jsx": true
    }
  }
}