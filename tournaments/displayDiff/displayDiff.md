
When a file in a user's Dropbox folder is changed, while synchronizing Dropbox tries to only upload the parts of the file that are different. The first step to accomplish this involves building a representation of the difference between the two versions of the same file.

As part of Dropbox's engineering team, you've decided to implement a function that will represent the difference between two strings in the following format:

-   Two strings are merged into one.
-   Text that is present in both versions is left untouched.
-   Text that is present only in the old version is enclosed in parentheses (`(`,  `)`).
-   Text that is present only in the new version is enclosed in brackets (`[`,  `]`).
-   Among all possible representations, your function returns the shortest one (brackets and parentheses do not count).
-   Among representations of minimal length, your function returns the  lexicographically smallest  one.  
    _For this task, please, assume that  `any other character < '(' < ')' < '[' < ']'`._

Now all you have to do is to implement this function.

Example

For  `oldVersion = "same_prefix_1233_same_suffix"`  
and  `newVersion = "same_prefix23123_same_suffix"`, the output should be  
`displayDiff(oldVersion, newVersion) = "same_prefix(_1)23[12]3_same_suffix"`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string oldVersion**
    
    _Guaranteed constraints:_  
    `1 ≤ oldVersion.length ≤ 35`.
    
-   **[input] string newVersion**
    
    It is guaranteed that neither  `oldVersion`  nor  `newVersion`  contains parentheses or brackets.
    
    _Guaranteed constraints:_  
    `1 ≤ newVersion.length ≤ 35`.
    
-   **[output] string**
    
    A string built from  `oldVersion`  and  `newVersion`  satisfying all of the conditions mentioned above.
