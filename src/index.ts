// Tipos Básicos
let age: number = 5;
const firstName: string = 'Antonio';
const isValid: boolean = true;
let idk: any = 5;

idk = '12';
idk = true;

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ['Antonio', 'Toni', 'Pedro', 'Marcio'];
const Geral: any[] = ['oi', 2, false];

// Tupla
const person: [number, string] = [1, "oi"];

// Lista de Tuplas
const people: [number, string][] = [
	[1, 'jane'],
	[2, "Doe"],
];

// Intersections
const productId: string | number | boolean = '1';

// Enum

enum Direction {
	Up = 1,
	Down = 2,
	Left = 'Esquerda'
}

const direction = Direction.Up

// Type Assertions
const productName: any = 'Boné';

// let itemId = productName as string;
let itemId = <string>productName


console.log(age);