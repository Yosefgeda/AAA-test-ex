const Calculator = require('./calculator.js');

describe ('check calculator', () => {
    test('adds two numbers', () => {
        expect(Calculator.add(2,4)).toBe(6);
    });

    test('adds two numbers', () => {
        expect(Calculator.add(5,10)).toBe(15);
    });
    test('adds two numbers', () => {
        expect(Calculator.add(100,5)).toBe(105);
    });

    test('subtracts two numbers', () => {
    expect(Calculator.subtract(4,2)).toBe(2);
    });
    test('subtracts two numbers', () => {
        expect(Calculator.subtract(50,20)).toBe(30);
    });
    test('subtracts two numbers', () => {
        expect(Calculator.subtract(40,20)).toBe(20);
    });

    test('divides two numbers', () => {
    expect(Calculator.divide(10,2)).toBe(5);
    });
    test('divides two numbers', () => {
        expect(Calculator.divide(10,5)).toBe(2);
    });
    test('divides two numbers', () => {
        expect(Calculator.divide(10,10)).toBe(1);
    });

    test('multiplies two numbers', () => {
    expect(Calculator.multiply(2,4)).toBe(8);
    });
    test('multiplies two numbers', () => {
        expect(Calculator.multiply(2,2)).toBe(4);
    });
    test('multiplies two numbers', () => {
        expect(Calculator.multiply(4,4)).toBe(16);
    });
    
});

