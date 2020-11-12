
Dropbox holds a competition between schools called  `CampusCup`. If you verify an email address from a college, university, or higher education institution, you earn  `20`  points toward your school's overall ranking. When a school receives at least  `100`  points, all of its registered members receive an additional  `3 Gb`  of bonus space each. When the school receives at least  `200`  points, its registered members receive an additional  `8 Gb`. If the school receives at least  `300`  points, its members receive an additional  `15 Gb`. And finally, when a school receives at least  `500`  points, members receive an additional  `25 Gb`  each.

You are given  `n`  registered emails, all of them unique. Each email has the following format:  `"<name>@<domain>"`, where  `<name>`  and  `<domain>`  are non-empty strings consisting of lowercase letters and a  `'.'`. Identical domains correspond to the same school and vice versa.

Your task is to make a scoreboard, i.e. to sort the schools according to the amount of bonus space they each received (per student not in total). School  `A`  must be higher in the standings than school  `B`  if  `A`  received  _more space_  than  `B`, or if they received equal number of gigabytes but the domain string of school  `A`  is  lexicographically smaller  than the one of school  `B`.

Example

-   For  `emails = ["john.doe@mit.edu", "admin@rain.ifmo.ru", "noname@mit.edu"]`, the output should be  
    `campusCup(emails) = ["mit.edu", "rain.ifmo.ru"]`.
    
    `"mit.edu"`  scored  `40`  points, and  `"rain.ifmo.ru"`  just  `20`. Both universities got no additional space, so  `"mit.edu"`  must be higher in the standings because it is  _lexicographically smaller_  than  `"rain.ifmo.ru"`.
    
-   For
    
    ```
    emails = ["b@harvard.edu", "c@harvard.edu", "d@harvard.edu", 
              "e@harvard.edu", "f@harvard.edu",
              "a@student.spbu.ru", "b@student.spbu.ru", "c@student.spbu.ru", 
              "d@student.spbu.ru", "e@student.spbu.ru", "f@student.spbu.ru", 
              "g@student.spbu.ru"]
    
    ```
    
    the output should be  
    `campusCup(emails) = ["harvard.edu", "student.spbu.ru"]`.
    
    `"harvard.edu"`  -  `100`  points,  `3 Gb`  of additional space.  
    `"student.spbu.ru"`  -  `140`  points, also  `3 Gb`  of additional space.
    
    `"harvard.edu"`  must be higher in the standings because it is  _lexicographically smaller_  than  `"student.spbu.ru"`.
    
-   For
    
    ```
    emails = ["a@rain.ifmo.ru", "b@rain.ifmo.ru", "c@rain.ifmo.ru", 
              "d@rain.ifmo.ru", "e@rain.ifmo.ru", "noname@mit.edu"]
    
    ```
    
    the output should be  
    `campusCup(emails) = ["rain.ifmo.ru", "mit.edu"]`.
    
    `"mit.edu"`  -  `20`  points, no additional space.  
    `"rain.ifmo.ru"`  -  `100`  points,  `3 Gb`  of additional space.
    
    Therefore,  `"rain.ifmo.ru"`  must be higher in the standings.
    

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.string emails**
    
    Registered emails.
    
    _Guaranteed constraints:_  
    `2 ≤ emails.length ≤ 40`,  
    `5 ≤ emails[i].length ≤ 20`.
    
-   **[output] array.string**
    
    The list of unique school domains sorted as described above.
