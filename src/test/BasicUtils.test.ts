/** @format */

import { product } from '../app/BasicUtils';

describe('BasicUtils test suite', () => {
  test('returns the product of 3 and 2 ', () => {
    const result = product(3, 2);
    expect(result).toBe(6);
  });
});
