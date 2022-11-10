## 问题集
1. 如果有提示`prefer-regex-literals`报错：
```
 Configuration for rule "prefer-regex-literals" is invalid:
        Value [{"disallowRedundantWrapping":true}] should NOT have more than 0 items.

 解决方式：
 yarn remove eslint
 yarn add eslint -D
```

2. 如果报：Must use import to load ES Module错误。
   ```
   /Users/tangbei/work_space/mistong/bend-teacher-h5/src/actions/creator.js
    0:0  error  Parsing error: Must use import to load ES Module: /Users/tangbei/work_space/mistong/bend-teacher-h5/node_modules/eslint/node_modules/eslint-scope/lib/definition.js
  require() of ES modules is not supported.
  require() of /Users/tangbei/work_space/mistong/bend-teacher-h5/node_modules/eslint/node_modules/eslint-scope/lib/definition.js from /Users/tangbei/work_space/mistong/bend-teacher-h5/node_modules/babel-eslint/lib/require-from-eslint.js is an ES module file as it is a .js file whose nearest parent package.json contains "type": "module" which defines all .js files in that package scope as ES modules.
  Instead rename definition.js to end in .cjs, change the requiring code to use import(), or remove "type": "module" from /Users/tangbei/work_space/mistong/bend-teacher-h5/node_modules/eslint/node_modules/eslint-scope/package.json


  解决方式：
  在package.json文件中，将"babel-eslint"更新为"@babel/eslint-parser"。最好使用最新的版本
  在.eslintrc中，将解析器行"parser": "babel-eslint"更新为"parser": "@babel/eslint-parser"
   ```
