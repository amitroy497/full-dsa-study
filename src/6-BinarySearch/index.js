// Problem :- Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

// Pseudocode
// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array.
// If target us equal to the middle element, return the middle element index.
// If target is less than the middle element, binary search left half of the array.
// If target is greater than the middle element, binary search right half of the array.

const binarySearch = (arr, target) => {
	let leftIndex = 0;
	let rightIndex = arr.length - 1;

	while (leftIndex <= rightIndex) {
		let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
		if (target === arr[middleIndex]) {
			return middleIndex;
		} else if (target < arr[middleIndex]) {
			rightIndex = middleIndex - 1;
		} else {
			leftIndex = middleIndex + 1;
		}
	}
	return -1;
};

console.log(
	'binarySearch([-5, 2, 4, 6, 10], 10) = ',
	binarySearch([-5, 2, 4, 6, 10], 10)
); // 4
console.log(
	'binarySearch([-5, 2, 4, 6, 10], 6) = ',
	binarySearch([-5, 2, 4, 6, 10], 6)
); // 3
console.log(
	'binarySearch([-5, 2, 4, 6, 10], 20) = ',
	binarySearch([-5, 2, 4, 6, 10], 20)
); // -1

// Our function contains one while loop, but the detail is inside the while loop.
// In every iteration we input size by half.
// So Time complexity is O(log n).
