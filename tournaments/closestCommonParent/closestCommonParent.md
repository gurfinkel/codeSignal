
You're on a team at Datto tasked with implementing a backup system aimed at minimizing storage space. While exploring potential solutions, you notice something interesting: while performing backups on enterprise client accounts, the system often outputs clusters of files originating from the same source file, but each with slight differences. You come up with an idea to back up the original file and then use incremental differences to generate all the other files as needed.

To implement this feature, you start by finding the  _closest common parent file_  (_CCPF_) of two files. More specifically, if you define the  _distance_  between a parent (the original) file and a child (modified) file as the number of intermediate files between them, then their  _CCPF_  is the file that has the least total distance to both of the given files among all of the files in the cluster. Assume that the  _distance_  between a file and a file itself is  `0`.

Given a list of  `files`  in a cluster, and the files each of them originated from as an array,  `parents`, find the  _CCPF_  of  `file1`  and  `file2`.

Example

For  `files = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8"]`,  
`parents = ["-1", "F1", "F1", "F2", "F2", "F4", "F4", "F4"]`,  
`file1 = "F5"`, and  `file2 = "F8"`, the output should be  
`closestCommonParent(files, parents, file1, file2) = "F2"`.

The  _CCPF_  of  `"F5"`  and  `"F8"`  is  `"F2"`, since it's a parent for both  `"F5"`  and  `"F8"`, and is located below  `"F1"`  (which is also a parent to both of the files).

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.string files**
    
    Array of unique file names.  
    File names can only contain digits and English letters and can't be empty.
    
    _Guaranteed constraints:_  
    `2 ≤ files.length ≤ 50`.
    
-   **[input] array.string parents**
    
    Array of the same length as  `files`, where the  `parents[i]`  is the direct parent of  `files[i]`. If  `parents[i] = "-1"`, then  `i`  is the original file in the cluster and has no parent.  
    It is guaranteed that there is only one original file in the cluster, and all other files originated from it.  
    It is also guaranteed that for each valid  `i`  such that  `parents[i] ≠ "-1"`  `parents[i]`  is present in  `files`.
    
    _Guaranteed constraints:_  
    `parents.length = files.length`.
    
-   **[input] string file1**
    
    The first file, a string that is guaranteed to be present in  `files`.
    
    _Guaranteed constraints:_  
    `1 ≤ file1.length ≤ 10`.
    
-   **[input] string file2**
    
    The second file, a string that is guaranteed to be present in  `files`.
    
    _Guaranteed constraints:_  
    `1 ≤ file2.length ≤ 10`,  
    `file1 ≠ file2`.
    
-   **[output] string**
    
    The  _CCPF_  of  `file1`  and  `file2`.
