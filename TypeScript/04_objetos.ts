// Sintaxe básica
const CAR: {type: string, model: string, year:number} = {
     type: "Toyota",
     model: "Corolla",
     year: 2009
}

// Propriedades opcionais
const PERSON: {name: string, age?: number} = {
     name: "John"
     // Não informei "age" e não deu erro
}

// Tipo do indice do objeto
const NAME_AGE_MAP: { [index: string]:number } = {};
NAME_AGE_MAP.Jack = 25; // Index: Jack (String), Value: 25 (Number)
// NAME_AGE_MAP.Mark = "Fifty"; Erro, pois o valor tem que ser number
// NAME_AGE_MAP.2 = "Mary"; Erro, pois o indice tem que ser uma string