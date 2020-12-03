// arguments - всех агрументах(параметрах) функции

/*function calc(){
	// console.log(arguments)
	// if(arguments[0] == undefined){
	// 	arguments[0] = 1;
	// }
	// if(arguments[1] == undefined){
	// 	arguments[1] = 2;
	// }
	var sum = 0;
	for(var i = 0; i < arguments.length; i++){
		sum+=arguments[i];
	}
	return sum;
}

console.log(calc(5,4,3,2,4,2,34234));*/


// Recursion (рекурсия)
// var counter = 0;
// фукнция которая внутри вызывает сама себя

// !!! Важно - обязательно должно быть условия прекращения повторного вызов


function logNumbers(counter){
	console.log(counter)
	counter++
	if(counter < 5){
		logNumbers(counter);
	}
	console.log(counter)
}


logNumbers(0);