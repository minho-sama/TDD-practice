import analyze from './analyze'

test('[1, 2, 3] should return {average: 2, length: 3, min: 1, max: 3}', () => {
    expect(analyze([1,2,3])).toEqual(
        {
        average: 2,
        length: 3,
        min: 1,
        max: 3
        }
    )
})

test('[0, 0, 0] should return {average: 0, length: 3, min: 0, max: 0}', () => {
    expect(analyze([0,0,0])).toEqual(
        {
        average: 0,
        length: 3,
        min: 0,
        max: 0
        }
    )
})

