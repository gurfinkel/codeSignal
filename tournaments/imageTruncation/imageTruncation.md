
One of the thresholding operations applied to images is truncation. Consider each pixel of some image one by one. If the intensity of a pixel is higher than  `threshold`  then it is set to  `threshold`. Otherwise, it isn't changed.

Apply this operation to the given  `image`.

Example

For

    image = [[0, 100, 100], [1, 255, 103]] 

and  `threshold = 102`, the output should be

    imageTruncation(image, threshold) = [[0, 100, 100], [1, 102, 102]] 

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.array.integer image**
    
    A rectangular array of non-negative integers representing the intensities of the image pixels.
    
    _Guaranteed constraints:_  
    `1 ≤ image.length ≤ 5`,  
    `1 ≤ image[0].length ≤ 5`,  
    `0 ≤ image[i][j] ≤ 255`.
    
-   **[input] integer threshold**
    
    _Guaranteed constraints:_  
    `0 ≤ threshold ≤ 255`.
    
-   **[output] array.array.integer**
    
    -   The image after truncation is applied.