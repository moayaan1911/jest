/** @format */

import {
  authenticateUser,
  product,
  UsernameToLowercase,
} from '../app/BasicUtils';

describe('BasicUtils test suite', () => {
  test.each([
    [3, 2, 6],
    [0, 7, 0],
    [3, 4, 12],
  ])('returns the product of %i and %i', (a, b, expected) => {
    const result = product(a, b);
    expect(result).toBe(expected);
  });
  describe('Authentication test suite', () => {
    test('authenticates users', () => {
      const user = authenticateUser('developer', 'dev');
      expect(user.isAuthenticated).toBe(true);
      expect(user.usernameToLower).toBe('developer');
      expect(user.usernameToCharacters).toEqual([
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
      ]);
      expect(user.usernameToCharacters).toContain('e');
      expect(user.userDetails).toEqual({ name: 'moayaan', age: 21 });
    });
  });

  describe('usernameToLowerCase test suite', () => {
    let instance: UsernameToLowercase;
    beforeEach(() => {
      console.log('Class initialization here');
      instance = new UsernameToLowercase();
    });

    afterEach(() => {
      console.log('After each test');
    });

    test('returns the lowercase of a valid username', () => {
      const result = instance.toLower('DEVELOPER');
      expect(result).toBe('developer');
    });

    test('to throw an error if empty string', () => {
      expect(() => instance.toLower('')).toThrow();
    });
  });
});
