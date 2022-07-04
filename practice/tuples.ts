// Tuples is like array but it maintaine order.

const drinks = {
	name: 'coca cola',
	carbonated: true,
	sugar: 40
};

const cocacola = ['coca cola', true, 40]; // array
const cocacola1: [string, boolean, number] = ['coca cola', true, 40]; // tuples

// with type alias

type Drinks = [string, boolean, number];

const sprites: Drinks = ['sprites', true, 89];
