// || - logical "OR"  
/*

// Classic
console.log(true || true); // true
console.log(false || true); // true
console.log(true || false); // true
console.log(false || false); // false


// Extended functionality
// search for first truthly value
var flag = prompt('Insert smth') || null || 'Hello' || undefined;

console.log(flag);

var name = prompt('Insert your name');
var nickname = prompt('Insert your nickname');

if(name || nickname){
	var username = nickname || name;
	console.log(username);
}else{
	alert('You must enter your name or nickname');
}
*/



// && - logical "AND"

/*// Classic
console.log(true && true); // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false


// Extended functionality
//search for first falsy value
var firstName = prompt('Insert your name');
var surName = prompt('Insert your sname');
var isFullNameValid =  firstName && surName;


if(isFullNameValid){
	alert('Yor fullname is valid - ' + firstName + ' ' + surName);
}else{
	alert('Full name is invalid');
}
*/
//Example 1
/*var num1 = 1;
var num2 = '';
var result;
if(num1 && num2){
	result = num1 + num2;
}

if(result){
	console.log(result)
}*/
  

//Example 2

/*var name = prompt('Enter your name') || prompt('Enter default name');

if(!name){
	name = 'Jhon Doe';	
}

console.log(name)
*/

// ! - logical NOT

console.log(!0)


var isValueExist = !!'';

console.log(isValueExist)