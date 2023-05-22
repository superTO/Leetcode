/** 14. Longest Common Prefix */
function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0 || !strs){
        return '';
    }
    
    strs = strs.sort((a,b) => a.length - b.length);
    let prefix = strs[0];

    for(let i = 0; i < prefix.length; i++){
        for(let j = 1; j < strs.length; j++){
            if(prefix[i] !== strs[j][i]) return prefix.slice(0, i)
        }
    }

    return prefix;
};

/** test case */
console.log(longestCommonPrefix(["flower","flow","flight"])) // "fl"
console.log(longestCommonPrefix(["floaa","flow","flowaaa"])) // "flo"
console.log(longestCommonPrefix(["dog","racecar","car"])) // ""