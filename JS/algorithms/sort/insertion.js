arr = [5, 1, 10, 1, 1, 1];
// const arr = ["b", "d", "c", "a"];

const insertionSort = (arr) => {
  const n = arr.length;

  for (let i = 1; i < n; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }

  return arr;
};

console.log(insertionSort(arr));
