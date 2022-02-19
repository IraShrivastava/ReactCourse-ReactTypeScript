//Primitives: number, string, boolean
//More complex types: arrays, objects
//Function types, parameters

//Primitives

let age: number;

age = 12;

let userName: string;

userName = 'Ira';

let isInstructor: boolean;

isInstructor = false

//More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking']

type Person = {
    name: string;
    age: number;
}

let person: Person

person = {
    name: 'Ira',
    age: 25
}

/* person = {
    isEmployee: false
} */

let people: Person[]

//Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341

//Functions & types

function addBasic(a: number, b: number) {
    return a + b
}

function print(value: any) {
    console.log(value)
}

//Generics

function insertAtBeg<T>(array: T[], value: T) {
    const newArr = [value, ...array]
    return newArr
}

const demoArr = [1, 2, 3];

const updatedArr = insertAtBeg(demoArr, -1); //[-1, 1, 2, 3]

//updatedArr[0].split('')