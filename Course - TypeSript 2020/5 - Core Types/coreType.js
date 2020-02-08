"use strict";
var person = {
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
var product = {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
        title: 'Rec Carpet',
        description: 'A great carpet - almost brand-new!'
    }
};
var p = {
    id: 'abc1',
    price: 12.99,
    tags: ['Pgreat-offer', 'hot-and-new'],
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
var favoriteActivities;
var anyFav;
favoriteActivities = ['cooking', 'drinking'];
for (var _i = 0, _a = product.tags; _i < _a.length; _i++) {
    var tag = _a[_i];
    console.log("Minha tag: " + tag.toUpperCase());
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 9] = "READ_ONLY";
    Role["AUTHOR"] = "au";
})(Role || (Role = {}));
;
var jeremias = {
    role: Role.AUTHOR,
    name: "Jeremias",
    listTask: [1, '01', '2']
};
console.log(jeremias.name);
console.log(jeremias.role);
console.log(jeremias.listTask);
var per = {
    num: '1'
};
function addSome(op1, op2) {
    if (typeof op1 === 'number' || typeof op2 === 'number') {
        var resp = +op1 + +op2;
        console.log(resp);
        return resp;
    }
    else {
        var resp = op1.toString() + op2.toString();
        return resp;
        console.log(resp);
    }
}
addSome(5, 2);
addSome("jere", "Sera");
function addNumbers(n1, n2) {
    return n1 + n2;
}
var combineValues;
var combineValues2;
combineValues = addNumbers;
combineValues2 = addNumbers;
console.log(combineValues(1, 2));
console.log(combineValues2(11, 2));
