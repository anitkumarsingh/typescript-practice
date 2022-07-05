interface Vehicle {
	name: string;
	launch: Date;
	broken: boolean;
	summary(): string;
}

const oldVehicle = {
	name: 'Civic',
	launch: new Date(),
	broken: true,
	summary(): string {
		return `Name of the vehicle is ${this.name}`;
	}
};

const printVehicle = (vehicle: Vehicle): void => {
	console.log(vehicle.summary());
};

printVehicle(oldVehicle);
