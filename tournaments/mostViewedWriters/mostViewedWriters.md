
On Quora, a  _question_  can have a variety of  _user_-submitted  _answers_. These questions are assigned  _topic_  tags to improve discoverability, and  _views_  are tracked at the answer level to identify the top answers and surface them in the the feed and search results.

More specifically:

-   A  _user_  can write an  _answer_  to a  _question_;
-   A  _question_  can have multiple  _answers_;
-   A  _question_  can be assigned multiple  _topics_;
    -   For example, the question "How many software engineers work at Google as of 2017?" is tagged with the topics "Silicon Valley", "Google", and "Software Engineering".
-   An  _answer_  can get  _views_.

The  _Most-Viewed Writers_  for a given topic are the top  `10`  Quora users whose answers to questions tagged with that topic are viewed the most. (When fewer than  `10`  users have submitted answers to questions tagged with a particular topic, the  _Most-Viewed Writers_  for that topic would include all the users who have contributed answers, regardless of whether or not their answers have any views.) An answer must belong to a question that is tagged with a given topic to be considered to be within that topic.

Given this system, compute the  _Most Viewed Writers_  for each topic, ordered from the smallest  `topic_id`  to the largest one. If two users have the same number of views, the user with the smaller  `user_id`  should come first.

For a specific  `topic_id`, the set of  _Most-Viewed Writers_  should be returned in the following format:

-   <user_id_1> <views_1>
-   <user_id_2> <views_2>
-   ...
-   <user_id_N> <views_N>

where:

-   `user_id_i`  is the ID of the  `ith`  user in the set;
-   `views_i`  is the total number of views the user gets across all their answers in that topic;
    -   Note that  `views_i`  may be equal to  `0`. If a user posted an answer that didn't get any views, they can still be included in the  _Most Viewed Writers_  list if there are fewer than  `10`  users who have contributed answers for that topic;
-   `N`  is the number of  _Most Viewed Writers_  for the topic  `topic_id`.

Example

For  `topicIds = [[1, 2, 3], [2, 3, 4], [1, 4], [2, 3]]`,  
`answerIds = [[6, 4], [1, 2], [5], [3]]`, and  
`views = [[2, 1, 2], [6, 3, 5], [3, 3, 0], [5, 1, 1], [4, 2, 3], [1, 4, 2]]`, the output should be

```
mostViewedWriters(topicIds, answerIds, views) = [
    [[3, 5], [2, 3], [1, 1]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[3, 5], [2, 3], [1, 2], [4, 2]],
    [[1, 3], [4, 2]]
]

```

In this example, we have  `4`  different topic IDs:  `1`,  `2`,  `3`, and  `4`. Let's find the  _Most Viewed Writers_  for each of them.

-   **For  `topic_id = 1`**:
    -   As we can see in the  `topicIds`  array, topic  `1`  is tagged to questions  `0`  and  `2`.
    -   We can see in the  `answerIds`  array that the answers corresponding to this topic are  `6`,  `4`, and  `5`.
    -   Now let's look at the  `views`  array and find all such  `views[i]`  that  `views[i][0]`  is one of the answer IDs from the last line:
        -   `views[1][0] = 6`, so we add  `views[1][2] = 5`  views to the user with ID  `views[1][1] = 3`;
        -   `views[3][0] = 5`, so we add  `views[3][2] = 1`  views to the user with ID  `views[3][1] = 1`;
        -   `views[4][0] = 4`, so we add  `views[4][2] = 3`  views to the user with ID  `views[4][1] = 2`.
    -   To recap, for  `topic_id = 1`  we have  `3`  _Most Viewed Writers_: the user with ID  `3`  has  `5`  views, the user with ID  `2`  has  `3`  views, and the user with ID  `1`  has  `1`  view.
