"use strict";

// Aliases -> Tipos que eu crio!
type CarYear = number;
type CarType = string;
type CarModel = string;

type Car = {
	year: CarYear;
	type: CarType;
	model: CarModel;
};

const CAR_YEAR: CarYear = 2001;
const CAR_TYPE: CarType = "Toyota";
const CAR_MODEL: CarModel = "Corolla";

const MY_CAR: Car = {
	year: CAR_YEAR,
	type: CAR_TYPE,
	model: CAR_MODEL,
};
