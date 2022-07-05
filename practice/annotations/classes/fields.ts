class Feature {
	constructor(public color: string) {
		this.color = color;
	}
	hunk(): void {
		console.log('beep');
	}
}

class Maruthi extends Feature {
	constructor(public wheels: number, color: string) {
		super(color);
	}
}

const jeep = new Maruthi(4, 'orange');
console.log(jeep.color, jeep.wheels);






