/** 338. Counting Bits */
function countBits(n: number): number[] {
    let ans = new Array(n+1);

    ans[0] = 0;

    for(let i = 1; i < n+1; ++i){
        // ans[i] = ans[i/2] + i%2;
        ans[i] = ans[i>>1] + i%2;
    }

    return ans;
};


/** test case */

console.log(countBits(5));
console.log(countBits(2));