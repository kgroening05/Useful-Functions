import { sumArray, avgArray, analyzeArray } from './arrays.js'

test('sum an array of numbers', () => {
    expect(sumArray([1,2,3])).toBe(6)
})

test('average an array of numbers', () => {
    expect(avgArray([2,4,6,8])).toBe(5)
})

test('check an object is returned', () => {
    expect(typeof analyzeArray([1,8,3,4,2,6])).toBe('object')
})

test('check object containts correct average', () => {
    expect(analyzeArray([2,4,6,8]).average).toBe(5)
})

test('check object containts correct minimum', () => {
    expect(analyzeArray([2,4,6,8]).min).toBe(2)
})

test('check object containts correct maximum', () => {
    expect(analyzeArray([2,4,6,8]).max).toBe(8)
})

test('check object containts correct length', () => {
    expect(analyzeArray([2,4,6,8]).length).toBe(4)
})