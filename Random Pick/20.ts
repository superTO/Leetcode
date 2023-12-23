/** 20. Valid Parentheses */
function isValid(s: string): boolean {
    const arr = s.split('');
    const stack: string[] = [];

    for(let item of arr){
        if(item === '('){
            stack.push(')')
        } else if(item === '['){
            stack.push(']')
        } else if(item === '{'){
            stack.push('}')
        } else if(stack.length === 0 || stack.pop() !== item){
            return false
        }
    }

    return stack.length === 0;
};

// test case
console.log(isValid('()')) // true
console.log(isValid('()[]{}')) // true
console.log(isValid('(]')) // false
console.log(isValid('(([{}]))')) // true
console.log(isValid('([)]')) // false