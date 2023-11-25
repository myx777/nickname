// app.test.js data-driven test
import Validator from '../app';

describe('Validator', () => {
  const testCases = [
    { username: 'bkajsdbj', expectedResult: true },
    { username: 'user123_name', expectedResult: false },
    { username: 'user12389name', expectedResult: false },
    { username: '1username', expectedResult: false },
    { username: 'username1', expectedResult: false },
    { username: 'user@name', expectedResult: false },
    { username: 'U-se5r_Na4mE', expectedResult: true },
    // можно добавить еще тестовые случаи, при необходимости
  ];

  testCases.forEach(({ username, expectedResult }) => {
    test(`username: ${username} should return ${expectedResult}`, () => {
      const validator = new Validator(username);

      expect(validator.validateUsername()).toBe(expectedResult);
    });
  });
});
