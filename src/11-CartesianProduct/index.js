// Problem :- Given two finite non-empty sets, find their Cartesian Product.

// Cartesian product idea

// Traverse each array and pair each element in the first array with each element in the second array.

const cartesianProduct = (arr1, arr2) => {
	const result = [];
	for (let i = 0; i < arr1.length; i++) {
		for (let j = 0; j < arr2.length; j++) {
			result.push([arr1[i], arr2[j]]);
		}
	}
	return result;
};

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(
	`cartesianProduct([${arr1}], [${arr2}]) = `,
	cartesianProduct(arr1, arr2)
); //  [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

// Time complexity is O(mn), as the there are arrays of different length.
// If 2 arrays is of same length than time complexity will be O(n2)
