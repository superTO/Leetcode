/** 322. Coin Change */

/**
 *  F(amount) = MinCoins
 * // amount - conins裡面某的數 = MinCoins-1
 * => F(amount-coins[i]) = MinCoins - 1
 * ==> F(amount) = F(amount-coins[i]) + 1
 * ===> F(amount) = F(amount-coins[i]-coin[i]) + 1 + 1
 */

/** Solution Recursive (Top-Down): */
// function coinChange(coins: number[], amount: number): number {
//     if(coins.find(x => amount === x)){
//         return 1;
//     }

//     return change(coins, amount, new Array(amount).fill(0));
// };

// function change(coins: number[], rem: number, count: number[]): number{
//     if (rem < 0) return -1;
//     if (rem === 0) return 0;
//     if (count[rem - 1] != 0) return count[rem - 1];
//     let min = Number.MAX_SAFE_INTEGER;
//     for(let coin of coins){
//         let res = change(coins, rem - coin, count);
//         if(res >= 0 && res < min){
//             min = res + 1;
//         }
//     }
//     count[rem - 1] = (min === Number.MAX_SAFE_INTEGER) ? -1 : min;
//     return count[rem - 1]
// }

/** Solution Iteration(bottom-up): */
// function coinChange(coins: number[], amount: number): number {
//     if(amount === 0){
//         return 0;
//     }
//     if(coins.find(x => amount === x)){
//         return 1;
//     }

//     let sum = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
//     sum[0] = 0;
//     // for(let i = 0; i <= amount; i++){
//     //     for(let j = 0; j < coins.length; j++){
//     //         if(i >= coins[j]){
//     //             sum[i] = Math.min(sum[i], sum[i - coins[j]] + 1)
//     //         }
//     //     }
//     // }
//     /** refactor */
//     for(let coin of coins){
//         // is start from coin
//         for(let i = coin; i <= amount; i++){
//             sum[i] = Math.min(sum[i], sum[i - coin] + 1)
//         }
//     }
//     return sum[amount] === Number.MAX_SAFE_INTEGER ? -1 : sum[amount];
// };




/** Practice */
// function coinChange(coins: number[], amount: number): number {
//     return Change(coins, amount, new Array(amount).fill(0));
// }

// function Change(coins: number[], rem: number, count: number[]): number{
//     if(rem === 0) return 0;
//     if(rem < 0) return -1;
//     if(count[rem - 1] !== 0) return count[rem-1];
//     let sum = Number.MAX_SAFE_INTEGER;
//     for(let coin of coins){
//         let res = Change(coins, rem - coin, count);
//         if(res >= 0 && res < sum){
//             sum = res + 1;
//         }
//     }
//     count[rem - 1] = sum === Number.MAX_SAFE_INTEGER ? -1 : sum;
//     return count[rem-1];
// }

function coinChange(coins: number[], amount: number): number {
    if(amount === 0) return 0;
    if(coins.find(x => x === amount)) return 1;

    const count = new Array(amount + 1).fill(Number.MAX_SAFE_INTEGER);
    count[0] = 0;
    for(let coin of coins){
        // always i >= coin
        for(let i = coin; i <= amount; i++){
            count[i] = Math.min(count[i], count[i - coin] + 1)
        }
    }
    return count[amount] === Number.MAX_SAFE_INTEGER ? -1 : count[amount];
}


/** test case */

console.log(coinChange([1,2,3], 11)); // 4
console.log(coinChange([1,2,5], 11)); // 3
console.log(coinChange([1,2,5], 8)); // 3
console.log(coinChange([1,2], 2)); // 1
console.log(coinChange([2], 3)); // -1
console.log(coinChange([1], 0)); // 0
console.log(coinChange([1], 1)); // 1
console.log(coinChange([1], 2)); // 2
console.log(coinChange([186,419,83,408], 6249)); // 20
