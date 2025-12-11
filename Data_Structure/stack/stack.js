class Stack {
    constructor() {
        this.items = [];
    }

    // Push element into the stack
    push(element) {
        this.items.push(element);
    }

    // Remove and return top element
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.items.pop();
    }

   // Return top element without removing
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty!";
        }
        return this.items[this.items.length - 1];
    }

//     // Check if stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

//     // Return stack size
    size() {
        return this.items.length;
    }

   // Print stack
    print() {
        console.log(this.items.toString());
    }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print();       
console.log(stack.pop());   
console.log(stack.peek());  
console.log(stack.size()); 
