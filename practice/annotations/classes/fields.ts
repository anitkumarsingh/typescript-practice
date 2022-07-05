class Feature {
	constructor(public color: string) {
		this.color = color;
	}
	hunk(): void {
		console.log('beep');
	}
}

const jeep = new Feature('orange');
console.log(jeep.color);
