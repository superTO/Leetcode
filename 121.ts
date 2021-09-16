/**
 * 121. Best Time to Buy and Sell Stock
 * 
 * 1 <= prices.length <= 105
 * 0 <= prices[i] <= 104
*/
function maxProfit(prices: number[]): number {
    let min = Number.MAX_SAFE_INTEGER
    let max = 0

    prices.forEach(price => {
        min = Math.min(min, price);
        max = Math.max(max, price - min);
    });

    return max
    
};

/** TLE */
// function maxProfit(prices: number[]): number {
//     if(prices.length === 1){
//         return 0;
//     }

//     const tempArr = prices.slice().sort((a, b) => b-a);
//     if(tempArr.toString() === prices.toString()){
//         return 0;
//     }

//     let profit = 0;

//     for(let i = 0; i < prices.length; i++){
//         const forloop = prices.slice(i + 1).filter(x => x > prices[i]);

//         // console.log('slice: ' + prices.slice(i + 1));
//         // console.log('forloop: ' + forloop);
//         // console.log('value: ' + trueArr[i]);
//         for(let j = 0; j < forloop.length; j++){
//             if (forloop[j] - prices[i] > profit){
//                 profit = forloop[j] - prices[i];
//                 // console.log('!!profit: ' + profit);
//             }
//         }
//     }

//     return profit;
// };


/** TLE */
// function maxProfit(prices: number[]): number {
//     if(prices.length === 1){
//         return 0;
//     }

//     const tempArr = prices.slice().sort((a, b) => b-a);
//     if(tempArr.toString() === prices.toString()){
//         return 0;
//     }

//     let profit = 0;
//     for(let i = prices.length - 1; i >= 0; i--){
//         for(let j = i - 1; j >= 0; j--){
//             console.log('i: ' + i);
//             console.log('j: ' + j);

//             const value = prices[i] - prices[j];
//             profit = value > profit ? value : profit ;
//         }
//     }
    
//     return profit
// };

/** test case */
console.log(maxProfit([7,4,5,4,6,3,1])); // 2
console.log(maxProfit([7,3,5,3,6,4,1])); // 3
console.log(maxProfit([7,1,5,3,6,4,1])); // 5
console.log(maxProfit([7,1,5,3,6,4,8])); // 7
console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([1, 2])); // 1
console.log(maxProfit([2,1,2,0,1])); // 1 
console.log(maxProfit([7,6,4,3,1])); // 0
console.log(maxProfit([1])); // 0
console.log(maxProfit([1,1,1,1,1])); // 0