# @xassist/xassist-main

main functions with onready, id-generator and templating engine

## Installation

This is a [Node.js](https://nodejs.org/) module available through the 
[npm registry](https://www.npmjs.com/). It can be installed using the 
[`npm`](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)
or 
[`yarn`](https://yarnpkg.com/en/)
command line tools.

```sh
npm install @xassist/xassist-main --save
```

## Tests

```sh
npm install
npm test
```

## Usage

The scripts are mainly written for the browser, some functions may be usefull for Node, but this is not tested.

### unique identifier

The function id() returns a unique identifier.

```js
xa.id() \\returns an unique identifier
xa.id("prefix") \\returns "prefix_"+unique identifier
```

### ready

The function ready(cb,thisArg) executes cb when the DOMContentLoaded-event is triggered. or immediatly when the DOM was allready ready.

```js
xa.ready(cb) 			\\executes cb(eventDetails) (this inside cb references the document)
xa.ready(cb,thisArg) 	\\executes cb(eventDetails) (this inside cb references thisArg) 
```

### templating engine

A basic templating engine (xa.template()) is added

```js
xa.template(txt,obj,strNotFound) \\replaces all $(objKey) with the respective objKey of obj, if the key is not found, it uses strNotFound (defaults to '')
xa.template('start${a}${b.c.d}${b.c.d.e}',{a:"OK",b:{c:{d:"VERYDEEP"}}},"notfound") \\returns 'startOKVERYDEEPnotfound'
```


## Dependencies

None

## Dev Dependencies

- [rimraf](https://ghub.io/rimraf): A deep deletion module for node (like `rm -rf`)
- [rollup](https://ghub.io/rollup): Next-generation ES6 module bundler
- [rollup-plugin-json](https://ghub.io/rollup-plugin-json): Convert .json files to ES6 modules:
- [rollup-plugin-node-resolve](https://ghub.io/rollup-plugin-node-resolve): Bundle third-party dependencies in node_modules
- [tape](https://ghub.io/tape): tap-producing test harness for node and browsers

## License

GPL-3.0-only
