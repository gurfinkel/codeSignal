
You are given a list of API calls in the format  `/project/subproject/method`. You need to calculate and print the number of calls to each node of the API endpoint as a tree.

In this tree,  _projects_,  _subprojects_, and  _methods_  should be sorted in the same order as they were given in the input data. The output tree should consist of several strings. All subprojects fall under their parent project, and all methods fall under the subproject in which they are included. The string that represents a project starts with  `--`, while subprojects start with  `----`  and methods start with  `------`. After the  _project_,  _subproject_, or  _method_  name, put the number of requests to this module in parentheses. Take a look at the example for a guide of what this tree should look like.

Example

For

```
calls = [
        "/project1/subproject1/method1",
        "/project2/subproject1/method1",
        "/project1/subproject1/method1",
        "/project1/subproject2/method1",
        "/project1/subproject1/method2",
        "/project1/subproject2/method1",
        "/project2/subproject1/method1",
        "/project1/subproject2/method1"
]

```

the output should be

```
countAPI(calls) = [
        "--project1 (6)",
        "----subproject1 (3)",
        "------method1 (2)",
        "------method2 (1)",
        "----subproject2 (3)",
        "------method1 (3)",
        "--project2 (2)",
        "----subproject1 (2)",
        "------method1 (2)"
]

```

Here, the first mention of  `project2`  was after the first mention of  `project1`, so  `project1`  comes first. In the same way, the first mention of  `/project1/subproject1`  comes before  `/project1/subproject2`, so it comes first in the output.

Input/Output

-   **[execution time limit] 4 seconds (js)**

-   **[input] array.string calls**

    The list of API calls. Each call is represented in the form  `"/project/subproject/method"`. Every name is a non-empty sequence of English letters and digits.

    _Guaranteed constraints:_  
    `1 ≤ calls.length ≤ 100`,  
    `6 ≤ calls[i].length ≤ 50`.

-   **[output] array.string**

    A tree composed of strings that represent all the  _projects_,  _subprojects_, and  _methods_  of the API, along with the number of their calls, sorted in the same order as they were given in the input. All subprojects fall under their parent project, and all methods fall under the subproject in which they are included. The string that represents a project starts with  `--`, while subprojects start with  `----`  and methods start with  `------`. After the  _project_,  _subproject_, or  _method_  name, put the number of requests to this module in parentheses.