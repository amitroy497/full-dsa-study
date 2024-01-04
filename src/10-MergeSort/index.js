// Problem :- Given an array of integers, sort the array.

// Merge sort idea

// Divide the array into sub arrays, each containing only one element. (An array with one element is considered sorted).

// Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.

const mergeSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const leftArr = arr.slice(0, mid);
	const rightArr = arr.slice(mid);
	return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
	const sortedArr = [];
	while (leftArr.length && rightArr.length) {
		if (leftArr[0] <= rightArr[0]) {
			sortedArr.push(leftArr.shift());
		} else {
			sortedArr.push(rightArr.shift());
		}
	}
	return [...sortedArr, ...leftArr, ...rightArr];
};

console.log('mergeSort([-6, 20, 8, -2, 4]) = ', mergeSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]

// There are 2 parts of function.
// We recursively divide the function into halves.
// So first half is O(log n) Time Complexity.
// Second part, we merge the array, and this contains the while look, so time complexity is O(n).

// So resulting time complexity is O(n logn)
