
The FDA recommends that for a healthy, balanced diet, a person on average needs around 2,000  _Kcal_  a day to maintain their weight. As a result, Instacart is set to release a new feature that will help customers control their daily intake of calories. Given a list of items in a customer's cart, it will show the items that can be consumed in one day such that their total caloric value is as close to  `2000`  as possible.

Knowing the  `caloricValue`  of each bought item, return the 0-based indices of the items to be consumed in one day. If there is more than one option, return the  lexicographically smallest  one.

Example

-   For  `caloricValue = [400, 800, 400, 500, 350, 350]`, the output should be  
    `dailyIntake(caloricValue) = [0, 2, 3, 4, 5]`.
    
    Caloric value of items  `[1, 3, 4, 5]`  and  `[0, 2, 3, 4, 5]`  both sum up to  `2000`  but since  `[0, 2, 3, 4, 5]`  is  _lexicographically smaller_  than  `[1, 3, 4, 5]`, the answer is  `[0, 2, 3, 4, 5]`.
    
-   For  `caloricValue = [150, 900, 1000]`, the output should be  
    `dailyIntake(caloricValue) = [0, 1, 2]`.
    
    The total sum of all items (i.e.  `2050`) is  `50`  _Kcal_  larger than  `2000`, so the answer is  `[0, 1, 2]`.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer caloricValue**
    
    Caloric value of each item in the cart. The total sum of all items is not greater than  `104`.
    
    _Guaranteed constraints:_  
    `1 ≤ caloricValue.length ≤ 30`,  
    `2 ≤ caloricValue[i] ≤ 10^4`.
    
-   **[output] array.integer**
    
    The items to consume in a day.
