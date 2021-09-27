/** 190. Reverse Bits */

/**
 * const elements = ['Fire', 'Air', 'Water'];
 * console.log(elements.join());
 * // expected output: "Fire,Air,Water"
 * console.log(elements.toString());
 * // expected output: "Fire,Air,Water"
 */

/** n is 32 bits unsigned integer */
function reverseBits(n: number = 0b00): number {
    /** Solution 1 */
    return parseInt(n.toString(2).padStart(32, '0').split('').reverse().join(''), 2);


    /** Solution 2 */
    // 1、创建结果变量（无符号整型）
    let res = 0;

    // 2、for循环遍历32位二进制的每一位：
    for (let i = 0; i < 32; i++) {
        // 2.1、先将结果变量左移一位，空出一个最低位
        res <<= 1;

        // 2.2、如果n&1为1的话，说明此时n最低位为1，要把1加入到结果变量的最低位，否则为0，不加
        if ((n & 1) === 1) {
            res = res + 1;
        }

        // 2.3、n右移一位，继续判断高位
        n >>>= 1;
    }

    //   3、循环结束后，返回结果变量
    return res >>> 0;


    /** Solution 3 */
    let bit_32 = [];
    // console.log(n&1);
    for (let i = 0; i < 32; ++i) {
        let bit = n & 1;
        bit_32[i] = bit;
        n = n >> 1;
    }

    return parseInt(bit_32.join(''), 2);
};


/** test case */
/** Parameter adds prefix "0b" represent this number is binary. (ES6) */

console.log(reverseBits(0b00000010100101000001111010011100)); // 964176192
console.log(reverseBits(0b11111111111111111111111111111101)); // 3221225471


/**
 * Newer versions of JavaScript -- specifically ECMAScript 6 -- have added support for 
 * binary (prefix 0b), octal (prefix 0o) and hexadecimal (prefix: 0x) numeric literals:
 * 
 * var bin = 0b1111;    // bin will be set to 15
 * var oct = 0o17;      // oct will be set to 15
 * var oxx = 017;       // oxx will be set to 15
 * var hex = 0xF;       // hex will be set to 15
 * // note: bB oO xX are all valid
 */