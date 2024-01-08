// Casting -> Muda diretamente o tipo da variável, se possível de acordo com seu valor armazenado (desde que seja unknown)
let myX: unknown = "hello";
console.log((myX as string).length); // Tratando como string

console.log((<string>myX).length);

// Casting a força
let myY: string = "Hello";
// console.log(((myX as unknown) as number).toFixed(2)); // Tentou ser convertido em 'número', mas claro que não da certo
