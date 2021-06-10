const doiuse = require('doiuse');
const stylelint = require('stylelint');
const Result = require('postcss/lib/result');
const pick = require('../util/pick');

const ruleName = 'plugin/no-unsupported-browser-features';
const messages = stylelint.utils.ruleMessages(ruleName, {
  rejected: (details) => `Unexpected browser feature ${details}`,
});

const optionsSchema = {
  browsers: [(v) => typeof v === 'string'],
  ignore: [(v) => typeof v === 'string'],
  ignorePartialSupport: (v) => typeof v === 'boolean',
};

/**
 * Clean warning text from doiuse result.
 *
 * @param {string} warningText - Warning text from doiuse result.
 * @param {boolean} ignorePartialSupport - Ignore partial support.
 * @returns {string} Cleaned warning text.
 */
function cleanWarningText(warningText, ignorePartialSupport) {
  const featureIdIndex = warningText.lastIndexOf('(');
  const featureId = warningText.slice(featureIdIndex, warningText.length).replace(/\(|\)/g, '"');
  const browserSupportStartIndex = warningText.includes('not')
    ? warningText.indexOf('not')
    : warningText.indexOf('only');

  let browserSupport = warningText
    .slice(browserSupportStartIndex, featureIdIndex - 1)
    .replace(/[():]/g, '');

  const andIndex = browserSupport.indexOf(' and');

  if (ignorePartialSupport && andIndex !== -1) {
    browserSupport = browserSupport.slice(0, andIndex);
  }

  const cleanedWarningText = `${featureId} is ${browserSupport}`;

  return cleanedWarningText;
}

module.exports = stylelint.createPlugin(ruleName, (_on, options) => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {
      actual: options,
      possible: optionsSchema,
      optional: true,
    });

    if (!validOptions) {
      return;
    }

    let usageInfo;
    const doiuseResult = new Result();
    const doiuseOptions = pick(options, Object.keys(optionsSchema));
    const ignorePartialSupport = options ? options.ignorePartialSupport : false;

    doiuseOptions.onFeatureUsage = (info) => {
      usageInfo = info;
    };

    doiuse(doiuseOptions).postcss(root, doiuseResult);

    doiuseResult.warnings().forEach((doiuseWarning) => {
      if (ignorePartialSupport && usageInfo.featureData.partial && !usageInfo.featureData.missing) {
        return;
      }

      stylelint.utils.report({
        ruleName,
        result,
        message: messages.rejected(cleanWarningText(doiuseWarning.text, ignorePartialSupport)),
        node: doiuseWarning.node,
        line: doiuseWarning.line,
        column: doiuseWarning.column,
      });
    });
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
