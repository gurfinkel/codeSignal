Note: Avoid using regular expressions and implement regex matching yourself in your solution, since this is what you would be asked to do during a real interview.

Implement regular expression matching with support for '.' and '*', given the following guidelines:
'.' Matches any single character.
'*' Matches zero or more of the element that comes before it.

The matching should cover the entire input string s. If the pattern p matches the input string s, return true, otherwise return false.

Example

For s = "bb" and p = "b", the output should be
regularExpressionMatching(s, p) = false;
For s = "zab" and p = "z.*", the output should be
regularExpressionMatching(s, p) = true;
For s = "caab" and p = "d*c*x*a*b", the output should be
regularExpressionMatching(s, p) = true.
Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting of only lowercase English letters.

Guaranteed constraints:
0 ≤ s.length ≤ 20.

[input] string p

A string consisting of only lowercase English letters and the characters . and *.

Guaranteed constraints:
0 ≤ p.length ≤ 30.

[output] boolean

Return true if the pattern p matches the string s given the guidelines above, otherwise return false.
