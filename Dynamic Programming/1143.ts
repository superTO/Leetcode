/** 1143. Longest Common Subsequence */
// function longestCommonSubsequence(text1: string, text2: string): number {
//     [text1, text2] = text1.length < text2.length ? [text1, text2] : [text2, text1];
//     let subseq = Array.from(new Array(2).fill(0), () => new Array(text2.length + 1).fill(0));
    
//     for(let i = 1; i < text1.length + 1; ++i){
//         for(let j = 1; j < text2.length + 1; ++j){
//             if(text1[i-1] === text2[j-1]){
//                 subseq[i%2][j] = subseq[(i-1)%2][j-1] + 1;
//             } else {
//                 subseq[i%2][j] = Math.max(subseq[(i-1)%2][j], subseq[i%2][j-1]);
//             }
//         }
//     }
//     // console.log(subseq);
//     return subseq[(text1.length)%2][text2.length];
// };

// practice
function longestCommonSubsequence(text1: string, text2: string): number {
    [text1, text2] = text1.length < text2.length ? [text1, text2] : [text2, text1];
    let m = Array.from(new Array(2).fill(0), () => new Array(text2.length+1).fill(0));
    for(let i = 1; i < text1.length + 1; ++i){
        for(let j = 1; j < text2.length + 1; ++j){
            if(text1[i - 1] === text2[j - 1]){
                m[i%2][j] = m[(i-1)%2][j-1] + 1;
            } else {
                m[i%2][j] = Math.max(m[(i-1)%2][j], m[i%2][j-1]);
            }
        }
    }

    return m[(text1.length)%2][text2.length];
}


/** test case */
console.log(longestCommonSubsequence('ace', 'abcde')); // 3
console.log(longestCommonSubsequence('abcde', 'ace')); // 3
console.log(longestCommonSubsequence('abc', 'abc')); // 3
console.log(longestCommonSubsequence('abc', 'def')); // 0
console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); // 2 //up
console.log(longestCommonSubsequence("ezupkra", "ubmrapkr")); // 4 //upkr

//     ezupkra
// u   0011
// b   001
// m   001
// r   001
// a   001
// p   0012
// k   00123
// r   0012344