import { mult, splitIntoWords, sum } from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
a = 1;
b = 2;
c = 3;    
})

test('sum should be correct', () => {
    //data

    //action
    const result = sum(a, b);
    const result1 = sum(b, c);
    //expect result
    expect(result).toBe(3);
    expect(result1).toBe(5);
})

test('mult should be correct', () => {
    //data

    //action
    const result = mult(a, b);
    const result1 = mult(b, c);
    //expect result
    expect(result).toBe(2);
    expect(result1).toBe(6);
})

test('split into words must be correct', () => {
    let sent = 'Hello my friend';
    let sent1 = 'JS - is a programm lenguage';

    const result = splitIntoWords(sent);
    const result1 = splitIntoWords(sent1);

    expect(result.length).toBe(3);
    expect(result[0]).toBe("hello");
    expect(result[1]).toBe("my");
    expect(result[2]).toBe("friend");

    expect(result1.length).toBe(5);
    expect(result1[0]).toBe("js");
    expect(result1[1]).toBe("is");
    expect(result1[2]).toBe("a");
    expect(result1[3]).toBe("programm");
    expect(result1[4]).toBe("lenguage");

})