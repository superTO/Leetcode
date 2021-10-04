/** 139. Word Break */
/** 可悲連題目都看不懂 */
/** 只要wordDict可以組成s就是true */
// function wordBreak(s: string, wordDict: string[]): boolean {
//     // BFS
//     let dict = new Set(wordDict);
//     let visited = new Array(s.length).fill(false);
//     let quene = [0];
//     while(quene.length !== 0){
//         const start = quene.shift();
//         if(visited[start]) continue;

//         for(let end = start + 1; end <= s.length; ++end){
//             if(!dict.has(s.slice(start, end))) continue;
//             if(end === s.length) return true;
//             quene.push(end);
//         }
//         // console.log(quene);

//         visited[start] = true;
//     }

//     return false;
// };

function wordBreak(s: string, dict: string[]): boolean {
    if (s == null || s.length === 0) {
        return true;
    }
    let n = s.length;
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true;

    let maxLength = 0;
    for (let t of dict) {
        maxLength = Math.max(maxLength, t.length);
    }

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= Math.max(0, i - maxLength) && !dp[i]; j--) {
            if (dp[j]) {
                if (dict.find(x => x === s.substring(j, i))) {
                    dp[i] = true;
                    // console.log('string: ' + s.substring(j, i));
                    // console.log('i: ' + i);
                    // console.log('j: ' + j);
                }
            }
        }

    }

    return dp[n];
}

/** Success */
// function wordBreak(s: string, dict: string[]): boolean {
//     const f = new Array(s.length + 1).fill(false);

//     f[0] = true;
//     for (let i = 1; i <= s.length; i++) {
//         for (let j = 0; j < i; j++) {
//             if (f[j] && dict.find(x => x === s.substring(j, i))) {
//                 f[i] = true;
//                 break;
//             }
//         }
//     }
//     return f[s.length];
// }

/** Time complexity is O(2^n). TLE */
// function wordBreak(s: string, wordDict: string[]): boolean {
//     return wb(s, wordDict);
// }

// function wb(s: string, set: string[]): boolean {
//     let len = s.length;
//     if (len === 0) {
//         return true;
//     }
//     for (let i = 1; i <= len; ++i) {
//         if (set.find(x => x === s.substring(0, i)) && wb(s.substring(i), set)) {
//             return true;
//         }
//     }
//     return false;
// }

/** test case */
console.log(wordBreak("leetcode", ["leet", "code"])); // true
console.log(wordBreak("applepenapple", ["apple", "pen"])); // true
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])); // false
console.log(wordBreak("bb", ["a", "b", "bbb", "bbbb"])); // true
console.log(wordBreak("cars", ["car", "ca", "rs"])); // true