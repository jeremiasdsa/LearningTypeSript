console.log("Your code goes here...");
console.log("Serafim code goes here...");
console.log("jeremias code goes here...");

function add(n1:number, n2: number) {
    const result = n1 + n2;
    console.log(result);
    return n1 + n2;
}

function add2(n1:number, n2: number) {
    if (typeof n1 !== "number" || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    const result = n1 + n2;
    console.log(result);
    return n1 + n2;
}

const n1 = 5;
const n2 = 2.8;
const n3 = '5'
console.log(typeof(n1));
console.log(typeof(n2));

// console.log("Mensagem 2", add(1, 3));
// const resp = add(n1, n2);
// console.log("Mensagem 2", resp);

const resp2 = add2(n1, n3);