import { decode83, encode83 } from '../utils/blurhash/base83';

describe('base83', () => {
  it('decodes single base83 characters correctly', () => {
    expect(decode83('0')).toBe(0);
    expect(decode83('1')).toBe(1);
    expect(decode83('A')).toBe(10);
    expect(decode83('a')).toBe(36);
    expect(decode83('~')).toBe(82);
  });

  it('decodes multi-character strings correctly', () => {
    expect(decode83('00')).toBe(0);
    expect(decode83('01')).toBe(1);
    expect(decode83('10')).toBe(83);
    expect(decode83('L6')).toBe(21 * 83 + 6);
  });

  it('encodes and decodes symmetrically', () => {
    const testValues = [0, 1, 82, 83, 500, 123456];
    for (const val of testValues) {
      const encoded = encode83(val, 4);
      const decoded = decode83(encoded);
      expect(decoded).toBe(val);
    }
  });

  it('handles out-of-bounds characters gracefully', () => {
    expect(decode83('\0')).toBe(-1);
    expect(decode83('\u00ff')).toBe(-1);
  });
});
