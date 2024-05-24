# Webpack

- Webpack-demo
  - src
    - circle.js
    - index.js
  - index.html

**index.js**

```js
import { Circle } from './circle';

const c = new Circle(10);
c.draw();
```

**circle.js**

```js
const _radius = new WeakMap();

export class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  draw() {
    console.log('Circle with radius ' + _radius.get(this));
  }
}
```

**index.html**

```html
<script src="dist/main.bundle.js"></script>
```

## Command line

- `npm i -g webpack-cli@2.0.14`
- `webpack-cli init`
- Will your application have multiple bundles? (Y/n): n
- Which module will be the first to enter the application? [example: './src/index']: `./src/index`
- Which folder will your generated bundles be in? [defalut: dist]: `Prass Enter`
- Are you going to use this in production? (Y/n): `n`
- Will you be using ES2015? (Y/n): `Y`
- Will you use one of the below CSS solutions?: `n`
- If you want to bundle your CSS files, what will you name the bundle? (press enter to skip): `Prass Enter`
- Name your 'webpack.[name].js?' [default: 'config']: `Prass Enter`

- `npm init --yes`
- package.json
  - scripts
  - "build": "webpack -w",
- `npm run build`

- dist
  - main.bundle.js
