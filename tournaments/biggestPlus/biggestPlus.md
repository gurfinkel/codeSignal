
Given a matrix that contains only the characters  `'0'`  and  `'1'`, find the biggest plus sign (`+`) formed by  `1`s in this matrix and return its size. Size, in this case, indicates the length of the plus sign's edges. In order to be a valid plus sign, the edges must be of equal length.

For example, a plus sign with a size of  `k`  in  `matrix`  starts at cell  `(x, y)`. The plus sign's edges are  `(x - k, y)`,  `(x - k + 1, y)`, ...,  `(x + k, y)`  and  `(x, y - k)`,  `(x, y - k + 1)`, ...,  `(x, y + k)`, all with a length of  `k`.

Example

For

```
  matrix = ["0010010", 
            "1010101",
            "1111111", 
            "0010000",
            "0000000"]

```

the output should be  `biggestPlus(matrix) = 1`.

Here, the biggest  _plus sign_  is centered at cell  `(2, 2)`  (0-based) and has a size of  `1`  since the downward facing edge is short.

Input/Output

-   **[execution time limit] 9 seconds (js)**
    
-   **[input] array.string matrix**
    
    A matrix containing only the symbols  `'0'`  and  `'1'`. It is guaranteed that there is at least one  `'1'`  in  `matrix`.
    
    _Guaranteed constraints:_  
    `1 ≤ inputArray.length ≤ 1000`,  
    `1 ≤ inputArray[i].length ≤ 5000`.
    
-   **[output] integer**
    
    -   The size of the biggest plus sign formed by  `1`s in  `matrix`.