const deque = []; 

deque.unshift(10); 
deque.push(20);    
deque.unshift(5);  
deque.push(30); 

console.log("Deque after insertions:", deque);

deque.shift(); 
deque.pop();   

console.log("Deque after deletions:", deque);