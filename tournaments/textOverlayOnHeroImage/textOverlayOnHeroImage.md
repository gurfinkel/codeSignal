
The GoDaddy  _Website Builder_  product helps small businesses easily create websites. Let's say we are going to add a feature where the name of a business is automatically placed on top of a large "hero" image on the landing page of the site.

To do so, we need to find a position on the image where the text will be the most readable. If the text is placed on an area of the image that is too dark, it will be difficult for the site visitors to read it (for simplicity's sake, let's only consider black text on a grayscale image). We will define the optimal position of the text as the position where the mean pixel brightness inside the bounding box for the text is  _maximized_.

You are given a grayscale  `image`  as a 2D array of pixels with the  `height`  and  `width`  of the text's rectangular bounding box. You must return the bounding box's top-left corner coordinates for the optimal text position. If there is more than one optimal position, return the top-left-most one.

Example

For

```
image = [[10,  50,  90, 65],
         [10, 200, 255, 30],
         [10, 150,  30, 25]]

```

`height = 2`, and  `width = 3`, the output should be  
`textOverlayOnHeroImage(image, height, width) = [0, 1]`.

Both bounding boxes with top-left coordinates at  `[0, 1]`  and at  `[1, 1]`  have a maximal mean pixel brightness equal to  `690 / 6 = 115`. Thus, the answer is  `[0, 1]`, as it is the topmost one.

_See the resulting bounding box in the image below._  
![](https://codesignal.s3.amazonaws.com/tasks/textOverlayOnHeroImage/img/example.png?_tm=1582150313754)

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.array.integer image**
    
    Array of non-negative integers less than  `256`.
    
    _Guaranteed constraints:_  
    `1 ≤ image.length ≤ 20`,  
    `1 ≤ image[0].length ≤ 20`,  
    `0 ≤ image[i][j] ≤ 255`.
    
-   **[input] integer height**
    
    _Guaranteed constraints:_  
    `1 ≤ height ≤ image.length`.
    
-   **[input] integer width**
    
    _Guaranteed constraints:_  
    `1 ≤ width ≤ image[0].length`.
    
-   **[output] array.integer**
    
    Array of two integers: indices of row and column for the optimal position, respectively.
