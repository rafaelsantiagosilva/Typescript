"use strict";

// Tipo de retorno

// Aqui retorna um number
function returnNumber(): number {
	return new Date().getTime();
}

console.log(returnNumber());

// Aqui não retorna nada
function returnVoid(): void {
	console.log("Olá!");
}

returnVoid();

// Parâmetros
function multiply(n1: number, n2: number): number {
	return n1 * n2;
}

console.log(multiply(2, 2));

// Parâmetros com valor padrão -> Aqui por padrão ocorre a exponenciação por 10
function pow(base: number, expoent: number = 10): number {
	return base ** expoent;
}

console.log(multiply(2, 2));

// Parâmetros opcionais
function hello(mensage: string = "Olá", name?: string): string {
	return mensage + name;
}

console.log(hello("Oii"));

// Chamar os parâmetros pelo nome
function divide({dividend, divisor}: {dividend: number, divisor: number}): number {
     return dividend / divisor;
}

console.log(divide({dividend: 4, divisor: 2}));

