import { swap } from "../utils.js";

export default function insertionSort(list) {
	var sorted = [...list];

	for (let i = 1; i < sorted.length; i++) {
		let pos = i;
		let val = sorted[i];

		// find pos to insert at
		for (let j = i - 1; j > 0; j--) {
			if (sorted[j] > val) {
				pos = j;
			} else {
				break;
			}
		}

		// shift necessary elements right
		for (let k = i; k > pos; k--) {
			sorted[k] = sorted[k - 1];
		}

		// move val to right position
		sorted[pos] = val;
	}

	return sorted;
}
