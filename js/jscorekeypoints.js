// 1 varibles,functions
/*
//hoisting - всплытие
console.log(a);
calc();
foo();
var a = 2;

console.log(a);

// var foo = function(){

// }

function calc(){

}

var b;
*/

// closures - замыкание
/*
var num1 = 1;

function sum(){
	console.log(num1);
}

// console.log(this)

sum();

*/

//recursion - рекурсия - функция которая вызывает сама себя

/*var arr = [1,2,3,4,[2,2,3], [1,2,[2]]];

console.log();

var resultArr = [];
function flat(array){
	array.forEach(function(el){
		if(el.__proto__.constructor == Array){
			flat(el);
		}else{
			resultArr.push(el);
		}
	})
	return resultArr;

}

var flatArr = flat(arr);
var flattedArr = arr.flat()

Array.prototype.asdasd = function(){
	this
}
console.log(flatArr);
console.log(flattedArr);
*/




// способ хранения


// 
/*var a = 1;
var b = 2;
a = b;

var obj = {
	name: 'asd'
}

var obj2 = {
	name : 'dsa'
}

obj = obj2;
obj.name = 'new name';

console.log(obj);
console.log(obj2);*/



// проверка на пустоту


//string
/*var a = '';
var result, ternResult;
if(a){
	result = true;
}else{
	result = false;
}
// тернарный оператор
ternResult = a ? a : '';
*/
//number
/*console.log(0 ? true : false); // false
console.log(100 ? true : false); //true
*/

//array

/*var arr1 = [1,2,3,5];

var arr2 = [];

console.log(arr2.length ? true : false); // false
console.log(arr1.length ? true : false); // true
*/

// objects 

/*var obj1 = {
	name: 'obj1'
}

var obj2 = {

}

console.log({} ? true : false)

function checkObjIsNotEmpty(obj){
	var isNotEmpty = false;
	for(prop in obj){
		if(obj.hasOwnProperty(prop)){
			isNotEmpty = true
			break;
		}
	}

	return isNotEmpty
}

function checkObjIsEmpty(obj){
	var isEmpty = true;
	for(prop in obj){
		if(obj.hasOwnProperty(prop)){
			isEmpty = false
			break;
		}
	}

	return isEmpty
}


console.log(checkObjIsNotEmpty(obj1));
console.log(checkObjIsNotEmpty(obj2));


*/


// object.property
/*
var obj =  {
	name: 'Object',
	collection: [],
	innerObj:{
		secondInnerObj: {
			name: ''
		}
	}
}


function serverResponse(obj, flag){
	if(flag){
		obj.collection.push(1);
		obj.collection.push('Hello')
		obj.updated = true;
		obj.spec = 'asd';
	}else{

	}

	return obj;
}


serverResponse(obj, false);

if(obj.updated){
	console.log('object updated');
}else{
	console.log('error happened');
}

serverResponse(obj, false);

if(obj.collection && obj.collection.length){
	obj.collection.forEach(function(el){
		console.log(el);
	})
}else{
	console.log('error happened');
}

serverResponse(obj, false);
//
if(obj.spec){
	console.log(obj.spec)
}else{
	console.log('error happened');
}

if(obj && obj.innerObj && obj.innerObj.secondInnerObj && obj.innerObj.secondInnerObj.name){
	console.log(obj.innerObj.secondInnerObj.name);
}
*/




/*function Animal(name){
	this.name = name;
	this.eat = true;
}


// constructor stealing
function Fish(name){
	Animal.apply(this, arguments);
}

var Lion = new Animal('Lion');

var Salmon = new Fish('Slamon');

console.log(Lion);
console.log(Salmon);*/

// Prototypal inheritance
/*function object(object){
	function F(){

	}

	F.prototype = object;
	return new F();
}

var obj = {
	name: 'Name'
}

var obj2 = object(obj);

console.log(obj2);

//Parasitic inheritance

function createAnoter(original){
	var clone = object(original);
	clone.sayHello = function(){
		console.log('Hello')
	}
	return clone
}

var Dan = {
	name: 'Dan',
	son: 'Jack'
}

var Jhon = createAnoter(Dan);

console.log(Dan);
console.log(Jhon);

*/

//Parasitic Combination inheritance


/*function SuperType(name){
	this.name  = name;
	this.friends = ['Dan', 'Jhon']
}

SuperType.prototype.sayHello = function(){
	console.log('Hello');
}

function SubType(name, age){
	SuperType.call(this, name);
}

SubType.prototype = new SuperType();
SubType.constructor = SubType;
SubType.sayAge = function(){
	console.log(this.age);
}

var child = new SubType('name');

console.log(child);*/