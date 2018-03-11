# generator-anxsaiyuki [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Create files

## Installation

First, install [Yeoman](http://yeoman.io) and generator-anxsaiyuki using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-anxsaiyuki
```

Then generate your new project:

```bash
yo anxsaiyuki
```

If you want to include Flow:

```bash
npm install --global flow-bin
```

Script Commands:

* Start Server on localhost:3000
```bash
npm start
```
* Start Server with nodemon (start server on localhost:3000)
```bash
npm run start-dev
```

* Start webpack dev (Used to create a virtual server for react project on localhost:8080)
```bash
npm run dev
```

* Build src into dist folder (This will move all the necessary files to a new folder called dist)
```bash
npm run build
```

## License

MIT © [anxsaiyuki]()


[npm-image]: https://badge.fury.io/js/generator-anxsaiyuki.svg
[npm-url]: https://npmjs.org/package/generator-anxsaiyuki
[travis-image]: https://travis-ci.org/anxsaiyuki/generator-anxsaiyuki.svg?branch=master
[travis-url]: https://travis-ci.org/anxsaiyuki/generator-anxsaiyuki
[daviddm-image]: https://david-dm.org/anxsaiyuki/generator-anxsaiyuki.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/anxsaiyuki/generator-anxsaiyuki
[coveralls-image]: https://coveralls.io/repos/anxsaiyuki/generator-anxsaiyuki/badge.svg
[coveralls-url]: https://coveralls.io/r/anxsaiyuki/generator-anxsaiyuki
