
For your chemistry homework, you wrote out a long chemical formula without any spaces between the elements. But then your little brother found your paper and messed up the formula by changing all the lowercase letters to uppercase. It's impossible to figure out where one element ends and the next begins! Now you have to restore the formula. If there are several possible answers, return the one with the smallest number of elements. If there are still several answers, return the  lexicographically smallest  one.

Example

For  `elements = ["Si", "Ar", "K", "S", "I", "C", "Sc"]`  and  `formula = "SCCIARK"`, the output should be  
`restoreChemicalFormula(elements, formula) = "ScCIArK"`.

There are  `2`  possible chemical formulas that can be obtained from the given one:

-   `SCCIArK`;
-   `ScCIArK`.

The second one is lexicographically smaller than the first one, so the answer is  `ScCIArK`.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.string elements**
    
    An array of chemical elements. Each element consists of a single capital letter, or of a capital and a lowercase English letter.
    
    _Guaranteed constraints:_  
    `1 ≤ elements.length ≤ 100`,  
    `1 ≤ elements[i].length ≤ 2`.
    
-   **[input] string formula**
    
    A formula consisting of several chemical elements. It is guaranteed that  `formula`  contains only capital English letters. It is also guaranteed that the formula is correct, i.e. it is possible to split it into several chemical elements.
    
    _Guaranteed constraints:_  
    `1 ≤ formula.length ≤ 100`.
    
-   **[output] string**
    
    -   The corrected chemical formula.