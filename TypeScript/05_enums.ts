// Enums numéricos (padrão) -> Todos estes valores dentro dos enum são CONSTANTES
console.log("Enums numéricos");

enum CardinalDirections {
	North, // 0
	East, // 1
	South, // 2
	West, // 3
}

let currentDirection = CardinalDirections.North;

// logs 0
console.log("North=" + currentDirection);

// Enums numéricos: inicializados
console.log("\nEnums numéricos: inicializados");

enum CardinalDirectionsInicializated {
	North = 1,
	East,
	South,
	West,
}

// logs 1
console.log("North=" + CardinalDirectionsInicializated.North);

// logs 4
console.log("West=" + CardinalDirectionsInicializated.West);

// Enums numéricos: todos os valores inicializados
console.log("\nEnums numéricos: todos os valores inicializados");

enum StatusCodes {
	NotFound = 404,
	Success = 200,
	Accepted = 202,
	BadRequest = 400,
}

// logs 404
console.log("Not Found=" + StatusCodes.NotFound);

// logs 200
console.log("Success=" + StatusCodes.Success);

// Strings
console.log("\nEnum com Strings");

enum CardinalDirectionsString {
	North = "Norte",
	East = "Leste",
	South = "Sul",
	West = "Oeste",
}

// logs 'Norte'
console.log("North=" + CardinalDirectionsString.North);

// logs 'Oeste
console.log("West=" + CardinalDirectionsString.West);
