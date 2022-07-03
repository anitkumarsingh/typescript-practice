const person = {
	name: 'John',
	age: 20,
	coords: {
		log: 0,
		lat: 12
	},
	setAge(age: number): void {
		this.age = age;
	}
};

const { age }: { age: number } = person;
const {
	coords: { log, lat }
}: { coords: { log: number; lat: number } } = person;
