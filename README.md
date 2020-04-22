
# palx-cli
[![package version](https://img.shields.io/npm/v/palx-cli.svg?style=flat-square)](https://npmjs.org/package/palx-cli)
[![package downloads](https://img.shields.io/npm/dm/palx-cli.svg?style=flat-square)](https://npmjs.org/package/palx-cli)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/palx-cli.svg?style=flat-square)](https://npmjs.org/package/palx-cli)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Use [Palx](https://palx.jxnblk.com/) from your CLI

## Table of Contents

- [Usage](#usage)
- [Install](#install)
- [Contribute](#contribute)
- [License](#License)


## Usage

Using the CLI:

```sh
$ npx palx-cli "#13AFE5"
# {
#  "base": "#13AFE5",
#  "black": "#364145",
#  "gray": [...

# Write to file
$ npx palx-cli "#13AFE5" > theme.json

# OR if installed globally
$ palx "#13AFE5"
```


## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com).

```sh
$ npm -g install palx-cli
$ # OR
$ yarn global add palx-cli
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT
