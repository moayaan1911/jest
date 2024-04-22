/** @format */

import { authenticateUser, product } from '../app/BasicUtils';

describe('BasicUtils test suite', () => {
  test('returns the product of 3 and 2 ', () => {
    const result = product(3, 2);
    expect(result).toBe(6);
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
});
