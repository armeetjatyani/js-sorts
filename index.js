import { bubbleSort, selectionSort, insertionSort, mergeSort } from "./sorts.js";
import { gen } from "./utils.js";

/**
 * Sort Algorithm
 * 1 - Bubble Sort
 * 2 - Selection Sort
 * 3 - Insertion Sort
 * 4 - Merge Sort
 * 5 - Quick Sort
 */
const algorithm = 4;
const size = 200;

// list to be sorted
var list = [4, 1, 3, 2];
var list = [1, 3, 5, 2, 4];
// var list = gen(size);
var sorted = [];

switch (algorithm) {
	case 1:
		console.log("(1) Bubble Sort...");
		sorted = bubbleSort(list);
		break;
	case 2:
		console.log("(2) Selection Sort...");
		sorted = selectionSort(list);
		break;
	case 3:
		console.log("(3) Insertion Sort...");
		sorted = insertionSort(list);
    break;
  case 4:
    console.log("(4) Merge Sort(Recursive)...");
		sorted = mergeSort(list);
    break;
}

console.log("\t-> Original:\n\t", list);
console.log("\t-> Sorted:\n\t", sorted);
