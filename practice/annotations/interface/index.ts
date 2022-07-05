const oldVehicle = {
	name: 'Civic',
	launch: 2000,
	broken: true
};

const printVehicle = (vehicle: {
	name: string;
	launch: number;
	broken: boolean;
}): void => {
	console.log(`Name :${vehicle.name}`);
	console.log(`Launch Year :${vehicle.launch}`);
	console.log(`Functional :${vehicle.broken}`);
};

printVehicle(oldVehicle);
