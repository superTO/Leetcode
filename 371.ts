/** 371. Sum of Two Integers */
function getSum(a: number, b: number): number {
    if(a === 0){
        return b;
    }

    if( b === 0){
        return a;
    }

    let temp;
    let carry = b;
    // a+b的時候, 都是1的地方要進位, 0 1 -> 1
    while(carry !== 0){
        temp = a&carry;
        a = a ^ carry;
        carry = temp<<1;
    }
    return a;
};

/** test case */
console.log(getSum(2,3));
console.log(getSum(1,2));
console.log(getSum(-1,2));
console.log(getSum(-1,-2));

/**
 * // 2+3
 * a = 010
 * b = 011
 * 
 * a = 001
 * carry = 100
 * 
 * temp = 000
 * a = 101
 * 
 * // 1+2
 * 
 * a = 001
 * b = 010
 * 
 * temp = 000
 * a = 011
 * 
 * // -1+(-2)
 * 
 * a = 1111
 * b = 1110
 * 
 * temp = 1110
 * a = 0001
 * carry = 11100
 * 
 * temp = 00000
 * a = 11101
 * 
 */