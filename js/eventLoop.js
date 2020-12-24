// ЗАПОМНИТЬ - EVENT LOOP.

/*setTimeout(()=>{
	console.log(4)
}, 0);


function log(){
	console.log(1);
}

queueMicrotask(log);

setTimeout(()=>{
	console.log(2);
}, 0);

console.log(3);

*/
// 1 - Основной поток кода
// 2 - Микрозадачи - Promise, queueMicrotask(){}
// 3 - Макрозадачи - setTimeout();




// Pattern
// Stack + Queue
// push - pop
const stack = [3,1];
stack.push(1);
stack.push(4);

const stackTaken = stack.pop();
console.log(stackTaken)

//push - shift
const queue = [4,2,1,2];

queue.push(4);
queue.push(2);

const queueTaken = queue.shift();
console.log(queueTaken);




