class Person {
	private readonly name: string; // Não pode ser alterado, somente lido, depois da inicialização do constructor
	private age: number;
	protected married: boolean;

	// Métodos especiais

	// Constructor
	constructor(name: string, age: number, married: boolean) {
		this.name = name;
		this.age = age;
		this.married = married;
	}

	// Getters e Setters
	public get getName(): string {
		return this.name;
	}

	// public set setName(name: string) {
	// 	this.name = name;
	// } // Não faz sentido ter pois é readonly

	public get getAge(): number {
		return this.age;
	}

	public set setAge(age: number) {
		this.age = age;
	}

	public get isMarried(): boolean {
		return this.married;
	}

	public set setMarried(married: boolean) {
		this.married = married;
	}
}

// Interfaces nas classes
interface Shape {
	getArea: () => number;
}

class Rectangle implements Shape {
	public constructor(
		protected readonly myWidth: number,
		protected readonly myHeight: number
	) {}

	public getArea(): number {
		return this.width * this.height;
	}
}

// Herança e Polimorfismo
class Square extends Rectangle {
	public constructor(myWidth: number) {
		super(myWidth, myWidth); // Usando o constructor da superclasse
	}

	// Polimorfismo
	public override toString(): string {
		return `Square[width=${this.width}]`;
	}
}

// Classes abstratas
abstract class Polygon {
	public abstract getArea(): number;

	public toString(): string {
		return `Polygon[area=${this.getArea()}]`;
	}
}

class NewRectangle extends Polygon {
	public constructor(
		protected readonly width: number,
		protected readonly height: number
	) {
		super();
	}

	public getArea(): number {
		return this.width * this.height;
	}
}
