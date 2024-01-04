// Problem :- Given an array of integers, sort the array.

// Insertion sort idea

// Virtually split the array into a sorted and an unsorted part.

// Assume that the first element is already sorted and remaining elements are unsorted.

// Select an unsorted element and compare with all elements in the sorted part.

// If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part.
// Else, shift larger elements in the sorted part towards the right.

// Insert the selected element at the right index.

// Repeat till all the unsorted elements are placed in the order.

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let numberToInsert = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > numberToInsert) {
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = numberToInsert;
	}
	return arr;
};

console.log(
	'insertionSort([-6, 20, 8, -2, 4]) = ',
	insertionSort([-6, 20, 8, -2, 4])
); // [-6, -2, 4, 8, 20]

// Our function contains two loops, a while loop nested inside a for loop.
// Big-O is Quadratic Time Complexity O(n2).
// As a number of elements in the array increases, number comparison increases quadratically.
