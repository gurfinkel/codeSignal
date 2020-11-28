
In CodeSignal marathons, each task score is calculated independently. For a specific task, you get some amount of points if you solve it correctly, or you get a  `0`. Here is how the exact number of points is calculated:

-   If you solve a task on your first attempt within the first minute, you get  `maxScore`  points.
-   Each additional minute you spend on the task adds a penalty of  `(maxScore / 2) * (1 / marathonLength)`  to your final score.
-   Each unsuccessful attempt adds a penalty of  `10`  to your final score.
-   After all the penalties are deducted, if the score is less than  `maxScore / 2`, you still get  `maxScore / 2`  points.

Implement an algorithm that calculates this score given some initial parameters.

Example

-   For  
    `marathonLength = 100`,  
    `maxScore = 400`,  
    `submissions = 4`, and  
    `successfulSubmissionTime = 30`, the output should be  
    `marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) = 310`.
    
    Three unsuccessful attempts cost  `10 * 3 = 30`  points.  `30`  minutes adds  `30 * (400 / 2) * (1 / 100) = 60`  more points to the total penalty. So the final score is  `400 - 30 - 60 = 310`.
    
-   For  
    `marathonLength = 100`,  
    `maxScore = 400`,  
    `submissions = 95`, and  
    `successfulSubmissionTime = 30`, the output should be  
    `marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) = 200`.
    
    `400 - 10 * 94 - 30 * (400 / 2) * (1 / 100) = -600`. But the score for this task cannot be less than  `400 / 2 = 200`, so the final score is  `200`  points.
    
-   For  `marathonLength = 100`,  `maxScore = 400`,  `submissions = 95`, and  `successfulSubmissionTime = -1`, the output should be  
    `marathonTaskScore(marathonLength, maxScore, submissions, successfulSubmissionTime) = 0`.
    
    The task wasn't solved, so it doesn't give any points.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] integer marathonLength**
    
    A positive integer representing the length of the marathon in minutes.
    
    _Guaranteed constraints:_  
    `100 ≤ marathonLength ≤ 1000`.
    
-   **[input] integer maxScore**
    
    A positive integer. It is guaranteed that  `maxScore`  is divisible by  `2 * marathonLength`.
    
    _Guaranteed constraints:_  
    `400 ≤ maxScore ≤ 2000`.
    
-   **[input] integer submissions**
    
    A positive integer equal to the number of submissions made by the user for the specific task.
    
    _Guaranteed constraints:_  
    `1 ≤ submissions ≤ 100`.
    
-   **[input] integer successfulSubmissionTime**
    
    An integer equal to the time of successful submission in minutes since the beginning of the marathon (for example, if a successful submission was made on the first minute then  `successfulSubmissionTime = 0`). If all submissions were unsuccessful then  `successfulSubmissionTime = -1`.
    
    _Guaranteed constraints:_  
    `-1 ≤ successfulSubmissionTime < marathonLength`.
    
-   **[output] integer**
    
    The final score for the task.
