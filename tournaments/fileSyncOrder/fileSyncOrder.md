
Dropbox uploads files one-by-one and prioritizes them based on size, starting with the smallest. This way, you don't have to worry about your smaller files getting stuck behind larger ones during transfers. At the very beginning and after each file is synchronized, Dropbox selects the next smallest file that can fit the storage limit, and starts the upload. If it's impossible to sync anything, nothing happens until a new file is added or time runs out.

Given this structure, if you only have access to Internet for a limited time period (`duration`  seconds), some of your files might fail to sync either because you run out of time, or they don't fit the  `storageLimit`.

Implement a function that tells you which files will be synced in  `duration`  seconds given the  `storageLimit`.

Example

-   For

    ```
    files = [[10, 5], 
             [10, 7],
             [8, 10],
             [2, 20]]
    
    ```

    `storageLimit = 20`,  
    `uploadSpeed = 2`, and  
    `duration = 100`, the output should be  
    `fileSyncOrder(files, storageLimit, uploadSpeed, duration) = [0, 2, 3]`.

    There are four files to sync:
    * The first one is  `10`  KB, and you add it to your Dropbox folder  `5`  seconds after launching Dropbox. It takes  `10 / 2 = 5`  seconds for this file to be synced.
    * The second file is  `10`  KB. You add it to Dropbox  `7`  seconds after launching, and it takes  `10 / 2 = 5`  seconds to sync.
    * The third file is  `8`  KB, and you add it  `10`  seconds after launching Dropbox. It takes  `8 / 2 = 4`  seconds to sync.
    * The fourth and final file is  `2`  KB, you add it  `20`  seconds after launching Dropbox, and it takes  `2 / 2 = 1`  second to sync.

    Here's what happens:

    -   During the first  `5`  seconds there are no files to upload, so nothing happens.
    -   `5`  seconds after launch the first file (with index  `0`) is added to the Dropbox folder, and the synchronization starts immediately.
    -   `7`  seconds after launch the second file (with index  `1`) is added to the Dropbox folder, while the first file is still syncing.
    -   Then,  `10`  seconds after launch two events occur simultaneously:
        -   the first file finishes syncing;
        -   the third file is added to the Dropbox folder;
    -   Since the third file is smaller than the second one, it is next in line to be synced.
    -   It takes another  `4`  seconds to upload the third file.
    -   This means that  `14`  seconds after launch, only the first and third files have synced.
    -   And unfortunately, since  `18`  KB out of  `20`  KB in storage has been used by the first and third files, at  `10`  KB the second file would put you over the storage limit of  `20`  KB.
    -   However,  `20`  seconds after launch, the fourth file (with index  `3`) is added to the Dropbox folder. It fits the storage limit, so synchronization starts right away.
    -   Finally,  `21`  seconds after launch, the fourth file finishes syncing.
    -   So, after  `100`  seconds all files but the second one are synced.

    Check out the image below for better understanding:

    ![](https://codesignal.s3.amazonaws.com/tasks/fileSyncOrder/img/example.png?_tm=1582019445605)

-   For  
    `files = [[10, 5]]`,  
    `storageLimit = 100`,  
    `uploadSpeed = 1`, and  
    `duration = 10`, the output should be  
    `fileSyncOrder(files, storageLimit, uploadSpeed, duration) = []`.  
    There is only one file but since  `uploadSpeed`  is quite low  `duration`  is not enough to complete the upload.


Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.array.integer files**

    `files[i]`  describes the  `ith`  file:

    -   `files[i][0]`  equals the  `ith`  file's size in KBs.
    -   `files[i][1]`  equals the time when the  `ith`  file is added to Dropbox folder (given in seconds after launching Dropbox).

    It is guaranteed that there will never be a moment in time when two or more files of the same size are awaiting synchronization.

    _Guaranteed constraints:_  
    `1 ≤ files.length ≤ 10`,  
    `1 ≤ files[i][j] ≤ 100`.

-   **[input] integer storageLimit**

    The maximum total size of synced files (in KBs).

    _Guaranteed constraints:_  
    `20 ≤ storageLimit ≤ 10^7`.

-   **[input] integer uploadSpeed**

    Your upload speed given in KBs/sec, which means that it takes  `files[i][0] / uploadSpeed`  to upload the  `ith`  file.

    _Guaranteed constraints:_  
    `1 ≤ uploadSpeed ≤ 10`.

-   **[input] integer duration**

    The period of time you're interested in.

    _Guaranteed constraints:_  
    `4 ≤ duration ≤ 10^7`.

-   **[output] array.integer**

    Indices of the files which will be fully synced in  `duration`  seconds in the order of synchronization.