interface Reportable {
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

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldVehicle);
