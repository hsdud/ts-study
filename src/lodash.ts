import * as _ from "lodash";

type Person = {
    name: string;
    age: number;
};

const str = "nacho chili";
const numberArr = [1, 2, 3, 4, 5, 6, 7];
const booleanArr = [true, false, true, true, false, true];
const stringArr = ["a", "b", "c", "d", "e", "f"];
const objArr = [{ name: "nacho", age: 15 }, { name: "chili", age: 16 }, { name: "tom", age: 41 }];
const dog = {
    name: "boy",
    age: 2,
    bark: () => { console.log("hi") }
};
const stringObj = {
    str1: "nacho",
    str2: "chili",
    longStr: "abcdefghijklmnopqrstuvwxyz",
    str3: true
}

/**
 * filter
 */

// 1)
let res1 = _.filter(str);
console.log("res1", res1);

// 2)
let res2 = _.filter(objArr, (value, index, objArr): value is Person => value.age < 20);
console.log("res2", res2);

// 3)
let res3 = _.filter(stringArr);
console.log("res3", res3);

// 4)
let res4_1 = _.filter(dog, (value) => typeof value === 'string');
console.log("res4_1", res4_1);
// console.log("res4_1", res4_1.forEach(a => console.log(a.length)));
let res4_2 = _.filter(dog, (value): value is string => typeof value === 'string');
console.log("res4_2", res4_2);
// console.log("res4_2", res4_2.forEach(a => console.log(a.length)));

// 5)
let res5 = _.filter(dog, (value, key) => key === "age");
console.log(res5);