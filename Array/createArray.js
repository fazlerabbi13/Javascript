let arr = [10,50,20,30,40];
console.log(arr);

// console.log(arr[0]);
// console.log(arr[1]);

// Accessing the Last Element of an Array

let last = arr[arr.length - 1];
console.log(last);

// Modifying the Array Elements

// arr[0] = 80;
// console.log(arr);

// Adding Elements to the Array

arr.push(100);
console.log(arr);

arr.unshift(400);
console.log(arr);

// Removing Elements from an Array

arr.pop();
arr.pop();
arr.shift();
arr.shift();

arr.splice(1,2);
console.log(arr);