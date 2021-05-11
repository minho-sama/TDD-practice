import capString from './capString'

test('tom is converted to Tom', () => {
    expect(capString('tom')).toBe('Tom')
}) 