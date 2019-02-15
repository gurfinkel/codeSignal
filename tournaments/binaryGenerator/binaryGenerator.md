
Let's say that binary sequence  `s`  _generates_binary sequence  `t`  if:

-   `s`  and  `t`  are of the same length;
-   for each  `i`  such that  `s[i] = 1`  it is true that  `t[i] = 1`.

Given a sequence  `s`, return an array of all the sequences it  _generates_, sorted  lexicographically.

Example

For  `s = "01101"`, the output should be  
`binaryGenerator(s) = ["01101", "01111", "11101", "11111"]`.

Input/Output

-   **[execution time limit] 4 seconds (py)**
    
-   **[input] string s**
    
    _Guaranteed constraints:_  
    `1 ≤ s.length ≤ 12`,  
    `s[i] ∈ {'0', '1'}`.
    
-   **[output] array.string**