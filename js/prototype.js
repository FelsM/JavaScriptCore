//Inheritance(наследование)
// For Literals
/*var Animal = {
	eyes: 2,
	eat: true,
	run: function(){
		console.log('I am runnig!')
	},
	getLegs: function(){
		return this.legs;
	}
}

var Bird = {
	wings: true,
	legs: 2,
	__proto__: Animal
}


var Dog = {	
	legs: 4,
	fur: true,
	furColor: 'black',
	__proto__: Animal
}

// Polymorphism
var Puppy = {
	fur: false,
	__proto__: Dog
}

/*console.log(Dog.eyes);
Dog.run()

console.log(Puppy);
console.log(Puppy.fur);


console.log(Puppy);
console.log(Dog.getLegs());
console.log(Bird.getLegs());


for(var prop in Dog){
	if(!Dog.hasOwnProperty(prop)){
		continue;
	}
	console.log(prop);
}

console.log(Dog.hasOwnProperty('eat'));
*/

/*
function Human(){
	this.legs = 2;
	this.arms = 2;
	this.eyes = 2;
}

Human.prototype.talk = function(){
	console.log('Hello my name is ' + this.name);
}

function Male(){
	this.gender = 'male';
	this.name = '';
	this.age = '';
}


Male.prototype = new Human();
Male.prototype.setName = function(name){
	this.name = name;
}
Male.prototype.setAge = function(age){
	this.age = age;
}

var Ivan = new Male();
Ivan.setName('Ivan');
Ivan.setAge(26)

console.log(Ivan);
console.log(Ivan.legs);





function Worker(speciality, degree){
	this.speciality = speciality;
	this.degree = degree;
}

Worker.prototype = new Male();


Worker.prototype.getDegree = function(){
	return this.degree;
}
Worker.prototype.hasDegree = true;






var Developer = new Worker('Front-end', 'bachelor');
var Tester = new Worker('Testing', 'master');

console.log(Developer);
console.log(Tester);

console.log(Developer.getDegree())


Developer.setName('Jhon');

Developer.talk();*/