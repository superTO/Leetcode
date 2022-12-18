# 要重寫的題目

139. Word Break

91. Decode Ways

207. Course Schedule

## environments

Typescript	Node.js 14.8.0	

Run with --harmony flag, enabling new ES2020 features.

lodash.js library is included by default

## how to run
- has package.json
```
npx tsc -t 'es2020' -m "nodenext" 1.TwoSum.ts
node 1.TwoSum.js
```

- [without package.json](https://github.com/microsoft/TypeScript/issues/44843) 
```
npx --package typescript tsc -t 'es2020' -m "nodenext" 1.TwoSum.ts
```
or
```
npx -p typescript tsc -t 'es2020' -m "nodenext" 1.TwoSum.ts
```