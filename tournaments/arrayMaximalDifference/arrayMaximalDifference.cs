int arrayMaximalDifference(int[] inputArray) {
    Array.Sort(inputArray);
    
    return inputArray[inputArray.Length - 1] - inputArray[0];
}
