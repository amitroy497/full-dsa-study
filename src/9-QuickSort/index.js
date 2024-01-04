// Problem :- Given an array of integers, sort the array.

// Quick sort idea

// Identify the pivot element in the array.
// Pick first element as pivot.
// Pick last element as pivot (our approach)
// Pick a random element as pivot.
// Pick median as pivot.

// Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array.

// Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition.

// Repeatedly concatenate the left array, pivot and right array till one sorted array remains.

const quickSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}
	let pivot = arr[arr.length - 1];
	let left = [];
	let right = [];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log('quickSort([-6, 20, 8, -2, 4]) = ', quickSort([-6, 20, 8, -2, 4])); // [-6, -2, 4, 8, 20]

// The worst case Time Complexity is O(n2), this happens when the array is already sorted.
// Instead of partitioning our arrays into smaller array, we end up partitioning into an empty array and an full array.
// We end up comparing to every other element and that is Quadratic Time Complexity.

// However, Quicksort algorithm is a popular algorithm, because, its Average Case Time Complexity is O(n log n).
// We recursively divide the arrays into smaller arrays, which is O(log n) and we also have a for loop which is O(n).
// Combining the two, and we have O(n log n).

// It is very unlikely that we would sort already sorted array. The worst case complexity even though it is quadratic, the average case complexity is what matters with this algorithm.
