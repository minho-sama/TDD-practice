import reverseString from './reverseString';

test('jerry is converted to yrrej', () => {
    expect(reverseString('jerry')).toBe('yrrej')
})

test('Tom is converted to moT', () => {
    expect(reverseString('Tom')).toBe('moT')
})