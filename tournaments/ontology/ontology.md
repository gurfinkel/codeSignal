
Quora has many questions covering a range of different topics, and making sure they're discoverable is crucial. One way to tackle this challenge is by using Quora's @mention selectors and search service to look up questions under a certain topic as quickly as possible.

Let's imagine a simplified version of Quora where each question has only one topic associated with it. In turn, the topics form a simplified ontology where each topic has a list of children, and all topics are descendants of a single root topic.

Your job is to design a system that allows for quick searches of questions under topics. There are sets of topics, questions, and queries, given in this order. Each query has a desired topic as well as a desired string prefix. For each query, return the number of questions that fall under the queried topic and begin with the desired string. When considering topics, include all descendants of the queried topic as well as the queried topic itself. In other words, each query searches over the subtree of the topic.

The topic ontology is given in the form of a flattened tree of topic names, where each topic may optionally have children. If a topic has children, they are listed after it within parentheses, and those topics may have children of their own, etc. See the example below for the exact input format. The tree is guaranteed to have a single root topic.

Finally, for ease of parsing, each topic name will be composed of English alphabetical characters, and each question and query text will be composed of English alphabetical characters, spaces, and question marks. Each question and query text will be well behaved: there will be no consecutive spaces or leading/trailing spaces. All queries, however, are case sensitive.

Example

For  `treeRepr = "Animals ( Reptiles Birds ( Eagles Pigeons Crows ) )"`,

```
questions = [
  "Reptiles: Why are many reptiles green?",
  "Birds: How do birds fly?",
  "Eagles: How endangered are eagles?",
  "Pigeons: Where in the world are pigeons most densely populated?",
  "Eagles: Where do most eagles live?"
]

```

and

```
queries = ["Eagles How en",
           "Birds Where",
           "Reptiles Why do",
           "Animals Wh"]

```

the output should be  
`ontology(treeRepr, questions, queries) = [1, 2, 0, 3]`.

The first query corresponds to the green area in the diagram below, since it is looking for topics under Eagles, and the query string matches just one question: "How endangered are eagles?" The second query corresponds to the blue area in the diagram, which is the subtree of Birds, and matches two questions that begin with "Where". The third corresponds to the red area, which does not have any questions that begin with "Why do". The final query corresponds to the entire tree, since Animals is the root topic, and matches three questions.

![](https://codesignal.s3.amazonaws.com/tasks/ontology/img/example.png?_tm=1582075564711)

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] string treeRepr**
    
    Representation of a topics tree. Refer to the examples for more context on format.
    
    _Guaranteed constraints:_  
    `treeRepr.length ≤ 200`.
    
-   **[input] array.string questions**
    
    An array of questions. Each question contains a topic name, followed by a colon and a space, and then the question text. It is guaranteed that for each question its topic is present in the tree.
    
    _Guaranteed constraints:_  
    `questions.length ≤ 20`.
    
-   **[input] array.string queries**
    
    An array of queries. Each query contains a topic name, followed by a space, and then the query text. It is guaranteed that for each query its topic is present in the tree.
    
    _Guaranteed constraints:_  
    `queries.length ≤ 200`.
    
-   **[output] array.integer**
    
    An array of query answers.  `ith`  integer corresponds to the  `ith`  query.
