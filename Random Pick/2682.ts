/**2682. Find the Losers of the Circular Game */
//1 <= k <= n <= 50
function circularGameLosers(n: number, k: number): number[] {
    // 輪次
    let count = 1;
    let friend = new Array(n).fill(1);
    // 從第一個人開始
    friend[0] = 0;
    // console.log(friend);

    let ballPosition = 0;
    let flag = true;
    // 當 friend[ballPosition] = 0 時, 又被抽中 while 結束
    while(flag){
        ballPosition = (ballPosition+k*count)%n;
        friend[ballPosition] ? friend[ballPosition] = 0 : flag = false;
        // console.log(friend);
        ++count;
    }
    
    // 將沒拿到球的人找出來
    const ans: number[] = [];
    for(let i = 0; i < friend.length; i++){
        if(friend[i]){
            ans.push(i+1);
        }
    }
    return ans;
};


// test case
console.log(circularGameLosers(5,2))  // [4,5]
console.log(circularGameLosers(4,4))  // [2,3,4]
console.log(circularGameLosers(1,1))  // []
console.log(circularGameLosers(2,1))  // []
console.log(circularGameLosers(3,1))  // []
