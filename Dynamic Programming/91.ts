/** 91. Decode Ways */
function numDecodings(s: string): number {
    if(s[0] === '0') return 0;
    const dp = new Array(s.length + 1).fill(0);
    dp[0] = 1;
    for(let i = 1; i <= s.length; i++){
        if (s[i-1] !== '0') dp[i] = dp[i-1];
        // if(s[i-1] !== '0' && i >= 2 && s.slice(i-2, i) <= '26' && s.slice(i-2, i) >= '10') dp[i] = dp[i-1] + dp[i-2]
        if(i >= 2 && s.slice(i-2, i) <= '26' && s.slice(i-2, i) >= '10') dp[i] += dp[i-2];
    }
    // console.log(dp);
    return dp[s.length];
}


// function numDecodings(s: string): number {
//     const dp: number[] = new Array(s.length).fill(0);
//     dp[0] = 1;
//     // s 在這已經+1了
//     s = ' ' + s;
//     for(let i = 1; i < s.length; i++){
//         if(s[i] === '0'){
//             if(s[i-1] !== '1' && s[i-1] !== '2') return 0;

//             dp[i] = dp[i-2];
//         } else if (s[i-1] === '1'){
//             dp[i] = dp[i-1] + dp[i-2];
//         } else if(s[i-1] === '2' && s[i] < '7'){
//             dp[i] = dp[i-1] + dp[i-2];
//         } else {
//             dp[i] = dp[i-1];
//         }
//     }
//     // console.log(dp);
//     // s.length -1 // 扣掉' '
//     return dp[s.length - 1];
// };

/** 第一次解題想法
 * 1. 當s全都 <3 的時候 dp[i] = dp[i-1] + dp[i-2]
 * 2. 排除 > 6 & == 0 case
 * 
 * 問題: 沒考慮到9, 19, 99 這類型
 */

/** 正確解題想法
 * 1. 兩個一組, 當 >= 10 && <= 26 ==> dp[i] = dp[i-1] + dp[i-2] (case: i>=2)
 * 2. 如果 s[i-1] !== 0 ==> dp[i] = dp[i-1]
 */

/** test case */
console.log(numDecodings('12')); //2
console.log(numDecodings('226')); //3
console.log(numDecodings('0')); //0
console.log(numDecodings('06')); //0


console.log(numDecodings('622')); // 2
console.log(numDecodings('262')); // 2
console.log(numDecodings('9')); //1
console.log(numDecodings('99')); //1
console.log(numDecodings('60')); //0
console.log(numDecodings('026')); //0
console.log(numDecodings('260')); //0
console.log(numDecodings('206')); //2
console.log(numDecodings('276')); //1
console.log(numDecodings('726')); //2
console.log(numDecodings('2222')); //5  [2 2 2 2], [22,2,2], [2,22,2], [2,2,22], [22,22]
console.log(numDecodings('7222')); //3  [7 2 2 2], [7,22,2], [7,2,22]
console.log(numDecodings('2227')); //3  [7 2 2 2], [7,22,2], [7,2,22]
console.log(numDecodings('2722')); //2  [2 7 2 2], [2,7,22]
console.log(numDecodings('2772')); //1  [2 7 7 2]

