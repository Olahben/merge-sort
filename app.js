const arr = [5, 3, 8, 6, 4, 1, 7, 2];

function merge(left, right) {
  const sorted = [];
  let i = 0,
    j = 0,
    k = 0;

  if (left[i] < right[j]) {
    sorted[k] = left[i];
  } else {
    
  }
}

function mergeSort(list) {
  if (list.length <= 1) {
    return list;
  } else {
    const mid = list.length / 2;
    const left = mergeSort(list.slice(0, mid));
    const right = mergeSort(list.slice(mid, list.length));
    return merge(left, right);
  }
}

mergeSort(arr);
