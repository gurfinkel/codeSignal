
Consider the following template for an equation:

`a ? b ? c ? d`

Here each letter stands for an integer value, and  `?`stands for either an equals sign or a multiplication operator.

You have an array  `values`  that contains four integers. Can you fill the template with the integers, two multiplication operators, and one equals sign, such that the resulting equation will be correct?

Example

-   For  `values = [2, 4, 3, 6]`, the output should be  
    `equationTemplate(values) = true`.
    
    Here is how the template can be filled to result in a correct equation:  `2 * 6 = 3 * 4`.
    
-   For  `values = [2, 3, 30, 5]`, the output should be  
    `equationTemplate(values) = true`.
    
    Here is one of the ways to fill the template to get a correct equation:  `30 = 2 * 3 * 5`.
    
-   For  `values = [2, 3, 5, 5]`, the output should be  
    `equationTemplate(values) = false`.
    
    There is no way to fill the template that will result in a correct equation.
    

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.integer values**
    
    _Guaranteed constraints:_  
    `values.length = 4`,  
    `-100 ≤ values[i] ≤ 100`.
    
-   **[output] boolean**
    
    -   Return  `true`  if the template can be filled so that the resulting equaltion will be correct, otherwise return  `false`.