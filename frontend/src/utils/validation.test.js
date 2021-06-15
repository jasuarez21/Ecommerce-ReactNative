import { hasNameError, hasEmailError, hasPasswordError, hasPersonalError } from './validation';

describe('Given a hasNameError function ', () => {
  describe('When is invoke with name.length < 2', () => {
    test('Then will return true', () => {
      const name = 'x';
      const result = hasNameError(name);

      expect(result).toBe(true);
    });
  });
});

describe('Given a hasEmailError function ', () => {
  describe('When is invoke without @', () => {
    test('Then will return true', () => {
      const email = 'josep.com';
      const result = hasEmailError(email);

      expect(result).toBe(true);
    });
  });
});

describe('Given a hasPasswordError function ', () => {
  describe('When is invoke with length of < 8', () => {
    test('Then will return true', () => {
      const psw = '1234';
      const result = hasPasswordError(psw);
      expect(result).toBe(true);
    });
  });
  describe('When is invoke with name.length < 2', () => {
    test('Then will return true', () => {
      const name = 'x';
      const result = hasPersonalError(name);

      expect(result).toBe(true);
    });
  });
});