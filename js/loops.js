// условие, счетчик, изменение счетчика
/*
var counter = 1;
console.log(counter);
//increment - увеличение на 1
//постфиксный
counter++;
//префиксный
++counter;
console.log(counter);


//разница

var num = 1;
var num1 = num++;
console.log(num);
console.log(num1);*/

//decrement --
/*
//предусловие
var count = 1;
// сначало проверяет - потом делает
while(count < 5){
	alert('Counter ' + count);
	count++;
}



//постусловие
var count2 = 1;
// сделает хотябы 1 раз - сначало делает - потом проверяет;
do{
	alert('Counter ' + count2);
	count2++;
}while(count2 < 5)
*/

// example
/*var counter = 5;

while(counter != 0){
	alert(counter);
	counter--;
}

alert('Hello from loop');
*/

// (создание счетчика; условие; изменение)
for(var i = 0; i < 10; i++){
	if(i == 3){
		console.warn('Step ' + i + ' was skipped');
		continue;
	}
	if(i == 5){
		console.error('Error happened on step ' + i)
		break;
	}
	console.log(i);
}



