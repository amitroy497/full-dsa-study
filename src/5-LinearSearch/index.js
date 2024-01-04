// Problem :- Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Pseudocode

// Start at the first element in the array and move towards the last.
// At each element though, check if the element is equal to the target element.
// If element found, return the index of the element.
// If element not found, return -1.

const linearSearch = (arr, target) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === target) {
			return i;
		}
	}
	return -1;
};

console.log(
	'linearSearch([-5, 2, 10, 4, 6], 10) = ',
	linearSearch([-5, 2, 10, 4, 6], 10)
); // 2
console.log(
	'linearSearch([-5, 2, 10, 4, 6], 6) = ',
	linearSearch([-5, 2, 10, 4, 6], 6)
); // 4
console.log(
	'linearSearch([-5, 2, 10, 4, 6], 20) = ',
	linearSearch([-5, 2, 10, 4, 6], 20)
); // -1

// Big-O Time Complexity of Linear Search is O(n), as size of array increases, number of times the if statement in the for loop runs also increases.
