
The Uber app has an integrated map that simplifies selecting a destination. To make it even better, Uber guesses the location even if there is a typo in the inputted address.

Consider a map with streets and buildings located on the Cartesian plane with integer coordinates. The distances on this map are calculated as follows:

-   The distance between two points is the length of the segment connecting them.
-   The distance between a segment and a point is defined as the shortest distance between the given point and any point on the segment.

A user has started to type in their destination, and it's your task to guess what they are looking for.

Let the rider's position be at  `[0, 0]`. Given the positions of some objects around them, and the address they have already typed in, find out what their destination is. To do this, find the object closest to the rider with a name that has a prefix which is  _similar_  to the text that's already entered. Since it's possible that there is a typo in the input, let  _similar_  mean one of the following:

-   the typed in address is identical to the prefix of the object's address;
-   they differ only by one symbol;
-   user's input has one extra symbol;
-   user's input has one missing symbol.

Note that the comparison should be  **case-insensitive**.

For example, if the user typed in  `"Cat"`, the following can be suggested:  `"Cat street"`,  `"**B**at building"`,  `"**_**At avenue"****`  (the first letter is deleted), and  `"Cast exhibition"`.

Example

For  `address = "Cat"`,  `objects = [[-2, 0], [1, 2], [2, 1, 2, 4], [-3, -1, 4, -1]]`, and  
`names = ["Bat building", "Cast exhibition", "At street", "Cat avenue"]`, the output should be  
`closestLocation(address, objects, names) = "Cat avenue"`.

Since all the names are  _similar_  to what the user has typed, and the distances to them are respectively  `2`,  `√5`,  `√5`  and  `1`  (see the picture below for better understanding).

![](https://codesignal.s3.amazonaws.com/tasks/closestLocation/img/example.png?_tm=1582003684647)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string address**
    
    The partial address the user has typed already.
    
    _Guaranteed constraints:_  
    `2 ≤ address.length ≤ 8`.
    
-   **[input] array.array.integer objects**
    
    `objects[i]`  corresponds to the  `ith`  object. There are two type of objects:
    
    -   a building, which is represented as an array of two elements with  `x`  and  `y`  coordinates;
    -   a street, which is represented as an array of four elements with  `x`  and  `y`  coordinates at its start, and  `x`  and  `y`  coordinates at its end.
    
    It is guaranteed that each street is  **parallel to one of the axes**.
    
    _Guaranteed constraints:_  
    `2 ≤ objects.length ≤ 8`,  
    `-10 ≤ objects[i][j] ≤ 200`.
    
-   **[input] array.string names**
    
    The  `ith`  element is the name of the  `ith`  object.
    
    _Guaranteed constraints:_  
    `names.length = objects.length`,  
    `2 ≤ names[i].length ≤ 15`.
    
-   **[output] string**
    
    Return the name of the object the user supposedly chose as their destination. It should be the name of the closest object that is  _similar_  to the typed text. If there are several such objects, return the one that appears first in the provided list.
    
    It is guaranteed that at least one object's name is similar to the typed text.
