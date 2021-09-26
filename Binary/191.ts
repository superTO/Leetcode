/** 191. Number of 1 Bits */
function hammingWeight(n: number): number {
    return n.toString(2).split('').filter(x => x !== '0').length;
};