
Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

-   _type_  indicates if it's a left or a right shoe;
-   _size_  is the size of the shoe.

Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

-   For
    
    ```
    shoes = [[0, 21], 
             [1, 23], 
             [1, 21], 
             [0, 23]]
    
    ```
    
    the output should be  
    `pairOfShoes(shoes) = true`;
    
-   For
    
    ```
    shoes = [[0, 21], 
             [1, 23], 
             [1, 21], 
             [1, 23]]
    
    ```
    
    the output should be  
    `pairOfShoes(shoes) = false`.
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.array.integer shoes**
    
    Array of shoes. Each shoe is given in the format  `[_type_,  _size_]`, where  _type_  is either  `0`  or  `1`  for left and right respectively, and  _size_  is a positive integer.
    
    _Guaranteed constraints:_  
    `1 ≤ shoes.length ≤ 200`,  
    `1 ≤ shoes[i][1] ≤ 100`.
    
-   **[output] boolean**
    
    -   `true`  if it is possible to pair the shoes,  `false`  otherwise.