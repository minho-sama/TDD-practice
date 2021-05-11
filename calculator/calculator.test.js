import calculator from './calculator';

test('1 + 4 equals 5', () => {
    expect(calculator(1, 4, '+')).toBe(5)
})

test('2 - 8 equals -6', () => {
    expect(calculator(2, 8, '-')).toBe(-6)
})

test('3 * 7 equals 21', () => {
    expect(calculator(3, 7, '*')).toBe(21)
})

test('10 / 0 results in error', () => {
    expect(calculator(10, 0, '/')).toBe('error')
})

test('4 / 2 equals 2', () => {
    expect(calculator(4, 2, '/')).toBe(2)
})