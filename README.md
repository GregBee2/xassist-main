# @xassist/xassist-main
This module provides some helperfunctions like onready, id-generator and templating engine
## Installation

If you use [NPM](https://www.npmjs.com/), you can install the module via `npm install xassist-main`. Otherwise, you can download the latest [minified file](https://raw.githubusercontent.com/GregBee2/xassist-csv/master/dist/xAssist-main.min.js). Be aware any dependencies are not installed by default; you should consider downloading them yourself.
If you want, you can install the complete library from github [xassist](https://github.com/GregBee2/xassist), this includes all dependencies you may need.

The module uses [UMD](https://github.com/umdjs/umd) and supports [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD), [CommonJS](http://wiki.commonjs.org/wiki/CommonJS) and vanilla environments. Using vanilla: the `xa`global is exported:

```html
<script>
xa.id()
</script>
```



## API
### id()

The function id() returns a unique identifier
```js
xa.id() \\returns an unique identifier
xa.id("prefix") \\returns "prefix_"+unique identifier
```
#### Parameters for id()
`id()` takes 1 parameters:
- *prefix* [`String`,defaults to: `""`]:This parameter will be used as a prefix for the id.
#### Result for id()
The value it returns is a `String`-formatted `Number`
### ready()

The function adds a callback to the DOMContentLoaded-event, it get's executed when this event is triggered. or immediatly, when the DOM was allready ready.
```js
ready(callBack::function [,thisArg])
```
`ready()` returns nothing.
#### Parameters for ready()
`ready()` takes 2 parameters:
- **callBack** [`Function`]:The listener to be attached to the DOMContentLoaded-event
- *thisArg* [*any datatype*,defaults to: `document`]:the execution-context of the function
#### Example for ready()
```js
xa.ready(cb)    \\executes cb(eventDetails) (this inside cb references the document)
xa.ready(cb,thisArg)  \\executes cb(eventDetails) (this inside cb references thisArg)
```
### template()

A basic templating engine, which replaces substrings in a `String` based on a given object and his keys.
```js
xa.template(txt,obj,strNotFound)
```
#### Parameters for template()
`template()` takes 3 parameters:
- **txt** [`String`]:the base tekst where the templating-engine needs to change certain substrings (it replaces all `${objKey}`)
- **obj** [`Object`]:the lookup-object to find the defined key's in txt
- *strNotFound* [`String`,defaults to: `""`]:when the respective key is not found in the lookupObject, the template get's replaced by this string
#### Result for template()
the string with all its replaced substrings
#### Example for template()
```js
xa.template('start${a}${b.c.d}${b.c.d.e}',{a:"OK",b:{c:{d:"VERYDEEP"}}},"notfound") \\returns 'startOKVERYDEEPnotfound'
```
## DevDependencies
- [csv2readme](https://github.com/GregBee2/csv2readme#readme): read csv file with fixed format and parse a readme markdown file
- [jsdom](https://github.com/jsdom/jsdom#readme): A JavaScript implementation of many web standards
- [rimraf](https://github.com/isaacs/rimraf#readme): A deep deletion module for node (like `rm -rf`)
- [rollup](https://github.com/rollup/rollup): Next-generation ES6 module bundler
- [tape](https://github.com/substack/tape): tap-producing test harness for node and browsers
## License

This module is licensed under the terms of [GPL-3.0](https://choosealicense.com/licenses/gpl-3.0).
