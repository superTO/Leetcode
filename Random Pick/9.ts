/** 9. Palindrome Number */
function isPalindrome(x: number): boolean {
    if(x < 10 && x > -1) return true;
    if(x < 0) return false;

    const words = x.toString();
    let i = 0, j = words.length - 1;

    while(i < j){
        if(words[i] !== words[j]){
            return false
        }
        ++i;
        --j;
    }
    return true;
};

/** test case */
console.log(isPalindrome(121)) // true
console.log(isPalindrome(11)) // true
console.log(isPalindrome(111)) // true
console.log(isPalindrome(11211)) // true
console.log(isPalindrome(2112112)) // true
console.log(isPalindrome(3)) // true
console.log(isPalindrome(0)) // true

console.log(isPalindrome(123)) // false
console.log(isPalindrome(11231)) // false

