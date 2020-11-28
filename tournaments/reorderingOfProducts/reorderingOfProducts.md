
GoDaddy’s Online Store product allows our small business customers to create ecommerce websites for selling products online. Let's assume you're a new intern who's been tasked with creating a frontend component for reordering products in a list via a simple drag-and-drop interface. For this exercise, we can assume that you are building the mobile UI, where you can only drag and drop items along the y-axis (i.e. vertically).

Your job is to implement a function that returns the  `0`-based index where the currently dragged element should be inserted once it is dropped. In the correct case it should be placed below all elements whose midpoints are above the current  `y`  position of the mouse.

Note that both  `y`  coordinates and elements' indices increase downwards.

Example

-   For  `boundaries = [0, 10, 50, 100, 120]`  and  `y = 45`, the output should be  
    `reorderingOfProducts(boundaries, y) = 2`.
    
    The item with index  `0`  occupies points with y-coordinates from the interval  `[0, 10]`, the item with index  `1`  occupies points with y-coordinates from the interval  `[10, 50]`, etc. The bottommost item has index  `3`  and occupies points with y-coordinates from the interval  `[100, 120]`.
    
    If  `y = 45`  then the answer should be  `2`.
    
    Midpoints for each of the static items are  `[5, 30, 75, 110]`, respectively. Thus, the currently dragged element will be inserted below the two topmost elements and above each of the other ones.
    
-   For  `boundaries = [0, 10, 50, 100, 120]`  and  `y = 110`, the output should be  
    `reorderingOfProducts(boundaries, y) = 3`.
    
    Note that the dragged element should be placed above the bottommost element because the  `y`-coordinate of the former equals the midpoint of the latter.
    
-   For  `boundaries = [0, 10, 50, 100, 120]`  and  `y = 111`, the output should be  
    `reorderingOfProducts(boundaries, y) = 4`.
    
    _Here's how the elements are organized in the given examples:_
    
    ![](https://codesignal.s3.amazonaws.com/tasks/reorderingOfProducts/img/example.png?_tm=1582084511536)
    

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.integer boundaries**
    
    Array of at least two non-negative integers given in strictly increasing order.  `boundaries[i]`  and  `boundaries[i + 1]`  stand for the coordinates of the upmost and bottommost  `y`  coordinates of the  `ith`  item, respectively. There are exactly  `boundaries.length - 1`  items on the screen.
    
    _Guaranteed constraints:_  
    `2 ≤ boundaries.length ≤ 10`,  
    `0 ≤ boundaries[i] ≤ 120`.
    
-   **[input] integer y**
    
    _Guaranteed constraints:_  
    `4 ≤ y ≤ 150`.
    
-   **[output] integer**
