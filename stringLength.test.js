const strLength = require('./stringLength.js');


test('returns lengthof string', () => {
    expect(strLength('hello')).toBe(5);
  });

test ('checks if string is valid for test', () => {
    expect(strLength('')).toBe('Not valid string');
});

test ('checks if string is valid for test', () => {
    expect(strLength('hello hello hello')).toBe('Not valid string');
});