// OOP - Inheriatnce,Polymorhism, Incapsulation
/*
function Animal(){
	this.food = '';
	this.childFood = '';
}


function Mammals(){
	//polymorphism
	this.childFood = 'milk';
}
//inheriatnce
Mammals.prototype = new Animal();


function Herbivores(){
	//polymorphism
	this.food = 'Plants'
}
//inheriatnce
Herbivores.prototype = new Mammals();

function Predators(){
	//private
	var isGoodHealth = true;
	//public
	this.food = 'Meat';
	//public
	this.getFood = function(){
		if(isGoodHealth){
			//incapsulation - сокрытие реализации
			hunt();
		}else{
			console.log('have some troubles')
		}
	}
	//private
	function hunt(){
		console.log('run');
		console.log('catch');
		console.log('kill');
	}
}
//inheriatnce
Predators.prototype = new Mammals();


function PredatorChild(){
	this.food = 'Milk';
}


PredatorChild.prototype = new Predators();


var LionChild = new PredatorChild();


var Lion = new Predators();

var Koala = new Herbivores();


Lion.getFood();
console.log(Koala);

console.log(Lion);
LionChild.getFood();

*/







