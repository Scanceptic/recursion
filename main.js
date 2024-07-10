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

function fibsRec(number, array = [0, 1]) {
	// base case
	if (array.length === number) {
		// if array has reached required length
		return array;
	} else {
		// else add a new element onto array equal to sum of last 2 elements
		array.push(array[array.length - 1] + array[array.length - 2]);
		// call fibsRec on new array to continue until array is complete
		return fibsRec(number, array);
	}
}

function mergeSort(array, sortedArray = []) {
	// base case
	if (sortedArray.length === array.length) {
		return sortedArray;
	} else {
		// do something
		let lowestValue;
		// go from start to end of array
		for (let i = 0; i < array.length; i++) {
			// if i is less than the current lowest value or no current lowest value exists
			if (
				typeof array[i] !== "string" &&
				(array[i] < lowestValue || typeof lowestValue === "undefined")
			) {
				// replace held lowest value with i
				lowestValue = array[i];
				//console.log(lowestValue);
			}
		}
		// push lowest value to sortedArray
		sortedArray.push(lowestValue);
		//console.log(sortedArray);
		// remove lowest value from original array and replace with empty string
		array.splice(array.indexOf(lowestValue), 1, " ");
		//console.log(array);
		// return mergeSort(array, sortedArray) again
		return mergeSort(array, sortedArray);
	}
}
