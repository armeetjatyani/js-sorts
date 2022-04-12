import { swap } from "../utils.js";

export default function selectionSort(list) {
	var sorted = [...list];

	for (let i = 0; i < sorted.length; i++) {
		let minIndex = i;
		for (let j = i + 1; j < sorted.length; j++) {
			if (sorted[j] < sorted[minIndex]) {
				minIndex = j;
			}
		}
		swap(sorted, i, minIndex);
	}

	return sorted;
}
