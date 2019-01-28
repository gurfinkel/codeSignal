
Given an array of strings  `initialArray`, produce a single string as follows:

Repeat the following steps while there is more than one string in the array:

-   find the shortest string in the array (if there are several strings of the same length take the  _leftmost_  one);
-   find the shortest string among the rest (if there are several strings of the same length take the  _rightmost_  one);
-   extract the chosen strings from the array;
-   append the result of their concatenation (the second string should be added to the end of the first string) to the right end of the array.

After the algorithm has finished, there will be a single string left in the array. Return that string.

Example

For  `initialArray = ["aaa", "dd", "bbbbb"]`, the output should be  
`concatenationProcess(initialArray) = "bbbbbddaaa"`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] array.string initialArray**
    
    A non-empty array of strings.
    
    _Guaranteed constraints:_  
    `1 ≤ initialArray.length ≤ 10`,  
    `0 ≤ initialArray[i].length ≤ 25`.
    
-   **[output] string**