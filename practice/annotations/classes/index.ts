class Vehicle {
	hunk(): void {
		console.log('beep');
	}
	protected reverse(): void {
		console.log('supported');
	}
}

const vehicle = new Vehicle();
// vehicle.reverse();

class Car extends Vehicle {
	private drive(): void {
		console.log('vroom');
	}
	startDrivingProcess(): void {
		this.drive();
	}
}
const car = new Car();
car.startDrivingProcess();
car.hunk();
