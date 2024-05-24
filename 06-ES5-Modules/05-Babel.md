# Babel

- Download & install NodeJS
- `node -v`
- `mkdir es6-tooling`
- `cd es6-tooling`
- `npm init --yes`
- `npm i babel-cli@6.26.0 babel-core@6.26.0 babel-preset-env@1.6.1 --save-dev`
- `code .`
- Add file: index.js

index.js

```js
const x = 1;
```

- package.json
- delete scripts test
- add: `"babel": "babel --presets env index.js -o build/index.js"`
- add new folder: build
- Terminal: `npm run babel`
- go to bulid -> index.js
