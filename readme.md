# @fastcms/stylelint-config

![NPM Package Version](https://img.shields.io/npm/v/@fastcms/stylelint-config) ![Peer Stylelint Version](https://img.shields.io/npm/dependency-version/@fastcms/stylelint-config/peer/stylelint) ![Node.js Version](https://img.shields.io/node/v/@fastcms/stylelint-config) ![Dependencies](https://img.shields.io/david/fastcms/stylelint-config) ![Dev Dependencies](https://img.shields.io/david/dev/fastcms/stylelint-config) ![NPM Weekly Downloads](https://img.shields.io/npm/dw/@fastcms/stylelint-config) ![GitHub CI Workflow](https://github.com/fastcms/stylelint-config/actions/workflows/main.yml/badge.svg)

> Shared @stylelint configs for web development projects of @fastcms.

## Installation

Use npx to install peerdeps automatically or install peerDependencies and optionalDependencies with npm/yarn manually.

```bash
# Install using npm
$ npm info "@fastcms/stylelint-config" peerDependencies optionalDependencies
$ npx install-peerdeps --dev @fastcms/stylelint-config

# Install using yarn
$ yarn add --dev @fastcms/stylelint-config stylelint
```

## Usage

After installation, add following contents to your `.stylelintrc.json` or the `stylelint` entry of `package.json` file.

### Default Project

```json
{
  "extends": "@fastcms"
}
```

This stylelint config is used for web projects.

### MiniProgram Project

```json
{
  "extends": "@fastcms/stylelint-config/miniprogram"
}
```

This stylelint config is used for wechat miniprogram projects.

## Stylelint Scripts

Add stylelint scripts to `package.json`, then run stylelint with `yarn run stylelint` manually, or integrate with GitHub Actions.

```json
{
  "scripts": {
    "stylelint": "stylelint --cache --aei \"**/*.{css,scss,sass,less,wxss}\"",
    "stylelint:fix": "stylelint --cache --fix --aei \"**/*.{css,scss,sass,less,wxss}\""
  }
}
```

## License

The codebase and documentation in this repository are released under the [MIT License](./license)
