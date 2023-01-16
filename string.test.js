import { capitalize, toTitleCase, reverseString, caesarCipher } from './strings.js'

test('capitalize a single-word string', () => {
    expect(capitalize('hello')).toBe('Hello');
});

test('capitalize a sentence string', () => {
    expect(toTitleCase('hello world!')).toBe('Hello World!')
})

test('capitalize a single-word string', () => {
    expect(toTitleCase('hubris')).toBe('Hubris')
})

test('reverse a single-word string', () => {
    expect(reverseString('hello')).toBe('olleh')
})

test('caesar cipher encodes a single-word string', () => {
    expect(caesarCipher('hello', 1)).toBe('ifmmp')
})

test('caesar cipher wraps z with small encoding offset', () => {
    expect(caesarCipher('z', 2)).toBe('b')
})

test('caesar cipher wraps z with small encoding offset', () => {
    expect(caesarCipher('Z', 2)).toBe('B')
})

test('caesar cipher wraps z with large encoding offset', () => {
    expect(caesarCipher('z', 25)).toBe('y')
})

test('caesar cipher wraps z with large encoding offset', () => {
    expect(caesarCipher('Z', 25)).toBe('Y')
})

test ('caesar cipher wraps a word with capitals and lower case', () => {
    expect(caesarCipher('Hello World', 5)).toBe('Mjqqt Btwqi')
})