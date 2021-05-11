// const object = analyze([1,8,3,4,2,6]);

// object == {
//   average: 4,
//   min: 1,
//   max: 8,
//   length: 6
// };

const analyze = (array) => {

    return ({
        average: average(array),
        length: array.length,
        min: Math.min(...array),
        max: Math.max(...array)
    })
}

const average = (array) => {
    const sum = array.reduce((prev, curr) => {
        return prev + curr
    })
    return sum / array.length
}

export default analyze