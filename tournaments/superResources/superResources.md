
There is a supercomputer that has many super resources. It allows many super programs to be launched at the same time. However, each super program requires one of the super resources.  
The workflow is as follows: one day each super program sends requests for the resources it will need, and the next day the supercomputer gives a sorted list of resources allocated to the super programs. The super computer deals with requests rather straightforward: the first program to require a resource gets it.  
Given a list of requests, return a list of resources for the next day.

No super program requests one resource more than once.

Example

For  `requests = [["3", "game"], ["3", "web"], ["1", "web"], ["1", "game"]]`, the output should be  
`superResources(requests) = [["1", "web"], ["3", "game"]]`.

Input/Output

-   **[execution time limit] 0.5 seconds (cpp)**
    
-   **[input] array.array.string requests**
    
    Each request is represented as an array of two elements. The first element is a number of requested resource, and the second element is a name of a super program that sent the request.
    
    _Guaranteed constraints:_  
    `3 ≤ requests.length ≤ 20`.
    
-   **[output] array.array.string**
    
    -   An array of granted requests sorted by resource number.