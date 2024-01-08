// Tuplas (em TS) são arrays com tipos definidos por indice
let ourTuple: [number, boolean, string]; // Tem que ser obrigatoriamente nessa ordem
ourTuple = [5, false, 'Codando...']; 

// Tuplas readonly
let ourTupleReadOnly: [number, boolean, string] = [1, true, 'verdadeiro']; // Não pode alterar ou adicionar

// Indices com nomes
const GRAPH: [number1: number, number2: number] = [1, 2];

// Desestruturando tuplas
const [x, y] = GRAPH;