// How to create
/*// literal
var num1 = 5;

//construcror

var num2 = new Number(4);

console.log(num1);
console.log(num2);

console.log(num1+num2);

*/

// Math

var num1 = 1.4231;

var num2 = num1.toFixed(2);

console.log(num2);


//Math.floor() - округление в низшую(уменьшение) сторону
console.log(Math.floor(num1));


//Math.ceil() - округление в высшую(увеличение) сторону
console.log(Math.ceil(num1));


//Math.round() - округление до целого
console.log(Math.round(num1));

// Math.floor(Math.random()*(max-min+1) + min)

// Math.floor(Math.random()*101)  - случайное число от 0 до 10
var random = Math.floor(Math.random()*11)

// Math.floor(Math.random()*101)  - случайное число от 1 до 10
var random = Math.floor(Math.random()*10) + 1


//to get random number from 0 to max

function rand(max){
	return Math.floor(Math.random()* Math.floor(max));
}

function randRange(min,max){
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random()*(max-min+1) + min);
}


var arr = ['red', 'green', 'blue'];

console.log(random);



console.log(Math.max(1,2,2,3,4,5,3,3,2,2,43,573773));

console.log(Math.min(-213,12312,12312,321,-12312));


