const {
    returnTwo,
    greeting,
    add,
    subtract,
    multiply,
    divide
} = require('./functions.js')


test('should return 2', () => {
    expect(returnTwo()).toBe(2)
})

describe('greeting test', () => {
    test('should be Hello, James', () => {
        let greetTest = greeting('James')
        expect(greetTest).toBe('Hello, James.')
    })
    test('should be Hello, Jill', () => {
        let greetTest = greeting('Jill')
        expect(greetTest).toBe('Hello, Jill.')
    })
})

describe('Math Functions', () => {
    it('should be 3', () => {
        let addTest = add(1, 2)
        expect(addTest).toEqual(3)
    })
    it('should be 14', () => {
        let addTest = add(5, 9)
        expect(addTest).toEqual(14)
    })
    it('should be 1', () => {
        let subTest = subtract(2, 1)
        expect(subTest).toEqual(1)
    })
    it('should be 4', () => {
        let subTest = subtract(9, 5)
        expect(subTest).toEqual(4)
    })
    it('should be 2', () => {
        let mulTest = multiply(1, 2)
        expect(mulTest).toEqual(2)
    })
    it('should be 45', () => {
        let mulTest = multiply(5, 9)
        expect(mulTest).toEqual(45)
    })
    it('should be 2', () => {
        let divTest = divide(2, 1)
        expect(divTest).toEqual(2)
    })
    it('should be 5', () => {
        let divTest = divide(45, 9)
        expect(divTest).toEqual(5)
    })
})