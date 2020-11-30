//  How to create
/*
// 1 - Literal

var Person = {
	name: 'Jhon',
	sname: 'Doe',
	age: 28,
	isMarried: false,
	hobbies: ['Football', 'Basketball'],
	children: [{name: 'Jack',age: 8}],
	sayHello: function(){
		alert('Hello my name is Jhon!');
	},
	sayAge: function(){
		alert('I am 28 years old');
	},
	sayFullName: function(){
		alert('Hello my name is Jhon Doe!');
	}
}

// console.log(Person);
// console.log(Person['name']);
// console.log(Person.sname);

Person.sayHello();


// 2 - Constructor

var Animal = new Object();
Animal.type = 'Dog';
Animal.age = 8;
Animal.name = 'Rex';


// console.log(Animal);


//  for...in
console.log('Person properties');
for(var prop in Person){
	if(typeof Person[prop] === 'function'){
		continue;
	}
	console.log(Person[prop]);	
}


console.log('Animal properies values')
for(var prop in Animal){
	
	console.log(Animal[prop]);	
}*/


//Refferece type

/*var obj1 = {
	name : 'Jhon'
}
var obj2 = {
	name: 'Jack'
}

obj1 = obj2;

obj1.name = 'Alex';
obj2.age = 123;

console.log(obj1);
console.log(obj2);

*/



// context - this

/*var baseball = 'baseball';
var wife = 'Tiffany';

function sayAge(){
	alert('I am '+ this.age + ' years old');
}

var Person = {
	name: 'Jhon',
	sname: 'Doe',
	wife: wife,
	age: 28,
	isMarried: false,
	hobbies: ['Football', 'Basketball', baseball],
	children: [{name: 'Jack',age: 8}, {name: 'James',age: 0}],
	sayHello: function(){
		alert('Hello my name is ' + this.name + ' !');
		return this
	},
	sayAge: sayAge,
	sayFullName: function(){
		alert('Hello my Full Name is ' + this.name + ' ' + this.sname);
		return this
	},
	getChildren: function(){
		// for(var child = 0; child < this.children.length; child++){
		// 	console.log(this.children[child]['name']);
		// }
		this.children.forEach(function(child){
			console.log(child.name);
		})
	}
}


console.log(Person.wife);

console.log(Person.sayHello().sayFullName().name)
// Person.sayAge();
// Person.sayFullName();
// Person.getChildren();


*/


// Costructor Functions

function Person(name, sname, age, isMarried){
	this.name = name;
	this.sname = sname;
	this.age = age;
	this.isMarried = isMarried;
	this.sayHello = function(guest){
		alert('Hello ' + guest + ' my name is ' + this.name);
	};
	this.sayFullName = function(){
		alert('My Full Name is ' + this.name + ' ' + this.sname);
	};
} 

var Jhon = new Person('Jhon', 'Doe', 30, true);
var Jack = new Person('Jack', 'Sullivan', 27, false);

console.log(Jhon);
console.log(Jack);
Jhon.sayHello('Jack');
Jhon.sayFullName();

Jack.sayHello('Jhon');
Jack.sayFullName();


for(var prop in Jack){
	if(typeof Jack[prop] == 'function'){
		continue;
	}
	console.log(prop + ' - ' + Jack[prop]);
}



