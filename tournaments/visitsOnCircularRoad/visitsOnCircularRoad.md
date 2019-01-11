
There are  `n`  houses in a village on a circular road numbered from  `1`  to  `n`  starting from some house in clockwise order. It takes one minute to get from one house to any of two adjacent houses and there are no other roads in this village besides the circular one. Find the minimal time required to make all visits in the desired order starting from house  `1`.

Example

For  `n = 4`  and  `visitsOrder = [1, 3, 2, 3, 1]`, the output should be  
`visitsOnCircularRoad(n, visitsOrder) = 6`.

Check out the image below for better understanding:

![](https://codefightsuserpics.s3.amazonaws.com/tasks/visitsOnCircularRoad/img/example.png?_tm=1530820956556)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer n**
    
    The number of houses, positive integer.
    
    _Guaranteed constraints:_  
    `2 ≤ n ≤ 10`.
    
-   **[input] array.integer visitsOrder**
    
    An array of integers (each from  `1`  to  `n`, inclusive) representing the order in which you have to visit the houses.
    
    _Guaranteed constraints:_  
    `1 ≤ visitsOrder.length ≤ 10`,  
    `1 ≤ visitsOrder[i] ≤ n`.
    
-   **[output] integer**