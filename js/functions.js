// var a,b;
// a = 5;
// b = 2;

// var sum = a+b;
// console.log(sum);

// a = 2;
// b = 8;

// var sum2 = a + b;
// console.log(sum2);


// a = 8;
// b = 15;
// var sum3 = a + b;
// console.log(sum3);

// alert('Hello');

// декларативный
/*function sumLogResult(num1,num2){
	var sum = num1+num2;
		
}
sumLogResult(1, 2);
sumLogResult(5, 2);
sumLogResult(2, 8);
sumLogResult(8, 15);
*/
/*

function add(num1, num2){
	var result = num1+num2;
	logResult(result);
	info();
}

function logResult(result, platform){
	if(platform == undefined){
		console.log(result);
	}else{
		if(platform === 'cons'){
			console.log(result)	
		}else if(platform === 'pop'){
			alert(result);
		}
	}
}

// function logResult(result, paltform){
// 	if(platform === 'cons'){
// 		console.log(result)	
// 	}else if(platform === 'pop'){
// 		alert(result);
// 	}
	
// }

function info(){
	console.log('done');
}

function sqaureNumber(a){
	if(a == undefined){
		a = 1;
	}
	// if(!true){
	// 	if(false){
	// 		return a
	// 	}
	// 	return a*a

	// }else{
	// 	return a+a
	// }
	return a*a
}

var square1 = sqaureNumber(8);
logResult(square1, 'pop');


var square2 = sqaureNumber();
logResult(square2, 'pop');


add(2,2);
console.log('code after function')*/


/*console.log(add(2,3));


// декларативный
function add(a,b){
	return a+b
}

//функциональные выражения (functional expression)

var add2 = function(a,b){
	return a+b;
}

console.log(add2(4,3));*/




// Область видимости

/*
// 1 - Основной поток кода(Глобальная Область видимости)

var message = 'Hello';


// 2 - Область видимости функции(Локальная Область видимости)

function greet(){
	var message = 'World';	
	console.log(message);
}

greet();
console.log(message);

*/


//Замыкание(Closure) 
/*var message2 = 'Hello';


function greet2(){
	
	console.log(message2);
}

greet2();

*/






