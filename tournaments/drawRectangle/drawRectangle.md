
You are implementing a command-line version of the Paint app. Since the command line doesn't support colors, you are using different characters to represent pixels. Your current goal is to support  `rectangle x1 y1 x2 y2`operation, which draws a rectangle that has an upper left corner at  `(x1, y1)`  and a lower right corner at  `(x2, y2)`. Here the  `x`-axis points from left to right, and the  `y`-axis points from top to bottom.

Given the initial canvas state and the array that represents the coordinates of the two corners, return the canvas state after the operation is applied. For the details about how rectangles are painted, see the example.

Example

For

```
canvas = [['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
          ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]

```

and  `rectangle = [1, 1, 4, 3]`, the output should be

```
drawRectangle(canvas, rectangle) = [
['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
['a', '*', '-', '-', '*', 'a', 'a', 'a'],
['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
['b', '*', '-', '-', '*', 'b', 'b', 'b'],
['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]
```

Here is the rectangle, colored for illustration:

```

[['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
['a', '*', '-', '-', '*', 'a', 'a', 'a'],
['a', '|', 'a', 'a', '|', 'a', 'a', 'a'],
['b', '*', '-', '-', '*', 'b', 'b', 'b'],
['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']]

```

Note that rectangle sides are depicted as  `-`s and  `|`s, asterisks (`*`) stand for its corners and all of the other "pixels" remain the same.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.array.char canvas**
    
    A non-empty rectangular matrix of characters.
    
    _Guaranteed constraints:_  
    `2 ≤ canvas.length ≤ 10`,  
    `2 ≤ canvas[0].length ≤ 10`.
    
-   **[input] array.integer rectangle**
    
    Array of four integers -  `[x1, y1, x2, y2]`.
    
    _Guaranteed constraints:_  
    `0 ≤ x1 < x2 < canvas[i].length`,  
    `0 ≤ y1 < y2 < canvas.length`.
    
-   **[output] array.array.char**