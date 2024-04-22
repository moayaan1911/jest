/** @format */

import { IAuthData } from './interfaces/authData';

export function product(a: number, b: number): number {
  return a * b;
}

export function authenticateUser(
  username: string,
  password: string
): IAuthData {
  const authStatus = username === 'developer' && password === 'dev';
  return {
    usernameToLower: username.toLowerCase(),
    usernameToCharacters: username.split(''),
    userDetails: {
      name: 'moayaan',
      age: 21,
    },
    isAuthenticated: authStatus,
  };
}
