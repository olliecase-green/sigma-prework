function returnMaxAndMin(arr) {
  let maxNum = arr[0];
  let minNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    } else if (arr[i] < minNum) {
      minNum = arr[i];
    }
  }
  return [minNum, maxNum];
}

console.log(returnMaxAndMin([2, 4, 1, 0, 2, -1]));
console.log(returnMaxAndMin([20, 50, 12, 6, 14, 8]));
