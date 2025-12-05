class B{
    #balance;
    constructor(B1) {
        this.#balance = B1;
    }
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited: $${amount}`);
    }
    getB() {
        return this.#balance;
    }
}

const a1 = new B(1000);
a1.deposit(500);
console.log(a1.getB());