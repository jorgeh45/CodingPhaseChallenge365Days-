/*jshint esversion: 6 */
function numberToRoman(num) {
    // Take a number and convert to a roman string

    // array of number divided by unit, from the character of the romans numbers
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    // array of roman character  divided from tt character of the romans numbers
    let romanNumeral = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

    let romanized = '';

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            // For each match  of the devimalValue array,will add, and decreasing the number to zero.
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }
    return romanized;
}

function romanToNumber(roman) {

    // Take a roman string and converted to a number

    // A object of roman dividid by unit to him equal in number 
    let romanNumberValues = {
        'M': 1000,
        'CM': 900,
        'D': 500,
        'CD': 400,
        'C': 100,
        'XC': 90,
        'L': 50,
        'XL': 40,
        'X': 10,
        'IX': 9,
        'V': 5,
        'IV': 4,
        'I': 1
    };

    let numbered = 0;
    for (let index = 0; index < roman.length; index++) {
        // for each character of the roman string, will get the value from the roman dictionary  
        // then add each match.
        numbered += romanNumberValues[roman[index]];
    }

    return numbered;
}



console.log("Number to Roman:");

console.log(numberToRoman(250));
console.log(numberToRoman(365));

console.log("Roman to Number:");
console.log(romanToNumber("VII"));
console.log(romanToNumber("CXX"));