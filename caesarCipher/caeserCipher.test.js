import encyptCaesar from "./caesarCipher"

test('pesto should be "qftup" ', () => {
    expect(encyptCaesar('pesto')).toBe('qftup')
})

test('alcatraz should be "bmdbusba" ', () => {
    expect(encyptCaesar('alcatraz')).toBe('bmdbusba')
})