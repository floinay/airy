import {DEFAULT_VALUES_MAP, indentVar} from './indent-var';

describe('indent-var', () => {
  it('single-size', () => {
    expect(indentVar('s')).toBe(`var(--indent-s, ${DEFAULT_VALUES_MAP.s})`);
  })

  it('size-none', () => {
    expect(indentVar('none')).toBe(`0`);
  });

  it('size-0', () => {
    expect(indentVar('0')).toBe('0');
  })

  it('size-auto', () => {
    expect(indentVar('auto')).toBe('auto');
  })

  it('default-replace', () => {
    expect(indentVar('default')).toBe(`var(--indent-m, ${DEFAULT_VALUES_MAP.m})`);
  });

  it('empty-string-replace-to-default', () => {
    expect(indentVar('')).toBe(`var(--indent-m, ${DEFAULT_VALUES_MAP.m})`);
  });

  it('negative', () => {
    expect(indentVar('-s')).toBe(`calc(-1 * var(--indent-s, ${DEFAULT_VALUES_MAP.s}))`);
  });

  it('double', () => {
    expect(indentVar('s m')).toBe(`var(--indent-s, ${DEFAULT_VALUES_MAP.s}) var(--indent-m, ${DEFAULT_VALUES_MAP.m})`);
  });

  it('triple', () => {
    expect(indentVar('s m xs')).toBe(`var(--indent-s, ${DEFAULT_VALUES_MAP.s}) var(--indent-m, ${DEFAULT_VALUES_MAP.m}) var(--indent-xs, ${DEFAULT_VALUES_MAP.xs})`);
  });

  it('triple', () => {
    expect(indentVar('s m xs')).toBe(`var(--indent-s, ${DEFAULT_VALUES_MAP.s}) var(--indent-m, ${DEFAULT_VALUES_MAP.m}) var(--indent-xs, ${DEFAULT_VALUES_MAP.xs})`);
  });

  it('quadruple', () => {
    expect(indentVar('s m xs xxs')).toBe(`var(--indent-s, ${DEFAULT_VALUES_MAP.s}) var(--indent-m, ${DEFAULT_VALUES_MAP.m}) var(--indent-xs, ${DEFAULT_VALUES_MAP.xs}) var(--indent-xxs, ${DEFAULT_VALUES_MAP.xxs})`);
  })
})
