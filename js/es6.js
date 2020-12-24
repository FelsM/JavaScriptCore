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

/*
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
*/
// ------------------------------------------------------------------
//REST ...
/*

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

foo222ES6(1,2,43,4,2,1,23);*/

// ------------------------------------------------------------------

// SPREAD ...


//ES5
/*var arr = [1,2,3];
var arr2 = [3,4,5];

var newArr = arr.concat(arr2);
console.log(newArr);
*/
/*var arr3 = arr;

console.log(arr3);


arr3[0] = 6
console.log(arr3);
console.log(arr);
*/

/*var arr3 = arr.slice(0);

arr3[0] = 6;
console.log(arr3);
console.log(arr);

var arr4 = [];
arr.forEach(function(el){
	arr4.push(el);
})

arr4[0] = 6;
console.log(arr4);
console.log(arr);

var arr5 = arr.map(function(el){
	return el
});

arr5[0] = 6;
console.log(arr5);
console.log(arr);



arr4[0] = 6;
console.log(arr4);
console.log(arr);



//ES6

const es6arr = [1,2,3,4,5];
const es6arr2 = [1,2,3,2,1,2,23];

const newEs6Arr = [...es6arr, ...es6arr2];
const newEs6Arr2 = [1,2,3,4,5,2,...es6arr,2,1,2,2,43, ...es6arr2];

console.log(newEs6Arr);
console.log(newEs6Arr2);


const es6obj = {
	name: 'Hello',
}

const obj = {
	name2: 'ES6',
	...es6obj
}

console.log(obj);

*/


// ------------------------------------------------------------------


// Template string;

/*var str = 'Hello';
var str2 = 'World';
var newStr = str + ' ' + str2;
console.log(newStr)

var template = 	'<h1>' + str + '</h1>' 
				+ '<p> ' + str2 + '</p>'
				+ '<p> ' + str2 + '</p>'; 


document.write(template);


const es6Str1 = 'Hello';
const es6Str2 = 'World';

const newEs6Str = `${es6Str1} ${es6Str2}`;
console.log(newEs6Str)

const foo = (name)=> `Hello ${name} !` 

const newObj = {
	name: '!!!newStrings!!!',
}

const es6template = `
					 <table>
					 		<thead>
								<tr>
									<th>${foo('Jack')}</th>
									<th>${newObj.name}</th>
									<th>${es6Str2}</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>${es6Str1}</td>
									<td>${es6Str1}</td>
									<td>${es6Str1}</td>
								</tr>
							</tbody>
					 </table>
					`;



document.write(es6template);


console.log()
*/

// ------------------------------------------------------------------
//Object literals

// var name = 'Jhon';
// var age = 12;
/*
var name2 = 'Jack';
var age2 = 14


var sayHello2 = function(){
	alert('Hello ES5!')
}

var obj1 = {
	name: name2,
	age: age2,
	sayHello2: sayHello2,	
	logInfo: function(info){
		console.log(info)
	}	
}


// var obj2 = {
// 	name: name2,
// 	age: age2
	
// }

// console.log(obj1);
// obj1.sayHello();

obj1.logInfo('Message');

// ES6
const name1 = 'Ronald';
const age = 24;

const sayHello = ()=>{
	alert('Hello ES6!')
}

const keyObject = {
	name: 123,
}

const objES61 = {
	name: name1,
	age,
	[sayHello]: 'UserID',
	[{name: 123}]: 'pwd',
	logInfo(message){
		console.log(message)
	},
	doSmth(){

	} 
}

objES61.logInfo('ES6 works!')

console.log(objES61[sayHello]);
console.log(objES61[keyObject]);
*/
// objES61.sayHello();

// ------------------------------------------------------------------


//Destructuring


//Arrays
/*var arr = [1,2,3];

var firstElement = arr[0];
var secondElement = arr[1];
var thirdElement = arr[2];

console.log(firstElement);

const es6arr = [2,3,3,5,6];

const [first, , third, ,fifth, sixth=222 ] = es6arr;

console.log(first);
// console.log(second);
console.log(third);
console.log(fifth);
console.log(sixth);
*/

// Objects

// var obj = {
// 	name: 'Kris',
// 	age: 38,
// }

// var name = obj.name;
// var age = obj.age;


/*const es6Obj = {
	name: 'Karl',
	age: 45,
	isMarried: true,
	son: {
		name: 'Jake'
	},
}*/

/*
	{name:child} = son;
*/
/*
const {name:father,isMarried, age:yearsOld, son:{name:child}, wifeName='Jane Doe'} = es6Obj;
console.log(father);
console.log(yearsOld);
console.log(child);
console.log(isMarried);
console.log(wifeName);
*/




// Functions


