// Especificando o tipo do array
let names: string[] = []; // Array somente de strings
names.push("John");

// Arrays que só podem ser lidos e não modificados
let namesOnlyRead: readonly string[] = ["Dylan", "Jack"];
console.log(namesOnlyRead[0]);

// Somente variáveis de mesmo tipo podem receber os valores do array
let ages: number[] = [12, 35, 31, 67, 89];
let firstAge: number = ages[0];