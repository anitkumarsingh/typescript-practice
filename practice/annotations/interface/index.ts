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

const drink = {
	name: 'coca cola',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar} miligrams of sugar`;
	}
};
const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldVehicle);
printSummary(drink);