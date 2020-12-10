var Ed = {
	name: 'Edward',
	surname: 'Snow',
	speciality: 'Front-end developer',
	greet: function(){
		alert('Hello')
	}
}


// Object.defineProperty(obj, propertyName, options)
/*
	options: {
		value: '',
		writable: true/false,
		configurable: true/false,
		enumerable: true/false,
		get: function(){},
		set: function(){} 
	}
*/


Object.defineProperty(Ed, 'work', {
		value: function(){
			console.log('coding...')
			console.log('...thinking...')
			console.log('coding...')
		},
		writable: false,
		configurable: false,
		enumerable: false,
})

Object.defineProperty(Ed, 'fullname', {
		// Getter
		get: function(){
			
			return 'Hello ' + this.name  + ' ' + this.surname
		},
		//Setter
		set: function(newFullName){
			var newFullName = newFullName.split(' ');
			this.name = newFullName[0];
			this.surname = newFullName[1];

		}
	})

alert(Ed.fullname);

Ed.fullname = 'Jack Black';

alert(Ed.fullname);




// Object.defineProperties(obj, props - {})
/*Object.defineProperties(Ed, {
	name: {
		writable: false,
		enumerable: false,
		configurable: false
	},
	speciality: {

	}

})*/
	

/*function disableEnum(obj,isEnum){
	if(isEnum === undefined){
		isEnum = false;
	}
	for(var prop in Ed){
		Object.defineProperty(Ed, prop, {enumerable: isEnum})
	}		
}

disableEnum(Ed, true);


for(var prop in Ed){
	
	console.log(Ed[prop])
}

Ed.work();
Ed.work = function(){alert('I am working!!!')};
Ed.name = 'Jhon';
console.log(Ed.name);

Ed.work();

delete Ed.name;


console.log(Ed)

*/
