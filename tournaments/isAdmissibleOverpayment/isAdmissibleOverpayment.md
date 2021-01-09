
After recently joining Instacart's beta testing developer group, you decide to experiment with their new API. You know that the API returns item-specific display-ready strings like  `10.0% higher than in-store`  or  `5.0% lower than in-store`  that inform users when the price of an item is different from the one in-store. But you want to extend this functionality by giving people a better sense of how much more they will be paying for their entire shopping cart.

Your app lets a user decide the total amount  `x`  they are willing to pay via Instacart over in-store prices. This you call their  _price sensitivity_.

Your job is to determine whether a given customer will be willing to pay for the given items in their cart based on their stated  _price sensitivity_  `x`.

Example

-   For  
    `prices = [110, 95, 70]`,

    ```
    notes = ["10.0% higher than in-store", 
             "5.0% lower than in-store", 
             "Same as in-store"]
    
    ```

    and  `x = 5`, the output should be  
    `isAdmissibleOverpayment(prices, notes, x) = true`.

    In-store prices of the first and the second items are  `100`, and the price of the third item is  `70`, which means the customer is overpaying  `10 - 5 + 0 = 5`, which they are willing to do based on their  _price sensitivity_.

-   For  
    `prices = [48, 165]`,

    ```
    notes = ["20.00% lower than in-store", 
             "10.00% higher than in-store"]
    
    ```

    and  `x = 2`, the output should be  
    `isAdmissibleOverpayment(prices, notes, x) = false`.

    The in-store price of the first item is  `60`, and the second item is  `150`. The overpayment equals  `15 - 12 = 3`, which is too much for the customer to be willing to pay.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.float prices**

    Positive numbers, representing prices of the items in the shopping cart.

    _Guaranteed constraints:_  
    `1 ≤ prices.length ≤ 10`,  
    `20.0 ≤ prices[i] ≤ 35.0 · 10^3`.

-   **[input] array.string notes**

    Array of the same length as  `prices`. For each valid  `i`  `notes[i]`  has one of the following forms:

    -   `"x% higher than in-store"`, which means that Instacart price of the  `ith`  item is  `x%`  higher than the local one;
    -   `"x% lower than in-store"`, which means that Instacart price of the  `ith`  item is  `x%`  lower than the local one;
    -   `"Same as in-store"`, which means that the  `ith`  item costs the same in Instacart and in the local store,

    where  `x`  is a positive float number with the decimal point and at least one digit after it.

    _Guaranteed constraints:_  
    `notes.length = prices.length`,  
    `16 ≤ notes[i].length ≤ 30`.

-   **[input] float x**

    A non-negative float, the maximum amount of money the customer is willing to overpay.

    _Guaranteed constraints:_  
    `0 ≤ x ≤ 150.0`.

-   **[output] boolean**

    `true`  if the overpayment is admissible,  `false`  otherwise.