// Problem :- Given an array of integers, sort the array.

// Bubble sort idea
// Compare adjacent elements in the array and swap the positions if they are not in the intended order.
// Repeat the instruction as we step through each element in the array.
// Once we step through the whole array with no swaps, the array is sorted.

const bubbleSort = (arr) => {
	let swapped;
	do {
		swapped = false;
		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let temp = arr[i];
				arr[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped);
	return arr;
};

console.log(
	'bubbleSort([-6, 20, 8, -2, 4]) = ',
	bubbleSort([-6, 20, 8, -2, 4])
); // [-6, -2, 4, 8, 20]
