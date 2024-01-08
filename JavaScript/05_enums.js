// Enums numéricos (padrão) -> Todos estes valores dentro dos enum são CONSTANTES
console.log("Enums numéricos");
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 2] = "South";
    CardinalDirections[CardinalDirections["West"] = 3] = "West";
})(CardinalDirections || (CardinalDirections = {}));
var currentDirection = CardinalDirections.North;
// logs 0
console.log("North=" + currentDirection);
// Enums numéricos: inicializados
console.log("\nEnums numéricos: inicializados");
var CardinalDirectionsInicializated;
(function (CardinalDirectionsInicializated) {
    CardinalDirectionsInicializated[CardinalDirectionsInicializated["North"] = 1] = "North";
    CardinalDirectionsInicializated[CardinalDirectionsInicializated["East"] = 2] = "East";
    CardinalDirectionsInicializated[CardinalDirectionsInicializated["South"] = 3] = "South";
    CardinalDirectionsInicializated[CardinalDirectionsInicializated["West"] = 4] = "West";
})(CardinalDirectionsInicializated || (CardinalDirectionsInicializated = {}));
// logs 1
console.log("North=" + CardinalDirectionsInicializated.North);
// logs 4
console.log("West=" + CardinalDirectionsInicializated.West);
// Enums numéricos: todos os valores inicializados
console.log("\nEnums numéricos: todos os valores inicializados");
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
// logs 404
console.log("Not Found=" + StatusCodes.NotFound);
// logs 200
console.log("Success=" + StatusCodes.Success);
// Strings
console.log("\nEnum com Strings");
var CardinalDirectionsString;
(function (CardinalDirectionsString) {
    CardinalDirectionsString["North"] = "Norte";
    CardinalDirectionsString["East"] = "Leste";
    CardinalDirectionsString["South"] = "Sul";
    CardinalDirectionsString["West"] = "Oeste";
})(CardinalDirectionsString || (CardinalDirectionsString = {}));
// logs 'Norte'
console.log("North=" + CardinalDirectionsString.North);
// logs 'Oeste
console.log("West=" + CardinalDirectionsString.West);