// array
/*function fooES5(arr){
	var a = arr[0];
	var b = arr[1];
	return a + b;
}
console.log(fooES5([1,2]));
// const [a,b] = [1,2]
function fooES6([a=1,b=2]){
	return a + b;
}
console.log(fooES6([5,10]))

//object

function foo2ES5(obj){
	var a = obj.name;
	var b = obj.age;
	return 'My name is ' + a + '. I am ' + b +' years old';
}
console.log(foo2ES5({name: 'Jack', age : 78}));

function foo2ES6({name="Black",age:yearsOld}){
	return `My name is ${name}. I am ${yearsOld} years old`;
}

console.log(foo2ES6({age : 78}));
*/


// ------------------------------------------------------------------
// Class


/*function Animal(){
	this.food = '';
}


Animal.prototype.eat = true;
Animal.prototype.sayHello = function(voice){
	alert(voice);
}


function Mammal(name){
	// Animal.call()
	//Private property
	var privateProperty = '';
	this.children = [];
	this.name = name;
	this.food = 'milk';
	// private method;
	// function somePrivateMethod(){

	// }
}

Mammal.prototype  = new Animal();

var Whale = new Mammal('Whale');
Object.defineProperty(Whale, 'child', {
		get:function(){ 
			return this.children.join('<>')
		},
		set: function(childName){
			this.children.push(childName);
		}
	});

Whale.child = 'Whale child1';
console.log(Whale.child);
Whale.child = 'Whale child2';
console.log(Whale.child);
Whale.sayHello('beeeep');
*/

// ES6


/*class AnimalES6{
	constructor(){
		this.food = '';
	}

	sayHello(voice){
		alert(voice);
	}	

}

// const Dog = new AnimalES6();

// console.log(Dog);

class MammalES6 extends AnimalES6{
	static className = 'Mammal'; 
	// Object.defineProperty()
	static checkClassName(){
		console.log(`Current class is ${this.className}`);
	}
	
	constructor(name){
		// AnimalES6.call(this, name)
		super();
		this._name = name;
		this._food = 'milk';
	}
	// private || public || protected ||static
	koalasHello(){
		// (new AnimalES6).sayHello('K-O-A-L-A');
		super.sayHello('K-O-A-L-A');
		this.eat();
	}	
	sayHello(voice){
		// super.sayHello(voice);
		alert('SayHello from Mammal class');
	}
	eat(){
		console.log('roar');
	}

	get name(){
		return `Hello I am ${this._name}!`
	}

	set name(newName){
		if(typeof newName !== 'string'){
			console.error('String is the only valid type for name');
			return
		}
		this._name = newName;
	}
}


const Koala = new MammalES6('Koala');

// Koala.sayHello('KO-A-LA')
// Koala.koalasHello()
// console.log(MammalES6.className)
// MammalES6.checkClassName();

Koala.name = 'New Koala Name';
console.log(Koala.name);

*/




//static Class methods and properties
/*class StringTransformer{
	static transformerName = 'StringTransformer';
	static #somePrivateProperty = 0;
	static getString(str){ return `${str} from string Transformer`}
	static convertString(){
		const str = this.#makeTransformation(this.#somePrivateProperty);
		console.log(str)
	}
	static #makeTransformation(str){
		return `${str} transformed string`
	}	
}

console.log(StringTransformer.getString('AAAAA'))

// console.log(StringTransformer.);

StringTransformer.convertString();
*/




// ------------------------------------------------------------------





// Set
//size
//add, delete, has, clear, 


/*const s = new Set();

s.add('Hello').add('World');
console.log(s);
console.log(s.size);
// s.delete('Hello')
console.log(s.has('Hello'));

s.forEach((el)=>{
	console.log(el);
})

const arr = [1,2,3,4,5,6,7,1,23,4,4,5,6,7,8,8,3,2,1];

let uniqueArr = new Set(arr);
uniqueArr = [...uniqueArr];
console.log(arr);
console.log(uniqueArr);*/



// Map 
//size
//set, get, has, delete, clear, 
/*
const sum = function(a,b){return a+b};
const obj = {name: 'hello'}

const m = new Map();
m.set('Hello', 'World')
m.set(sum, {name: 'function as a key'});
m.set(obj, 'Object as a key');
// m.set(s, 'Set as a key');

console.log(m.get('Hello'));
console.log(m.get(sum));
console.log(m.get(obj));
console.log(m.get(s));
console.log(m.size);

// m.clear();
console.log(m);

// m.keys() || m.values() || m.entries()

for(let p of m.keys()){
	console.log(p);
}*/


// WeakSet, WeakMap

/*const s = new Set();

let dogS = { name: 'Rex'};

s.add(dogS);

console.log(s.has(dogS));
console.log(dogS);

dogS = null;

console.log(s.has(dogS));
console.log(dogS);



//WeakSet no
//size, keys();


const ws = new WeakSet();

let dog = { name: 'Rex'}

ws.add(dog);

console.log(ws.has(dog));
console.log(dog);

dog = null;

console.log(ws.has(dog));
console.log(dog);*/


// WeakMap
//keys only Objects
// no keys(),values(),entires();


/*const wm = new WeakMap();

let cat = {name: 'Garfield'}

wm.set(cat, 'World');

cat = null;

console.log(wm);


*/


