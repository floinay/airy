import {singleIndentVar} from './single-indent-var';
import {DEFAULT_VALUES_MAP} from './indents.providers';

describe('single-indent-var', () => {
  it('valid-string-returns', () => {
    expect(singleIndentVar('m')).toBe(`var(--indent-m, ${DEFAULT_VALUES_MAP.m})`);
  })
});
