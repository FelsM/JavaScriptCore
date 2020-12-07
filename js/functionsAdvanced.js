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


/*function logNumbers(counter){
	console.log(counter)
	counter++
	if(counter < 5){
		logNumbers(counter);
	}
	console.log(counter)
}


logNumbers(0);*/




//  



//context

/*function sayHello(){
	
	console.log(this); //window

	function log(){
		function someFunc(){

		}

		console.log(this) //window
	}
	log();

	alert('Hello world') //window
}

console.log(this) //window

// log();

// window.foo = function(){}
var foo = function(){
	console.log(this); //window
}
foo();

sayHello();

var obj = {
	name: 'name',
	log: function(){
		// obj
		console.log(this)
	}
}

obj.log();*/


// function Constructor
/*
	function func(a,b){
		return a - b
	}
*/


/*var func = new Function('a', 'b', 'return a - b');

// console.log(func(1,4));

var a = 5;

function foo(){
	var a  = 2;
	function innerFoo() {
		var a = 7;
		// 
		var foo2 = new Function('console.log(a)');
		foo2();
	}
	
	var foo3 = function(){console.log(a)}
	// console.log(a);

	innerFoo();
	foo3();

}
foo();*/

//Timers

//  Loosing context (Потеря контекста)

function Animal(name, age){
	// Фиксирование контекста
	// var that = this;
	this.name = name;
	this.age = age;
	this.sayHello = function(){
		alert('Hello my name is ' + this.name);
	}
}

function sayAge(){
	alert('I am ' + this.age + ' years old');
}

function greetGuests(guestName){
	alert('Hello ' + guestName + ' my name is ' + this.name);
}


// Animal.prototype.getAge = sayAge;



var Dog = new Animal('Dog', 10);





// Dog.sayHello();

// Dog.getAge();




// bind();

/*// Dog.sayHello.bind(Dog)
setTimeout(Dog.sayHello.bind(Dog), 2000);
*/


// call(context, param1, param2,param3)

greetGuests.call(Dog, 'Alex');


//apply(context, [1,2,3,4,5])


var arr = [1,2,434234,12312,-12312,312];
console.log(arr);

var maxValue = Math.max.apply(null, arr);

var minValue = Math.min.apply(null, arr);

console.log(maxValue);
console.log(minValue);


/*function logNumbers(){
	var argsInStr = [].join.apply(arguments, ' < - >');
	console.log(argsInStr);
}
*/
// logNumbers(1,2,3,4,5,5,6,7,6,2)

// Array.prototype
// []

console.log(Array.prototype.join.call('Hello world', '----'))



console.log([].concat.call('Hello', 'World'))











