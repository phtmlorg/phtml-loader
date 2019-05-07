# pHTML Loader [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[pHTML Loader] lets you use [pHTML] with [Webpack].

## Install

Add [pHTML Loader] to your project:

```bash
npm install phtml-loader --save-dev
```

## Usage

Use [pHTML Loader] in your Webpack configuration:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          { loader: 'phtml-loader', {
            options: {
              /* Plugins */
              plugins: [], // Array | Plugin | Function

              /* Process Options */
              processOptions: {} // Object
            }
          } }
        ]
      }
    ]
  }
}
```

## Options

### plugins

The `plugins` property determines which [pHTML plugins] are applied.

```js
{ loader: 'phtml-loader', {
  options: {
    plugins: require('@phtml/image-alt')
  }
} }
```

```js
{
  loader: 'phtml-loader', {
  options: {
    plugins: [
      require('@phtml/image-alt'),
      require('@phtml/image-size')({ intrinsicsize: 'intrinsic' })
    ]
  }
} }
```

### processOptions

The `processOptions` property determines which [pHTML custom settings] are
applied.

```js
{ loader: 'phtml-loader', {
  options: {
    processOptions: {
      voidElements: ['path', 'source', 'use']
    }
  }
} }
```

[cli-img]: https://img.shields.io/travis/phtmlorg/phtml-loader.svg
[cli-url]: https://travis-ci.org/phtmlorg/phtml-loader
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/phtml-loader.svg
[npm-url]: https://www.npmjs.com/package/phtml-loader

[pHTML Loader]: https://github.com/phtmlorg/phtml-loader
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML custom settings]: https://phtml.io/global.html#ProcessOptions
[pHTML plugins]: https://www.npmjs.com/search?q=keywords:phtml-plugin
[Webpack]: https://webpack.js.org
