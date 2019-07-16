
You are given an array of arrays  `a`. Your task is to group the arrays  `a[i]`  by their  meanvalues, so that arrays with equal mean values are in the same group, and arrays with different mean values are in different groups.

Each group should contain a set of indices (`i`,  `j`, etc), such that the corresponding arrays (`a[i]`,  `a[j]`, etc) all have the same mean. Return the set of groups as an array of arrays, where the indices within each group are sorted in ascending order, and the groups are sorted in ascending order of their minimum element.

Example

-   For
    
    ```
    a = [[3, 3, 4, 2],
         [4, 4],
         [4, 0, 3, 3],
         [2, 3],
         [3, 3, 3]]
    
    ```
    
    the output should be
    
    ```
    meanGroups(a) = [[0, 4],
                     [1],
                     [2, 3]]
    
    ```
    
    -   `mean(a[0]) = (3 + 3 + 4 + 2) / 4 = 3`;
    -   `mean(a[1]) = (4 + 4) / 2 = 4`;
    -   `mean(a[2]) = (4 + 0 + 3 + 3) / 4 = 2.5`;
    -   `mean(a[3]) = (2 + 3) / 2 = 2.5`;
    -   `mean(a[4]) = (3 + 3 + 3) / 3 = 3`.
    
    There are three groups of means: those with mean  `2.5`,  `3`, and  `4`. And they form the following groups:
    
    -   Arrays with indices  `0`  and  `4`  form a group with mean  `3`;
    -   Array with index  `1`  forms a group with mean  `4`;
    -   Arrays with indices  `2`  and  `3`  form a group with mean  `2.5`.
    
    Note that neither
    
    ```
    meanGroups(a) = [[0, 4],
                     [2, 3],
                     [1]]
    
    ```
    
    nor
    
    ```
    meanGroups(a) = [[0, 4],
                     [1],
                     [3, 2]]
    
    ```
    
    will be considered as a correct answer:
    
    -   In the first case, the minimal element in the array at index  `2`  is  `1`, and it is less then the minimal element in the array at index  `1`, which is  `2`.
    -   In the second case, the array at index  `2`  is not sorted in ascending order.
-   For
    
    ```
    a = [[-5, 2, 3],
         [0, 0],
         [0],
         [-100, 100]]
    
    ```
    
    the output should be
    
    ```
    meanGroups(a) = [[0, 1, 2, 3]]
    
    ```
    
    The mean values of all of the arrays are  `0`, so all of them are in the same group.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer a**
    
    An array of arrays of integers.
    
    _Guaranteed constraints:_  
    `1 ≤ a.length ≤ 100`,  
    `1 ≤ a[i].length ≤ 100`,  
    `-100 ≤ a[i][j] ≤ 100`.
    
-   **[output] array.array.integer**
    
    -   An array of arrays, representing the groups of indices.