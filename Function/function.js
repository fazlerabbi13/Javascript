// function greet(name){
//     console.log("Hello " + name);
// }
// greet("Fazle Rabbi");

function greet(name = "Fazle Rabbi"){
    console.log("Hello, " + name);
}
greet();
greet("World");