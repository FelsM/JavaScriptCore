
//How to create
// first way
/*var arr = [0,1,2,3,4,5,6,'Hello'];
var arr2 = [true, 'Hello', 2];
arr2[3] = 'asdasd'; 
arr2[7] = 4;

// alert(arr);

console.log(arr2[3]);
// length 
console.log(arr2.length);

console.log(arr[arr.length-1]);*/



// second way
// new Array()
// 1
/*var newArr = new Array();
console.log(newArr);

//2
var newArr2 = new Array(8);
console.log(newArr2);


//3
var newArr3 = new Array(1,2,3,53,'Hello');
console.log(newArr3);
*/



// Arrays with loops
/*
var arr = [1,2,'str', true, 432]
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);


for(var i = 0; i < arr.length;i++){
	console.log(arr[i]);
}
*/

// Array methods

/*var arr = [1,2,3];


// JOIN
var methodJoin = arr.join('<>');
console.log(methodJoin);*/


// Add/delete first/last elements of array
/*
// push/pop

//PUSH - add item to the end

arr.push('One');
console.log(arr);

//POP - delete item from the end

var deletedEndItem = arr.pop();
console.log(arr);
console.log(deletedEndItem);



// shift/unshift

//UNSHIFT - add item at the beginning
arr.unshift('First element');
console.log(arr);


//SHIFT - delete item at the beginning
var deletedStartItem = arr.shift();
console.log(arr);
console.log(deletedStartItem);
*/

// Delete/add elements in a specific place of array

//SPLICE- Mutable - delete element
/*
var arr = [1,2,3,4,5];

//splice(a,b) - a - index of start element , b - q-ty of cutted elements;
var splicedArr = arr.splice(1,3);




console.log(arr);
console.log(splicedArr);
//splice(a,b, el1, el2,) - a - index of start element , b - q-ty of cutted elements;
arr.splice(1,0, 7,6,9);
console.log(arr);


arr.splice(1,2, 18,36,432);
console.log(arr);

// splice(-a,b) -a - index of start element form the right , b - q-ty of cutted elements;
arr.splice(-3,2);
console.log(arr);
*/


// SLICE - UNMutable

/*var arr = [1,2,3,4,5,6,7];

//slice(a,b) - a - index from, b - index to [a,b)
var slicedArr = arr.slice(1,3);
console.log(arr);
console.log(slicedArr);

//slice(a) - from a to the end
var arr2 = [1,2,3,4,5];
var slicedArr2 = arr2.slice(3)

console.log(arr2);
console.log(slicedArr2);

//slice(-a) from a(starts from the right) to the end
var arr3 = [1,2,3,4,5];
var slicedArr3 = arr3.slice(-4)

console.log(arr3);
console.log(slicedArr3);*/


//CONCAT
/*
var arr1 = [1,2,3];
var arr2 = [4,5,6];

var arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr3);

var arr4 = arr2.concat([123,421],4,5,6,3);
console.log(arr4)
*/


// REVERSE - Mutable 

/*var arr = [1,2,3,4];
var arrReversed = arr.reverse();
console.log(arr);
console.log(arrReversed);
*/


// SPLIT
/*var message = 'I want to learn JavaScript';
var splitedMessage = message.split(' ');
console.log(splitedMessage);
*/

/*//INDEXOF
var arr = [1,2,'Index',4,5];
var indexOfElem = arr.indexOf('Index');
console.log(indexOfElem);

arr.splice(arr.indexOf('Index'),1)
console.log(arr);

//LASTINDEXOF
var arr2 = [1,2,'Index',4,5];
var lastIndexOfElem = arr2.lastIndexOf('Index');
console.log(lastIndexOfElem);

// INCLUDES

var arr3 = [1,2,3,4,5];
//includes(a,b) - a - item, b - index from - BOOLEAN(true/false) as a result
var isIncluded = arr3.includes(4,5);
console.log(isIncluded)
*/



//SORT - Mutable

/*var arr = [1,2,4,10,123,345]
var sortedArr = arr.sort(compare);
console.log(arr);
console.log(sortedArr);

function compare(a,b){
	if(a > b) return 1;
	if(a == b) return 0;
	if(a < b) return -1;
}
*/


//Перебирающие методы массивов

