/*var flag = confirm('Yes/No?');

if(flag){
	alert('Yeah that is true!');
	if(flag){

	}
}else{
	alert('Yeah that is false!');
}*/


// var age = +prompt('How old are you?');



// console.log(age);
// if(age >= 18){
// 	alert('It is ok');
// }else if(age < 18){
// 	alert('You are too yong');
// }else{
// 	alert('You must enter a number!');
// }

var selectedColor = 'red';

var answer = prompt('Choose one color from raindbow color (red, orange, yellow, green, blue, darkblue, violet)')



/*if(answer){
	if(answer === 'red'){
		alert('You win!')
	}else if(answer === 'orange' || answer === 'yellow' || answer === 'green'){
		alert('You are looser!')
	}else{
		alert('Your value is incorrect!')
	}
	// if(answer === 'orange'){
	// 	alert('You win!')
	// }
	// if(answer === 'yellow'){
		
	// }
	// if(answer === 'green'){
		
	// }
	// if(answer === 'blue'){
		
	// }
	// if(answer === 'darkblue'){
		
	// }
	// if(answer === 'violet'){
		
	// }
	
}else if(answer === null){
	alert('See you next time')
}else{
	alert('You must enter smth')
}
*/
/*
	if(answer === 'red'){
	
	}else if(answer === 'orange') ...

*/
if(answer){
	switch(answer){
		case 'red':
		 	alert('You win!');
		 	break;
		case 'orange':
		case 'yellow':
		case 'green':
		case 'blue':
		case 'darkblue':
		case 'violet':
		 	alert('You are looser!');
		 	break;
		default:
			alert('Entered value is incorrect, valid values are - red, orange, yellow, green, blue, darkblue, violet');
			break;
	}

	
}else if(answer === null){
	alert('See you next time')
}else{
	alert('You must enter smth')
}



