
To set user expectations during file uploads, Dropbox indicates how long a file will take to transfer with its upload time estimator.

Your goal is to implement a particular type of a upload time estimator. Suppose that several clients are uploading files to Dropbox at the same given moment. The  `ith`  client uploads a file of  `sizesi`  megabytes. For a single file, upload speed is  `v`  megabytes per second, but if there are several files uploading at the same time then uploads occur simultaneously in parallel threads. For each thread the upload speed equals  `v / n`, where  `n`  is the number of currently active threads.

Given each file's size and its upload start time, determine the upload end times.

Example

For  `sizes = [21, 10]`,  `uploadingStart = [100, 105]`, and  `v = 2`  
the output should be  
`loadTimeEstimator(sizes, uploadingStart, v) = [116, 115]`.

-   During the first  `5`  seconds only the first file is uploading at a speed of  `2 MB/sec`. Thus, when the second file upload begins,  `10 MBs`  of the first file will already have been uploaded.
-   For the next  `10`  seconds both files upload simultaneously with a speed of  `1 MB/sec`  each.
-   After this point (`15`  seconds since the first file started uploading) the second file is uploaded successfully, and only  `1 MB`  of the first file remains to be transferred.
-   It takes  `0.5`  more seconds to finish uploading the first file. Rounding  `115.5`  up, we obtain  `116`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/loadTimeEstimator/img/example.png?_tm=1582037242570)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.integer sizes**

    Array of positive integers.  `sizes[i]`  equals the size of the  `ith`  file in megabytes.

    _Guaranteed constraints:_  
    `0 ≤ sizes.length ≤ 10`,  
    `1 ≤ sizes[i] ≤ 35`.

-   **[input] array.integer uploadingStart**

    Array of positive integers of the same length as  `sizes`.  `uploadingStart[i]`  represents the number of seconds that will pass from the current moment before uploading of the  `ith`  file starts.

    _Guaranteed constraints:_  
    `uploadingStart.length = sizes.length`,  
    `1 ≤ uploadingStart[i] ≤ 3 · 10^4`.

-   **[input] integer v**

    _Guaranteed constraints:_  
    `1 ≤ v ≤ 100`.

-   **[output] array.integer**

    The  `ith`  element of the result should be equal to the number of seconds that will pass from the current moment before uploading of the  `ith`  file finishes. If the upload takes a non-integer number of seconds, round it up.