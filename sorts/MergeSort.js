import { swap } from "../utils.js";

function merge(list, first, mid, last) {
	var mergedList = [];
	var left = 0;
	var right = mid + 1;

	while (left <= mid && right <= last) {
		if (list[left] < list[right]) {
			mergedList.push(list[left++]);
		} else {
			mergedList.push(list[right++]);
		}
	}

	// add remaining elements
	if (left < mid) {
		while (left <= mid) {
			mergedList.push(list[left++]);
		}
	}

	if (right < last) {
		while (right <= last) {
			mergedList.push(list[right++]);
		}
	}

	return mergedList;
}

function mergeSort(list, first, last) {
	var sorted = [...list];

	if (last - first === 1) {
		if (sorted[0] > sorted[1]) {
			swap(sorted, 0, 1);
		}
		return sorted;
	}

	const mid = (first + last) / 2;

	mergeSort(sorted, first, mid);
	mergeSort(sorted, mid + 1, last);
	sorted = merge(sorted, first, mid, last);

	return sorted;
}

export default mergeSort;
