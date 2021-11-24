#  [DEPRECATED] stylelint-config

![NPM Package Version](https://img.shields.io/npm/v/@fastcms/stylelint-config) ![Peer Stylelint Version](https://img.shields.io/npm/dependency-version/@fastcms/stylelint-config/peer/stylelint) ![Node.js Version](https://img.shields.io/node/v/@fastcms/stylelint-config) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![NPM Weekly Downloads](https://img.shields.io/npm/dw/@fastcms/stylelint-config) ![GitHub CI Workflow](https://github.com/fastcms/stylelint-config/actions/workflows/main.yml/badge.svg)

> Shared @stylelint configs for web development projects of @fastcms.

**Go to <https://github.com/fastcms/fastcms/tree/master/tools/stylelint-config> for latest version.**


## Installation

Use npx to install peerdeps automatically or install peerDependencies and optionalDependencies with npm/yarn manually.

```bash
# Install using npm
$ npm info "@fastcms/stylelint-config" peerDependencies optionalDependencies
$ npx install-peerdeps --dev @fastcms/stylelint-config

# Install using yarn
$ yarn add --dev @fastcms/stylelint-config postcss prettier stylelint
```

## Usage

After installation, add following contents to your `.stylelintrc.json` or the `stylelint` entry of `package.json` file.

```json
{
  "extends": "@fastcms"
}
```

This stylelint config is used for web or miniprogram projects.

## Stylelint Scripts

Add stylelint scripts to `package.json`, then run stylelint with `yarn run stylelint` manually, or integrate with GitHub Actions.

```json
{
  "scripts": {
    "stylelint": "stylelint --cache --aei \"**/*.{css,scss,less,wxss,jsx,tsx}\"",
    "stylelint:fix": "stylelint --cache --fix --aei \"**/*.{css,scss,less,wxss,jsx,tsx}\""
  }
}
```

## License

The codebase and documentation in this repository are released under the [MIT License](./license)
