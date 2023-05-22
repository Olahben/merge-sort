const arr = [5, 3, 8, 6, 4, 1, 7, 2];

function merge(left, right, m, n) {
  const sorted = [];
  let i = 0,
    j = 0,
    k = 0;

  while (i <= m && j <= n) {
    if (left[i] < right[j]) {
      sorted[k++] = left[i++];
    } else {
      sorted[k++] = right[j++];
    }
  }

  for (; i <= m; i++) {
    sorted[k++] = left[i];
  }

  for (; j <= n; j++) {
    sorted[k++] = right[j];
  }

  return sorted;
}

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    const mid = list.length / 2;
    const left = mergeSort(list.slice(0, mid));
    const right = mergeSort(list.slice(mid, list.length));
    if (left === undefined) return list;
    if (right === undefined) return list;
    return merge(left, right, left.length - 1, right.length - 1);
  }
}

console.log(mergeSort(arr));
