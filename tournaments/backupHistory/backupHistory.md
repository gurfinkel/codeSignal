
During a team hackathon at Datto, you decide to quickly implement file backup history. But to do this you first need to know how many backups of a certain file already exist.

You are given the  `creationTimes`  of files in the database, where  `creationTimes[i]`  stands for the time the  `ith`  file was created. Assume that all files are configured to be backed up every  `k`  seconds after their creation time, but this default behavior can be changed manually.

The system administrator can make one of two manual request types:

1.  cancel all future auto-backups for the specified file;
2.  immediately create a backup of the specified file.

Note that manual requests are processed before automatic actions, so if a cancellation request coincides with an auto-backup, the auto-backup doesn't happen. In a given second only  `1`  backup of a file is possible, so in the case that a manual request coincides with an auto-backup, only one backup is made.

Given a list of  `backupRequests`, your task is to find the number of backups that have been made of each file by the given time  `t`. Events that occurred at exactly  `t`  seconds should be included in the answer.

Example

For  `creationTimes = [461620201, 461620203, 461620207]`,

```
backupRequests = [[1, 0, 461620202], 
                  [1, 2, 461620208], 
                  [0, 2, 461620210], 
                  [1, 0, 461620204], 
                  [1, 1, 461620209], 
                  [1, 1, 461620203]]

```

`k = 3`, and  `t = 461620210`, the output should be  
`backupHistory(creationTimes, backupRequests, k, t) = [4, 3, 1]`.

Here's how the backups were created:

-   for file  `0`: manual backups at  `461620202`  and  `461620204`  and automatic ones at  `461620207`,  `461620210`  (`461620204`  is skipped because it was made manually);
-   for file  `1`: manual backups at times  `461620203`  and  `461620209`  and auto-backup at time  `461620206`;
-   for file  `2`: manual backup at time  `461620208`  and a cancellation at time  `461620210`, which canceled the auto-backup at  `461620210`.

Check out the image below for better understanding:

![](https://codesignal.s3.amazonaws.com/tasks/backupHistory/img/example.png?_tm=1581995124338)

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.integer creationTimes**

    Array of timestamps of when the files were created, sorted in ascending order.

    _Guaranteed constraints:_  
    `1 ≤ creationTimes.length ≤ 1000`,  
    `4 · 10^8  ≤ creationTimes[i] ≤ 5 · 10^8`.

-   **[input] array.array.integer backupRequests**

    A list of requests. For each valid  `i`  the  `ith`  request is given as  `backupRequests[i] = [type, file, time]`, where:

    -   `type`  is the type of request,  `0`  for cancellation and  `1`  for manual backup;
    -   `file`  is the file number,  `0 ≤ file < creationTimes.length`;
    -   `time`  is the time the request was made, which is guaranteed to be a positive integer not less than  `creationTimes[file]`.

    It is guaranteed that no two requests to the same file occur simultaneously.

    _Guaranteed constraints:_  
    `1 ≤ backupRequests.length ≤ 1000`.

-   **[input] integer k**

    A positive integer.

    _Guaranteed constraints:_  
    `2 ≤ k ≤ 10`.

-   **[input] integer t**

    A positive integer.

    _Guaranteed constraints:_  
    `10^8  ≤ t ≤ 10^9`.

-   **[output] array.integer**

    Array of the same length as  `creationTimes`, where the  `ith`  element is the number of times the  `ith`  file was backed up.