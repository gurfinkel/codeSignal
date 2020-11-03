
Jet is building a new feature designed to significantly reduce order delivery times. However, faster delivery sometimes means higher shipping fees, and for cost-conscious customers this might be a problem. Your task is to implement a function that finds the fastest delivery time for a given order, taking into account that the customer doesn't want to pay more than  `maxPrice`.

Consider a customer's basket of items. You are given a list of available vendors from which you can order these items. For each vendor you know the products they provide with their price (`vendorProducts`) and the time it will take to deliver them (`vendorsDelivery`). Find the vendors that should be chosen so that the total price of items in the basket is not greater than the  `maxPrice`, while keeping delivery time to a minimum. The delivery time is the maximum delivery time of all chosen vendors.

You should only choose vendors you're going to buy something from. It is guaranteed that there is always exactly one solution.

Example

For  `maxPrice = 7`,  `vendorsDelivery = [5, 4, 2, 3]`, and

```
vendorsProducts = [[1, 1, 1],
                   [3, -1, 3],
                   [-1, 2, 2],
                   [5, -1, -1]]

```

the output should be  
`minimalBasketPrice(maxPrice, vendorsDelivery, vendorsProducts) = [1, 2]`.

There are three items in the basket, so here is the list of options:

-   although vendor  `0`  can provide all items for the lowest price, it will take  `5`  days to deliver them;
-   vendors  `1`  and  `2`  can deliver all items in  `4`  and  `2`  days respectively, so in  `4`  days all of the items will have been delivered. It would cost  `3 + 2 + 2 = 7`  (note that the  `2nd`  0-based item is provided by both vendors, but since the price at vendor number  `2`  is lower, that's where we would purchase it);
-   vendors  `2`  and  `3`  will deliver everything in just  `3`  days, but it would cost  `2 + 2 + 5 = 9`, which is too much.

Thus, vendors  `1`  and  `2`  should be chosen to fulfill the order.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer maxPrice**
    
    The maximum amount of money the customer is willing to pay.
    
    _Guaranteed constraints:_  
    `1 ≤ maxPrice ≤ 10^6`.
    
-   **[input] array.integer vendorsDelivery**
    
    For each valid  `i`,  `vendorsDelivery[i]`  is the number of days it will take the  `ith`  vendor to deliver the goods.
    
    _Guaranteed constraints:_  
    `1 ≤ vendorsDelivery.length ≤ 100`,  
    `1 ≤ vendorsDelivery[i] ≤ 10^6  + 1`.
    
-   **[input] array.array.integer vendorsProducts**
    
    Rectangular matrix with  `vendorsDelivery.length`  rows. The number of its columns equals the number of items in the basket.  
    If  `vendors[i][j] > 0`, then the  `ith`  vendor provides the  `jth`  item, and it costs  `vendors[i][j]`.  
    `vendors[i][j] = -1`  otherwise, which means that the  `ith`  vendor doesn't provide the  `jth`  item.
    
    _Guaranteed constraints:_  
    `vendorsProducts.length = vendorsDelivery.length`,  
    `1 ≤ vendorsProducts[0].length ≤ 100`,  
    `-1 ≤ vendorsProducts[i][j] ≤ 10^6`.
    
-   **[output] array.integer**
    
    A sorted array of 0-based indices of the vendors that should be chosen to fulfill the order.
    
    The order is fulfilled if for each item  `j`  (`0 ≤ j < vendors[0].length`) there is a vendor which provides it.
