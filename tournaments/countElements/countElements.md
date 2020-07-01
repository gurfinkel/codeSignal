
You've been invited to a job interview at a famous company that tests programming challenges. To evaluate your coding skills, they have asked you to parse a given problem's input given as an  `inputString`  string, and count the number of  _primitive type_  elements within it.

The  `inputString`  can be either a  _primitive type_  variable or an array (possibly multidimensional) that contains elements of the  _primitive types_.  
A  _primitive type_  variable can be:

-   an integer number;
-   a string, which is surrounded by  `"`  characters (note that it may contain  **any**  character except  `"`);
-   a boolean, which is either  `true`  or  `false`.

Return the total number of  _primitive type_  elements inside  `inputString`.

Example

-   For  `inputString = "[[0, 20], [33, 99]]"`, the output should be  
    `countElements(inputString) = 4`;
-   For  `inputString = "[ "one", 2, "three" ]"`, the output should be  
    `countElements(inputString) = 3`;
-   For  `inputString = "true"`, the output should be  
    `countElements(inputString) = 1`;
-   For  `inputString = "[[1, 2, [3]], 4]"`, the output should be  
    `countElements(inputString) = 4`.

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] string inputString**
    
    Correct input of a given problem.
    
    _Guaranteed constraints:_  
    `2 ≤ inputString.length ≤ 60`.
    
-   **[output] integer**
    
    -   The total number of  _primitive type_  elements within the input.