-   **For  `topic_id = 2`**:
    -   As we can see in the  `topicIds`  array, topic  `2`  is tagged to questions  `0`,  `1`, and  `3`.
    -   We can see in the  `answerIds`  array that the answers corresponding to this topic are  `6`,  `4`,  `1`,  `2`, and  `3`.
    -   Now let's look at the  `views`  array and find all such  `views[i]`  that  `views[i][0]`  is one of our answer IDs:
        -   `views[1][0] = 6`, so we add  `views[1][2] = 5`  views to the user with ID  `views[1][1] = 3`;
        -   `views[4][0] = 4`, so we add  `views[4][2] = 3`  views to the user with ID  `views[4][1] = 2`;
        -   `views[5][0] = 1`, so we add  `views[5][2] = 2`  views to the user with ID  `views[5][1] = 4`;
        -   `views[0][0] = 2`, so we add  `views[0][2] = 2`  views to the user with ID  `views[4][1] = 1`;
        -   `views[2][0] = 3`, so we add  `views[3][2] = 0`  views to the user with ID  `views[3][1] = 3`.
    -   To recap, for  `topic_id = 2`  we have  `4`  _Most Viewed Writers_: the user with ID  `3`  has  `5`  views, the user with ID  `2`  has  `3`  views, the user with ID  `1`  has  `2`  views, and the user with ID  `4`  has  `2`  views. The last two users are ordered as they are because the user with the smaller ID comes first.
-   **For  `topic_id = 3`**:
    -   This topic is tagged to the same questions as  `topic_id = 2`  is, so its  _Most Viewed Writers_  is also the same.
-   **For  `topic_id = 4`**:
    -   As we can see in the  `topicId`  array, this topic is tagged to questions  `1`  and  `2`.
    -   We can see in the  `answerId`  array that the answers corresponding to this topic are  `1`,  `2`, and  `5`.
    -   Now let's look at the  `views`  array and find all such  `views[i]`  that  `views[i][0]`  is one of our above answer IDs:
        -   `views[5][0] = 1`, so we add  `views[5][2] = 2`  views to the user with ID  `views[5][1] = 4`;
        -   `views[0][0] = 2`, so we add  `views[0][2] = 2`  views to the user with ID  `views[0][1] = 1`;
        -   `views[3][0] = 5`, so we add  `views[3][2] = 1`  views to the user with ID  `views[3][1] = 1`.
    -   To recap, for  `topic_id = 4`  we have  `2`  _Most Viewed Writers_: the user with ID  `1`  has  `3`  views, and the user with ID  `4`  has  `2`  views.

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.array.integer topicIds**
    
    `topicIds[i]`  contains the topic IDs for the  `ith`  question. A question may have no topics.
    
    _Guaranteed constraints:_  
    `1 ≤ topicIds.length ≤ 5`,  
    `0 ≤ topicIds[i].length ≤ 4`,  
    `1 ≤ topicIds[i][j] ≤ 1000`.
    
-   **[input] array.array.integer answerIds**
    
    `answerIds[i]`  contains the answer IDs for the  `ith`  question. A question may have no answers.
    
    _Guaranteed constraints:_  
    `answerIds.length = topicIds.length`,  
    `1 ≤ answerIds[i][j] ≤ 1000`.
    
-   **[input] array.array.integer views**
    
    For each valid  `i`,  `views[i]`  contains informations about answer views:
    
    -   `views[i][0]`  is  `answer_id`, the ID of the answer. It is guaranteed that this ID is contained in at least one  `answerIds[i]`  list, and that for each answer ID from  `answerIds`  there's a corresponding element in  `views`;
    -   `views[i][1]`  is  `user_id`, the ID of the user who submitted the answer;
    -   `views[i][2]`  is  `views`, the number of views the answer  `answer_id`  has.
    
    _Guaranteed constraints:_  
    `1 ≤ views.length ≤ 15`,  
    `views[i].length = 3`,  
    `0 ≤ views[i][j] ≤ 1000`.
    
-   **[output] array.array.array.integer**
    
    An array, containing the  _Most Viewed Writers_  for each topic, ordered from the smallest  `topic_id`  to the largest one.