/*var arr = [1,2,3,4,5,222,123,545412,545];
var arr2 = [3,5,2,1,2,3];
// arr[0]
//arr[arr.length-1]




function checkOddEven(array){
	for(var i = 0; i < array.length; i++){
	// arr[i] = arr[i]+2;
	// arr[i] += 2;
	// -=2; *=2; /=2
		if(array[i] % 2 == 0){
			console.log(array[i] + ' - even');
		}else{
			console.log(array[i] + ' - odd');
		}
	}	
}


checkOddEven(arr);
checkOddEven([1,2,2,3,45,12]);*/


// FOREACH(function) - 
//function(element,index,array) 

/*var arr = [1,2,2,3,5,3,1,2,3,5,3,123,2];

var forEachResult = arr.forEach(function(elem,i,arr){
	console.log('-------------------')
	console.log(elem);
	// console.log(i);
	// console.log(arr);
})

console.log(arr);
console.log(forEachResult);*/


// MAP(function)
// function(element,index,array) 

/*var arr = [1,2,2,3,5,3,1,2,3,5,3,123,2];

var mapResult = arr.map(function(elem,i,arr){

	return elem*2
	// console.log(i);
	// console.log(arr);
})

console.log(arr);
console.log(mapResult);*/

//FILTER
// function(element,index,array)
/*
var arr = [12,3,4,5,3123,123,1234,54,12,4343,12112312,4312,431];
var filteredArr = arr.filter(function(elem){
	return elem > 100 // веренет только тот elem для которого условие true
})

console.log(arr);
console.log(filteredArr);
*/


//REDUCE(function, initialValue) 
// function(previousValue,element,index,array);
//prev - последнее значение которое вернула function
/*var arr = [1,2,3,4,5,6,7,8,9,10];

var reduceArr = arr.reduce(function(prev,elem){
	console.log(prev + ' - previous returned value');
	console.log(elem + ' - elem value');
	return prev+elem;
},0)

console.log('__________________________');
console.log(reduceArr);
*/
// REDUCERIGHT(function, initialValue) - двигается справа на лево
// function(previousValue,element,index,array);
//prev - последнее значение которое вернула function

/*var arr = [1,2,3,4,5,6,7,8,9,10];

var reduceArr = arr.reduceRight(function(prev,elem){
	console.log(prev + ' - previous returned value');
	console.log(elem + ' - elem value');
	return prev+elem;
},0)

console.log('__________________________');
console.log(reduceArr);*/



// Pollyfill
// myOwnfilter

/*function myOwnFilter(inputArray, condition){
	var resultArr = [];
	for(var i = 0; i < inputArray.length; i++){
		if(inputArray[i] > condition){
			resultArr.push(inputArray[i])
		}
	}

	return resultArr
}


var arr = [12,3,4,5,3123,123,1234,54,12,4343,12112312,4312,431];
var filteredArr = arr.filter(function(elem){
	return elem > 100 // веренет только тот elem для которого условие true
})

console.log(arr);
console.log(filteredArr);

console.log(myOwnFilter(arr,100));

*/


// TwoDimensionalArray_____________________________________________________

/*var matrix = [
	[1,2,3,4],
	[5,6,7,8],
	[9,10,11,12]
]

console.log(matrix[0][0])


console.log(matrix);


function logArray(arr){
	for(var i = 0; i < arr.length;i++){
		for(var j = 0; j < arr[i].length; j++){
			console.log(arr[i][j]);
		}
	}
}

function createTwoDimensionalArray(size){
	var newArr = new Array(size);
	for(var i = 0; i < newArr.length; i++){
		newArr[i] = new Array(size);
	}	
	return newArr;
}

function fillTwoDimensionalArrayWithValue(arr,value, diagonalValue){
	for(var i = 0; i < arr.length;i++){
		for(var j = 0; j < arr[i].length; j++){
			if(i == j){
				arr[i][j] = diagonalValue;
			}else{
				arr[i][j] = value;
			}	
		}
	}
	return arr;
}

var matrixSize10 = createTwoDimensionalArray(10);
console.log(matrixSize10);
console.log(fillTwoDimensionalArrayWithValue(matrixSize10,0,1));

*/




var str = 'Hello';
var str2 = 'World';
str = str2;
// str = 'asdasd';
str2 = 'some message';

console.log(str);
console.log(str2);

// Refference type
var arr = [1,2,3,4];
var arr2 = [5,6,7,8];

arr = arr2;
arr[3] = 123123;
arr2[2] = 66788776;
 
console.log(arr);
console.log(arr2);
