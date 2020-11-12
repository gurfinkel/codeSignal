
Your first assignment as a Jet employee is to build an internal dashboard of various order statistics and how they change over time. The 3 most important values that should be calculated are the  _maximum price_,  average price  and  standard deviation.

To observe the evolution of these values in the given list of  `prices`, for the given number  `n`  you should consider the following  _running sets_  of orders:

-   the  `nth`  order at the end;
-   the  `nth`  and  `(n - 1)th`  orders at the end;
-   the  `nth`,  `(n - 1)th`  and  `(n - 2)th`  orders at the end;
-   ...
-   `n`  last orders, from the  `nth`  at the end to the most recent one.

For each of the  _running sets_, calculate the required statistics and return them in arrays comprised of three elements.  
When it's impossible to calculate the  _standard deviation_, return  `-1`  instead.

Example

-   For  `orders = [4, 2, 5, 9, 2]`  and  `n = 5`, the output should be
    
    ```
    jetDashboard(orders, n) = [[4, 4,       -1], 
                               [4, 3,       1.41421], 
                               [5, 3.66667, 1.52753], 
                               [9, 5,       2.94392],
                               [9, 4.4,     2.88097]]
    
    ```
    
    The values are calculated for the following  _running sets_:  `[4]`,  `[4, 2]`,  `[4, 2, 5]`,  `[4, 2, 5, 9]`  and  `[4, 2, 5, 9, 2]`.
    
-   For  `orders = [4, 2, 5, 9, 2]`  and  `n = 3`, the output should be
    
    ```
    jetDashboard(orders, n) = [[5, 5,       -1], 
                               [9, 7,       2.82843],
                               [9, 5.33333, 3.51188]]
    
    ```
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer orders**
    
    Array of orders, where  `orders[i]`  is a positive integer denoting the price of the  `ith`  order.
    
    _Guaranteed constraints:_  
    `1 ≤ orders.length ≤ 100`,  
    `0 ≤ orders[i] ≤ 1000`.
    
-   **[input] integer n**
    
    The length of the time period.
    
    _Guaranteed constraints:_  
    `1 ≤ n ≤ orders.length`.
    
-   **[output] array.array.float**
    
    A two-dimensional array of  `n`  elements. For each  `0 ≤ i < n`  the  `ith`  element should contain statistics of the  `ith`  _running set_  in the following format:  `[_max_price_,  _average_price_,  _standard_deviation_]`.
    
    Your answer will be considered correct if the absolute error of each output element does not exceed  `10^-5`.
