//Строковое
var num = 1;
var bool = true;
var strigFromNumber = String(num);
var stringFromBool = String(bool);
console.log(typeof num);
console.log(typeof strigFromNumber);

console.log(typeof bool);
console.log(typeof stringFromBool);

//Арифметическое
var str,num1,num2,result;
num1 = '9';
num2 = '3';
str = true; // 1 == true; 0 == false
num1 = Number(num1);
str = Number(str);	

result = num1 / num2;


console.log(typeof result);
console.log(typeof num1);
console.log(typeof num2);

console.log(str); //NaN - not a number

/* + */

// 1 арифметический оператор 
var a,b,c;
a=2;
b=3;
c = a + b; 


// 2 - оператор конкатонации

var str1,str2,str3;
str1 = 'Hello';
str2= 'World';
str3 = str1 + str2;


// 3 - унарный плюс

var stringNum = '8';

console.log(typeof +stringNum)



// Логическое
var numForBool = Boolean(' ');
console.log(numForBool);


// 0, null, undefined, NaN, '' - always == false --- falthy


// 'string', 'number', 'boolean'

//== - проверка на равенство без учета типа
//===

//!= - проверка на НЕравенство без учета типа
//!==

console.log(typeof 'Hello' == 'string')
console.log(2 !== '2'); // 
console.log(2 === '2');

console.log(!NaN);
