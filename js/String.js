// How to create

// 1 - literal
/*var str1 = 'Message';


// constructor
// var str2 = new String('Hello world');

console.log(str1);
alert(str2);

console.log(str1+str2);

*/

var message = 'Hello   \'\+world\'';
console.log(message);

//Methods


var str = 'I want to learn JavaScript';

//toLowerCase

var lowerCasedString = str.toLowerCase();

console.log(lowerCasedString);

console.log(str);

//toUpperCase
var upperCasedString = str.toUpperCase();

console.log(upperCasedString);

console.log(str);

//split(separator)

var splittedString = str.split(' ');

console.log(splittedString);
console.log(str);


//length

var symbolsQuantity = str.length;
console.log(symbolsQuantity);

console.log(str[4]);

//indexOf(substr, 100)

var indexOfWant = str.indexOf('t');
// if(str.indexOf('array') == -1){}
console.log(indexOfWant);



//indexOf(substr, 100) - начинает поиск с конца к началу

var lastIndexOfWant = str.lastIndexOf('t');
// if(str.indexOf('array') == -1){}
console.log(lastIndexOfWant);


// slice()


var slicedString = str.slice(str.indexOf('want'), str.indexOf('JavaScript'));
console.log(slicedString);
console.log(str);


// substring(startIndex, endIndex);

var substringedString = str.substring(8,3);
console.log(substringedString)
console.log(str);


// substr(startIndex, length);

var substrString = str.substr(2,4);
console.log(substrString)
console.log(str);


// trim
var strWitnSpaces = '   Hello World    ';
var trimed = strWitnSpaces.trim();

console.log(trimed);
console.log(strWitnSpaces);





