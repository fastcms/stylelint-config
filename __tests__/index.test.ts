import getLintMessage from '../util/get-lint-messge';

const filesRoot = '__files__';

describe('Test Stylelint Config', () => {
  it('no-file-to-test', async () => {
    await expect(getLintMessage(`${filesRoot}/no-file-to-test.css`)).rejects.toThrow(Error);
  });

  it('css:function-url-quotes', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/function-url-quotes.css`);
    expect(lintResult.warnings[0].rule).toEqual('function-url-quotes');
  });

  it('css:no-ignored-properties', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/no-ignored-properties.css`);
    expect(lintResult.warnings[0].rule).toEqual('plugin/declaration-block-no-ignored-properties');
  });

  it('css:multicolumn', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/multicolumn.css`);
    expect(lintResult.warnings[0].rule).toEqual('plugin/no-unsupported-browser-features');
  });

  it('css:css-modules', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/index.module.css`);
    expect(lintResult.warnings[0].rule).toEqual('selector-class-pattern');
  });

  it('scss:order', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/order.scss`);
    // TODO: order/order rule is broken here, should be fix later.
    expect(lintResult.warnings.length).toEqual(0);
  });

  it('less:property-order', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/property-order.less`);
    expect(lintResult.warnings[0].rule).toEqual('order/properties-order');
  });

  it('wxss:miniprogram', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/miniprogram.wxss`);
    expect(lintResult.warnings[0].rule).toEqual('selector-type-no-unknown');
  });

  it('css-in-js:property-order', async () => {
    const lintResult = await getLintMessage(`${filesRoot}/HelloWorld.tsx`);
    expect(lintResult.warnings[0].rule).toEqual('order/properties-order');
  });
});
