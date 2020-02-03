console.log("Your code goes here...");
console.log("Serafim code goes here...");
console.log("jeremias code goes here...");

function add(n1:number, n2: number) {
    const result = n1 + n2;
    console.log(result);
    return n1 + n2;
}
const n1 = '5';
const n2 = 2.8;
console.log(typeof(n1));
console.log(typeof(n2));

console.log("Mensagem 2", add(1, 3));
const resp = add(n1, n2);
console.log("Mensagem 2", resp);