class Vehicle {
	drive(): void {
		console.log('chugga chugga');
	}
	hunk(): void {
		console.log('beep');
	}
}

class Car extends Vehicle {
	drive(): void {
		console.log('vroom');
	}
}
const car = new Car();
car.drive();
car.hunk();
