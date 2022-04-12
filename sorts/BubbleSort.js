import { swap } from "../utils.js";

export default function bubbleSort(list) {
	var sorted = [...list];

	for (let i = 0; i < sorted.length; i++) {
		for (let j = 0; j < sorted.length - i - 1; j++) {
			if (sorted[j] > sorted[j + 1]) {
				swap(sorted, j, j + 1);
			}
		}
	}

	return sorted;
}
