function twoArraysNthElement(array1, array2, n) {
  return [...array1, ...array2].sort((x, y) => x - y)[n];
}
