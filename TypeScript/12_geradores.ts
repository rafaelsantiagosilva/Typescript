// Geradores/Generics -> Funções que criam variáveis com base em tipos passados como parâmetro
function createPair<Type1, Type2>(
	value1: Type1,
	value2: Type2
): [Type1, Type2] {
	return [value1, value2];
}

console.log(createPair<string, number>("Hello", 42)); // logs ['Hello', 42]

// Classes
class NamedValue<T> {
	private _value: T | undefined;

	constructor(private name: string) {}

	public setValue(value: T) {
		this._value = value;
	}

	public getValue(): T | undefined {
		return this._value;
	}

	public toString(): string {
		return `${this.name}: ${this._value}`;
	}
}
