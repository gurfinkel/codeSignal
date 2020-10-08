
Two Sigma maintains a distributed computing cluster capable of handling many different types of jobs. Some jobs are quite small (for instance MapReduce style jobs), but others can be larger (certain types of distributed optimization).

Let's assume that the jobs are processed one by one, and if a new job request comes in when one is already being processed it's added to the queue. You were asked to implement a scheduling algorithm that adds jobs to the regular queue and pushes them through in such a way that the average wait time for all jobs in the queue is minimized. A new job isn't pushed through unless it minimizes the average waiting time.

Assume that your program starts working at  `0`  seconds. A request for the  `ith`  job came at  `requestTimei`, and let's assume that it takes  `jobProcessi`  seconds to process it.

Find the state of your algorithm's queue  `timeFromStart`  seconds after your program started to work, assuming that all actions that could've happened right at this moment have already happened.

**Example**

For  `requestTime = [0, 5, 8, 11]`,  `jobProcess = [9, 4, 2, 1]`, and  `timeFromStart = 11`  
the output should be  `jobScheduling(requestTime, jobProcess, timeFromStart) = [1]`.

Here's the optimal algorithm with an average wait time of  `(1 + 7) / 2 = 4`  seconds:

-   `0`  seconds from launch: start processing request  `0`  (0-based);
-   `5`  seconds: add request  `1`  to the queue;
-   `8`  seconds: put request  `2`  at the front of the queue;
-   `9`  seconds: finish processing request  `0`  and start processing request  `2`;
-   `11`  seconds:
    -   put request  `3`  at the front of the queue;
    -   finish processing request  `2`;
    -   start processing request  `3`;
-   `12`  seconds: finish processing request  `3`  and start processing request  `1`;
-   `16`  seconds: finish processing request  `1`.

Therefore,  `11`  seconds after the program there are only  `2`  not yet finished requests,  `3`  being processed, and  `1`  still in the queue. Thus, the answer is  `[1]`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/jobScheduling/img/example.png?_tm=1582033459035)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer requestTime**
    
    A sorted array of non-negative integers.  `requestTime[i]`  represents the number of seconds that will pass from the initial moment before the  `ith`  job request comes in.
    
    _Guaranteed constraints:_  
    `1 ≤ requestTime.length ≤ 50`,  
    `0 ≤ requestTime[i] ≤ 100`.
    
-   **[input] array.integer jobProcess**
    
    Array of positive integers of the same length as  `requestTime`.  `jobProcess[i]`  represents the number of seconds it takes to process the  `ith`  job request.
    
    _Guaranteed constraints:_  
    `jobProcess.length = requestTime.length`,  
    `1 ≤ jobProcess[i] ≤ 1000`.
    
-   **[input] integer timeFromStart**
    
    A non-negative integer. If some actions are due to happen  `timeFromStart`  seconds after your program was launched, assume that they have already happened.
    
    _Guaranteed constraints:_  
    `0 ≤ timeFromStart ≤ 100`.
    
-   **[output] array.integer**
    
    Array of requests' 0-based indices, the state of the queue in  `timeFromStart`  seconds from the moment your program was launched. The first element should be the head of the queue, and the last element should be its tail.
