# @xyluet/tiny

Removes all spaces from a string.

[![CircleCI](https://circleci.com/gh/xyluet/tiny/tree/master.svg?style=shield)](https://circleci.com/gh/xyluet/tiny/tree/master)
[![Coverage Status](https://coveralls.io/repos/github/xyluet/tiny/badge.svg?branch=master)](https://coveralls.io/github/xyluet/tiny?branch=master)
[![codecov](https://codecov.io/gh/xyluet/tiny/branch/master/graph/badge.svg)](https://codecov.io/gh/xyluet/tiny)




## Install

```shell
npm install @xyluet/tiny
```

## Usage

```js
const tiny = require(`@xyluet/tiny`);

tiny(`So much space!`); // "Somuchspace!"
tiny(123); // will throw Error

```
