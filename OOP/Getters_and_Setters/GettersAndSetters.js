const person= {
    name1: "Fazle",
    name2: "Rabbi",
    get Name() {
        return `${this.n1} ${this.n2}`;
    },
    // set Name(name) {
    //     [this.n1, this.n2] = name.split(" ");
    // }
};

console.log(p.Name);
p.Name = "mohammad ali";
console.log(p.Name);