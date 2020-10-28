
In Thumbtack, users are able to rate Pros based on their experience working with them. Each rating is an integer ranging from  `1`  to  `5`, and all ratings are averaged to produce a single number rating for any given Pro. Those Pros who have a rating lower than a specified  `threshold`  are manually reviewed by Thumbtack staff to ensure high quality of service.

You're given a list of  `ratings`  for some Pros. Find out which Pros should be manually reviewed.

Example

For  `threshold = 3.5`  and

```
ratings = [[3, 4],
           [3, 3, 3, 4],
           [4]]

```

the output should be  `ratingThreshold(threshold, ratings) = [1]`.

Assume that we have  `3`  Pros that have received the following ratings:  `[3, 4], [3, 3, 3, 4]`  and  `[4]`. Then  
And if  `threshold = 3.5`  the answer is  `ratingThreshold(threshold, ratings) = [1]`.  
The first Pro's rating is  `3.5`, the second one's is  `3.25`, and the last one's is  `4`, so only the second Pro should be reviewed manually (the output is their 0-based index).

Input/Output

-   **[execution time limit] 3 seconds (cs)**
    
-   **[input] float threshold**
    
    A positive number not greater than  `5`. Those Pros whose ratings are lower than  `threshold`  should be manually reviewed.
    
    _Guaranteed constraints:_  
    `1 ≤ threshold ≤ 5`.
    
-   **[input] array.array.integer ratings**
    
    For each valid  `i`,  `ratings[i]`  is a non-empty array that represents the last ratings the  `ith`  Pro has received.
    
    _Guaranteed constraints:_  
    `0 ≤ ratings.length ≤ 5`,  
    `1 ≤ ratings[i].length ≤ 15`,  
    `1 ≤ ratings[i][j] ≤ 5`.
    
-   **[output] array.integer**
    
    0-based indices of the Pros that should be reviewed, sorted in ascending order.
