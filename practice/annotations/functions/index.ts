const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function multiple(a: number, b: number): number {
	return a * b;
}

const divide = function (a: number, b: number): number {
	return a / b;
};

const noReturnFunc = (message: string): void => {
	console.log(message);
};

const throwNewError = (message: string) => {
	throw new Error(message);
};
