/** 13. Roman to Integer */

function romanToInt(s: string): number {
    // ['I', 'V', 'X', 'L', 'C', 'D', 'M'].some(x => !s.includes(x)) return 0;
    const roman = new Map<string, number>();
    // 也可以直接設定
    // IV: 4,
    // IX: 9,
    // XL: 40,
    // XC: 90,
    // CD: 400,
    // CM: 900,
    // I: 1,
    // V: 5,
    // X: 10,
    // L: 50,
    // C: 100,
    // D: 500,
    // M: 1000,
    roman.set('M', 1000)
    roman.set('D', 500)
    roman.set('C', 100)
    roman.set('L', 50)
    roman.set('X', 10)
    roman.set('V', 5)
    roman.set('I', 1)
    
    s = s.replace(/IV/g, 'IIII').replace(/IX/g, 'VIIII');
    s = s.replace(/XL/g, 'XXXX').replace(/XC/g, 'LXXXX');
    s = s.replace(/CD/g, 'CCCC').replace(/CM/g, 'DCCCC');
    let total = 0;
    for(let item of s.split('')){
        // console.log(roman.get(item));
        const num = roman.get(item);
        total += num ? num : 0;
    }
    return total;
};

/** test case */
console.log(romanToInt('III')) // 3
console.log(romanToInt('LVIII')) // 58
console.log(romanToInt('MCMXCIV')) // 1994
console.log(romanToInt('CMXCIV')) // 994