//New Static Classes + new Methods

// Object

// Object.defineProperty(obj, 'prop',{writable,enumerable,configurable}); Object.defineProperites(obj, {'prop': {}})





const obj1 = {
	name: 'name1',
	secondName: 'name2',
}

const obj2 = {
	age: 12,
}


/*// 1



const newObj = {
	...obj1,
	...obj2,
}

// 2
//Object.assign()
const newObj2 = Object.assign({},obj1, obj2, {gender: 'male'})
console.log(obj1);
console.log(newObj2);

*/

// Object.create()
//obj.__proto__ = obj1;
/*const obj3 = Object.create(obj1);

console.log(obj3);
*/

//configurable = false
//Object.seal(obj)
// Object.isSealed(obj)

/*Object.seal(obj1);
obj1.name = 'asdasdasdasd';

delete obj1.name;
console.log(Object.isSealed(obj1));
*/



//writable = false
//configurable = 
/*Object.freeze(obj1);

obj1.name = 'asdasd';
console.log(obj1);
*/




// Object.entries()

/*console.log(Object.entries(obj1));


// Object.keys()
console.log(Object.keys(obj1));

// Object.values();

console.log(Object.values(obj1));*/

/*const target = {
	name: 'target',
	age: 20
};
*/
// Proxy(traget, handler) 
/*
Handler
{
	//properties
	set
	get
	delete

	//object

	construct - new - for Classes with oly static props
	getProtitypeOf - Object.getPrototypeOf




}
*/
/*const proxiedTarget = new Proxy(target, {
	// t - target, p - props
	// get(t,p){
	// 	if(p in t){
	// 		return t[p]
	// 	}else{
	// 		return 'property in not in target';
	// 	}
	// } ,
	set(t,p,val){
		if(typeof val === 'number'){
			if(val < 20){
				return false
			}else{
				t[p] = val;
				return true
			}
		}else{
			return false
		}
	},
	delete(){
	
	}
})

proxiedTarget.newAge = 'asdasd';

alert(proxiedTarget.newAge);
*/



// Reflect


// Reflect.defineProperty
// Reflect.defineProperties
/*const obj = {}


// obj.name = 2
Reflect.set(obj, 'name', 2);

// obj.name
Reflect.get(obj, 'name');

//  delete name
Reflect.deleteProperty(obj, 'name');
*//*
	function Animal(name){
	this.name = name;
	}
	var Dog = new Animal('Jake')

// Reflect.construct(Animal, 'Jake')

console.log(Reflect)

*/

// Arrays

//arr.find();
//arr.findIndex();


/*const arr = [1,2,-3,4,5];

//firstElement
const newArr = arr.find((val)=>{ return val>2})

console.log(newArr) ;

//arr.some(el, i, arr) return boolean
//Хотя бы одно значение удоволетворяет условие
const isNegativeExist = arr.some((el)=>{
	console.log('work');
	return el < 0
})

console.log(isNegativeExist);



//arr.every(el,i,arr) return boolean
//Все значения удоволетворяет условие
const isAllPositive = arr.every((el)=>{
	console.log('work 2');
	return el > 0;
})

console.log(isAllPositive);
*/


// 
// Strings


/*console.log('hello'.repeat(5))


// Number


// if(!Number.isNaN())

// 
// console.log(Number.isFinite(-Infinity))


console.log(Math.trunc(23.42)) 

// 1 - positive, 0 - 0, -1 - negative value 
console.log(Math.sign(-2));

*/



// Symbol
/*
const sym1 = Symbol('new Symbol');
const sym2 = Symbol('new Symbol');
console.log(sym1 === sym2);


const obj = {
	name: 'asdasd',
	[sym1] : 'Some secret data',
	[sym2] : 'Some secret data 2',
}

console.log(obj[sym1]);


console.log(typeof sym1);

//standart property names
console.log(Object.getOwnPropertyNames(obj));

//for symbols
console.log(Object.getOwnPropertySymbols(obj));

// Global symbols
const globSymbol = Symbol.for('app.foo');
console.log(Symbol.keyFor(globSymbol));
*/



//Symbol.iterator

/*let fibonacci = {
	[Symbol.iterator](){
		let pre = 0, cur = 1			
		return{
			next(){
				[pre,cur] = [cur, pre + cur]
				return { done: false, value: cur}
			}
		}
	}
}

for(let n of fibonacci){
	if(n > 1000){
		break;
	}

	console.log(n)
}
*/
/*
let customIterator = {
	counter: 1,
	// 1 - name - [Symbol.iterator]
	[Symbol.iterator](){
		//counter
		let i = this.counter;			
		return{
			// must - return{next(){}}
			next(){
				// must return {done: true/false, value: }
				i++
				if( i > 10){
					return { done: true, value: 'completed'}	
				}else{
					return { done: false, value: i}
				}
			}
		}
	}
}

for(let n of customIterator){
	if(n > 11){break};
	console.log(n)
}*/


// Promises


//Modules (ES6 import/export)


//fetch();






