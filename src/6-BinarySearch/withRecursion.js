// Problem :- Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

const recursiveBinarySearch = (arr, target) => {
	return search(arr, target, 0, arr.length - 1);
};

const search = (arr, target, leftIndex, rightIndex) => {
	if (leftIndex > rightIndex) {
		return -1;
	}
	let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
	if (target === arr[middleIndex]) {
		return middleIndex;
	} else if (target < arr[middleIndex]) {
		return search(arr, target, leftIndex, middleIndex - 1);
	} else {
		return search(arr, target, middleIndex + 1, rightIndex);
	}
};

console.log(
	'recursiveBinarySearch([-5, 2, 4, 6, 10], 10) = ',
	recursiveBinarySearch([-5, 2, 4, 6, 10], 10)
); // 4
console.log(
	'recursiveBinarySearch([-5, 2, 4, 6, 10], 6) = ',
	recursiveBinarySearch([-5, 2, 4, 6, 10], 6)
); // 3
console.log(
	'recursiveBinarySearch([-5, 2, 4, 6, 10], 20) = ',
	recursiveBinarySearch([-5, 2, 4, 6, 10], 20)
); // -1

// Our function contains one while loop, but the detail is inside the while loop.
// In every iteration we input size by half.
// So Time complexity is O(log n).
