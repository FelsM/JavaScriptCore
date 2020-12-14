// var


// всплывают
// ЯВЛЯЮТСЯ св-вом Global (window)
/*console.log(es3);

var es3 = 'Classic Java Script';

console.log(this);
// this.es3;
// window.es3


// ES6 EcmaScript 6 
// let, const

// console.log(es6let);

// значение которое не будет изменяться{} // for objects,

// НЕ всплывают!
// НЕ являются св-вом Global (window)
const es6const = 'Hello ES6!';

let es6let = 'Hello es3';

// es6const = 'smth';
es6let = 'Hello es6';
console.log(es6let);

console.log(this);
*/
//-----------------------------------------------------------------------------------------
// ОВ - область видимости
// Scope - Глобальная ОВ, ОВ функции

// var a = 2;

// function foo(){
// 	var a  = 6;
// 	console.log(a);
// }
// foo();

// console.log(a);

// for(var i = 0; i < 5; i++){

// }

// var obj = {
// 	name: 'obj',
// 	age: 12
// }

// for(var p in obj){

// }

// console.log(i);
// console.log(p);



// ES 6
//Block Scopes
// {}

/*const b = 222;

{
	//локальная область видимости
	const b = 3123;
	console.log(b)
}

console.log(b);*/


// for(let i = 0; i < 5; i++){

// }

// var obj = {
// 	name: 'obj',
// 	age: 12
// }

// for(let p in obj){

// }

// console.log(i);
// console.log(p);

// const flag = true;

// const c = 4;

// if(flag){
// 	const c = 9;
// }else{
// 	const c = 10;
// }

// console.log(c)



// ------------------------------------------------------------------


//

//FE - functional expression
/*var fooES3 = function(a) {
	console.log('function es3');
	return a
}

fooES3();

var f1 = function(a,b){ return a+b}

console.log(f1(1,2));

var f2 = function(){
	console.log(arguments);
}

f2(1,2,3,4,3,1,23,123,123);

var arr1 = [1,2,43,5];

arr1.forEach(function(){
	console.log(this);
})

var obj = {
	name: 'ES3',
	logName: function(){
		alert(this.name)
	}
}

obj.logName();

setTimeout(obj.logName.bind(obj), 1000);

function Animal(name){
	this.name = name
	this.sayHello = function(){
		alert(this.name)
	}
}

var lion = new Animal('lion');
setTimeout(lion.sayHello, 1000);
*/



// Arrow functions

/*const fooES6 = (a)=>{
	console.log('function es6');
	return a
}

fooES6();

const f11 = (a,b) => a+b;

console.log(f11(1,2));
//не имеют arguments
const f22 = ()=>{
	// console.log(arguments)
}

f22(1,2,3,2,1,23,1,2123);


const arr2 = [1,2,43,5];

arr2.forEach((el,i,arr)=>{
	console.log(el);
})

const filteredArr2 = arr2.filter((el)=> el>=5);
console.log(filteredArr2);

function Animal2(name){
	this.name = name;
	this.sayHello = ()=>{
		alert(this.name)
	}
}

var cat = new Animal2('cat');
setTimeout(cat.sayHello, 1000);

*/


// ------------------------------------------------------------------


function fooES5(a, b){
	// if(a === undefined){
	// 	a = 2
	// }
	// if(b === undefined){
	// 	b = 3
	// }
	if(arguments[0] === undefined){
		a = 2
	}
	if(arguments[1] === undefined){
		b = 3
	}


	return a+b
}

console.log(fooES5());

function foo2ES5(a,b){
	// var args = [].slice.call(arguments, 2);
	var args = [];
	for(var i = 2; i < arguments.length;i++){
		args.push(arguments[i])
	}
	args.forEach(function(el){
		console.log(el + ' is not valid');
	})
	return a+b;
}

console.log(foo2ES5(1,2,3,4,2,1,2,3,2));



//Default parameters



function fooES6(a = 2, b = 3){
	
	return a+b
}

console.log(fooES6());


//REST ...


function foo2ES6(a, b, ...restParams){
	console.log(a)
	console.log(b);
	console.log(restParams);
	restParams.forEach((el)=>{
		console.log(el);
	})
	// console.log(args)
}

foo2ES6(1,2,43,4,2,2,4,3,21,2,3,12312);


function foo22ES6(...args){
	console.log(args);
}

foo22ES6(1,2,3,1,2,2,1,12);


const foo222ES6 = (...args)=>{
	console.log(args);
}

foo222ES6(1,2,43,4,2,1,23)









/*const obj2 = {
	name: 'ES6',
	logName(){
		alert(this.name)
	}
}

obj2.logName();

setTimeout(obj2.logName, 1000);
*/




