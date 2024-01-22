"use strict";
// Tipos Básicos
let age = 5;
const firstName = 'Antonio';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ['Antonio', 'Toni', 'Pedro', 'Marcio'];
const Geral = ['oi', 2, false];
// Tupla
const person = [1, "oi"];
// Lista de Tuplas
const people = [
    [1, 'jane'],
    [2, "Doe"],
];
// Intersections
const productId = '1';
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = 'Boné';
// let itemId = productName as string;
let itemId = productName;
console.log(age);
