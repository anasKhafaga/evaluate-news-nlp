import {  checkForName } from '../src/client/js/nameChecker';

describe('Testing the nameChecker functionality', () => {
  test('Testing the checkForName() function', () => {
    const text = 'Anas';
    const expectedValue = 'It works';
    expect(checkForName(text, true)).toEqual(expectedValue);
  });
});
