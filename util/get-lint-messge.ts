import fs from 'fs';
import type { LintResult } from 'stylelint';
import { lint } from 'stylelint';

import config from '../.stylelintrc.json';

/**
 * Get first lint message of lint result.
 *
 * @param {string} fileToLint File to lint with ESLint
 * @returns {Promise<LintResult>} First lint message of lint result
 * @throws Get lint message error
 */
async function getLintMessage(fileToLint: string): Promise<LintResult> {
  try {
    const linterResult = await lint({
      code: fs.readFileSync(`./${fileToLint}`, 'utf-8'),
      config,
    });

    return JSON.parse(linterResult.output)[0] as LintResult;
  } catch (error: any) {
    throw new Error(error.message || 'Get lint message error');
  }
}

export default getLintMessage;
