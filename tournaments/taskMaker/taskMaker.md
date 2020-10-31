
CodeSignal supports different challenge types. One of them asks you to find a bug on a single line of the given code, usually referred to as a  `DEBUGGING`  challenge. Behind the scenes, we correctly implement each challenge ourselves and then use special comments with specific prefixes to introduce the buggy lines. Here is an image to help you visualize what that looks like:

![](https://codesignal.s3.amazonaws.com/tasks/taskMaker/img/code.png?_tm=1582149520306)

As you can see, each of the special comments looks like this:

`<spaces>//DB <id>//<buggy line>`

where  `<spaces>`  is a string consisting of zero or more spaces (for indentation),  `DB`  indicates that this comment is for a  `DEBUGGING`  challenge (let's assume this is the only type we support),  `id`  is a positive integer that helps us enumerate these and  `<buggy line>`  is some code that's almost identical to the line to be replaced but with an inserted bug (that is guaranteed not to contain any  `'/'`  symbols).

When importing these to our database, each of the special comments is used to create a debugging challenge. The importing script looks for the last non-special-comment line above the special comment and replaces it with  `"<spaces><buggy line>"`  while removing all the other special comments from the code. Examples below can help clarify this process further.

Your task is to produce  `DEBUGGING`  challenges given source code that includes the special comments and the  `id`  of the desired  `DEBUGGING`  challenge.

Example

-   For
    
    ```
    source = ["ans = 0",
              "for i in range(n):",
              "    for j in range(n):",
              "    //DB 3//for j in range(1, n):",
              "    //DB 2//for j in range(n + 1):",
              "        ans += 1",
              "return ans"]
    
    ```
    
    and  `challengeId = 3`, the output should be
    
    ```
    taskMaker(source, challengeId) = ["ans = 0",
                                      "for i in range(n):",
                                      "    for j in range(1, n):",
                                      "        ans += 1",
                                      "return ans"]
    
    ```
    
-   For
    
    ```
    source = ["ans = 0;",
              "for (var i = 0; i < n; i++) {",
              "    for (var j = 0; j < n; j++) {",
              "    //DB 3//for (var j = 1; j < n; j++) {",
              "    //DB 2//for (var j = 0; j < n + 1; j++) {",
              "        ans++;",
              "    }",
              "}",
              "return ans;"]
    
    ```
    
    and  `challengeId = 2`, the output should be
    
    ```
    taskMaker(source, challengeId) = ["ans = 0;",
                                      "for (var i = 0; i < n; i++) {",
                                      "    for (var j = 0; j < n + 1; j++) {",
                                      "        ans++;",
                                      "    }",
                                      "}",
                                      "return ans;"]
    
    ```
    

Input/Output

-   **[execution time limit] 4 seconds (py3)**
    
-   **[input] array.string source**
    
    The source string. It is guaranteed that it doesn't contain any comments except the special ones, and only special lines contain  `//DB`. It is also guaranteed that for each possible subtask type and id, it contains not more than one special comment that starts with  `"<spaces>//DB <id>//"`.
    
    _Guaranteed constraints:_  
    `5 ≤ source.length ≤ 15`,  
    `0 ≤ source[i].length ≤ 50`.
    
-   **[input] integer challengeId**
    
    The  `id`  of the desired  `DEBUGGING`  challenge.
    
    _Guaranteed constraints:_  
    `1 ≤ challengeId < 1000`.
    
-   **[output] array.string**
    
    The resulting  `DEBUGGING`  challenge after the proper replacements are complete.
