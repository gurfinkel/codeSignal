
You have an integer  `n`. At each step, you can apply one of the following operations to it:

-   Increase the number by  `1`.
-   Multiply the number by  `2`.
-   Rotate the number by  `180`  degrees. To do that, consider the number represented as a  [seven-segment display character](https://en.wikipedia.org/wiki/Seven-segment_display_character_representations)  string written on a sheet of paper. If you rotate that sheet of paper by  `180`  degrees and end up with a valid number, this number is a result of that operation. If rotating the number gives you an invalid value, that operation is impossible. For instance,  `9865210`  will turn into  `0125986`, which becomes  `125986`  since the leading zero should be dropped. For  `347`, this operation is impossible because each digit becomes invalid after being rotated by  `180`degrees.

![](https://codefightsuserpics.s3.amazonaws.com/tasks/kStepMaximization/img/rotation.png?_tm=1490636247896)

You are allowed to perform no more than  `k`  steps. What is the maximum possible number that you can obtain?

Example

For  `n = 17`  and  `k = 3`, the output should be  
`kStepMaximization(n, k) = 162`.

Here is the correct sequence of operations to get  `162`  from  `17`  in  `3`  steps:

-   First, increase  `n`  by  `1`  to get  `18`.
-   Now rotate the current value. This operation produces  `81`.
-   Finally, multiply  `81`  by  `2`. The result equals  `162`, which is the answer.

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] integer n**
    
    _Guaranteed constraints:_  
    `0 ≤ n ≤ 100`.
    
-   **[input] integer k**
    
    _Guaranteed constraints:_  
    `1 ≤ k ≤ 9`.
    
-   **[output] integer**
    
    -   The maximum value that you can obtain in no more than  `k`  steps.