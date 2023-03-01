test('Capitalizes first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});

const capitalize = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
};

