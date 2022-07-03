const add = (a: number, b: number) => {
	return a + b;
};

const subtract = (a: number, b: number): number => {
	return a - b;
};

function multiple(a: number, b: number): number {
	return a * b;
}

const divide = function (a: number, b: number): number {
	return a / b;
};

const noReturnFunc = (message: string): void => {
	console.log(message);
};

const throwNewError = (message: string) => {
	throw new Error(message);
};

const todayWeather = {
	date: new Date(),
	weather: 'raining'
};

const logWeather = (todayWeather: { date: Date; weather: string }): void => {
	console.log(todayWeather.date);
	console.log(todayWeather.weather);
};

// destructuring
const logWeatherWithDestructuring = ({
	date,
	weather
}: {
	date: Date;
	weather: string;
}): void => {
	console.log(date);
	console.log(weather);
};

logWeather(todayWeather);
