const carMaker = ['ford', 'toyoto', 'cysis'];

// multi dimention array

const carModel = [['f10']['asdasd']['dsgsdfs']];

const carModel2: string[][] = [];

// Whey do we care about array type

// 1. Intefarance when extracting
const cars = ['ford', 'toyoto', 'maruthi'];

const myCar = cars[0];

// 2. Help us with map,filter reduce
const myCars = carMaker.map((car: string): string => {
	return car.toUpperCase();
});

// 3. Not allow to add different type
carMaker.push('100');
