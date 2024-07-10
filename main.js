function fibs(number) {
	const array = [0, 1];
	if (number > 2) {
		for (let i = 1; i < number - 1; i++) {
			array.push(array[i] + array[i - 1]);
		}
	} else if (number === 1) {
		return [0];
	} else if (number === 2) {
		return [0, 1];
	}
	return array;
}
