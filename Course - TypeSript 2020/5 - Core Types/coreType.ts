const person: {
    name: string,
    age: number,
    role: [number, string];
} = {
// const person = {
    age: 30,
    name: "Jeremias",
    role: [2, 'author'],

};

person.role.push('admin');
// person.role[1] = 10;

console.log(person);

// person.surname = "Serafim"

console.log(person.name);
console.log(person.age);
// console.log(person.surname);

const product = {
    id: 'abc1',
    price: 12.99,
    tags:['great-offer','hot-and-new'],
    details: {
        title: 'Rec Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};

const p: {
    id: string,
    price: number,
    tags: string[],
    details: {
        title: string,
        description: string
    }
} = {
    id: 'abc1',
    price: 12.99,
    tags:['Pgreat-offer','hot-and-new'],
    details: {
        title: 'PRec Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};

console.log(product.tags);
console.log(product.details.title);

console.log(p.tags);
console.log(p.details.title);


// Array

let favoriteActivities: string[];
let anyFav: any[];

favoriteActivities = ['cooking', 'drinking'];

for (const tag of product.tags) {
    console.log("Minha tag: " + tag.toUpperCase());
}


enum Role {ADMIN = 5, READ_ONLY = 9, AUTHOR = 'au'};

const jeremias: {
    role: Role,
    name: string,
    listTask: any[]
} = {
    role: Role.AUTHOR,
    name: "Jeremias",
    listTask: [1,'01','2']
}

console.log(jeremias.name);
console.log(jeremias.role);
console.log(jeremias.listTask);


type Combine = number | string;

const per: {
    num: Combine
} = {
    num: '1'
};

function addSome(op1: Combine, op2: Combine): number | string {
    if(typeof op1 === 'number' || typeof op2 === 'number' ) {
        let resp = +op1 + +op2;
        console.log(resp);
        return resp;
    } else {
        let resp = op1.toString() + op2.toString();
        return resp;
        console.log(resp);
    }
}

addSome(5, 2);
addSome("jere", "Sera");


function addNumbers(n1: number, n2: number): number {
    return n1+n2;
}


let combineValues: Function;
let combineValues2: (a:number, b:number)=> number;

combineValues = addNumbers;
combineValues2 = addNumbers;

console.log(combineValues(1,2));
console.log(combineValues2(11,2));


