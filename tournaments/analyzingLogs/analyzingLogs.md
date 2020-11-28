
Logging is a very important part of software development. Logs can be extremely useful in all development stages and of course for monitoring production systems. That's why professional developers usually log every step of their applications: errors, warnings, traces and infos.

Let's consider the following  **logger**. It creates a single  `logs`  directory at  `/root/devops`  and writes all logs there. Since a single log file can be too large, the  **logger**  splits it into several files of smaller sizes. All log files have the  `.log`  extension, and their names can contain any allowed characters.

Here's an example of the  `logs`  directory that contains  `3`  log files and one non-log file  `info.txt`:

```
/root/devops/logs/file1.log
/root/devops/logs/today.log
/root/devops/logs/ff44-kk.log
/root/devops/logs/info.txt

```

Each  `.log`  file consists of several lines, where each line represents one  _log_  entry. Each  _log_  has the following format:

```
timestamp|log_type|source_file_name|line|function_name|log_text

```

where:

-   `timestamp`  is a unix time stamp;
-   `source_file_name`,  `function_name`  and  `log_text`  can be any sequence of symbols;
-   `line`  is non-negative integer;
-   `log_type`  is one of the following values:  `ERROR`,  `WARNING`,  `TRACE`,  `INFO`.

Here is an example of a  `.log`  file:

```
1477123675|ERROR|handler.cpp|127|findHandlers|Division by zero
1477884474|TRACE|handler.cpp|130|findHandlers|Start calculations
1477997395|ERROR|handler.cpp|1110|getHandlers|Array out of bounds
1478944445|INFO|file.py|12|getData|Getting data

```

You want to find the most common  `ERROR`  by analyzing the log files. To do this, you would like to create a report about the number of  `ERROR`s each source file has. The result should be sorted by the number of errors in descending order. In case two source files have the same number of errors, the file with the  lexicographically smallest  name should go first.

Example

For the following  `/root/devops/logs`  directory

**/root/devops/logs/file1.log**

```
1477123675|ERROR|handler.cpp|127|findHandlers|Division by zero
1477884474|TRACE|handler.cpp|130|findHandlers|Start calculations
1477997395|ERROR|handler.cpp|1110|getHandlers|Array out of bounds
1478944445|INFO|file.py|12|getData|Getting data
1478975988|ERROR|do.sh|1700|start|errors

```

**/root/devops/logs/file2.log**

```
1377123688|ERROR|handler.cpp|127|findHandlers|Division by zero
1477123777|ERROR|hello.py|12|hell|Division by zero
1477123558|ERROR|hello.py|127|findHandlers|Division by zero
1477884474|TRACE|handler.cpp|130|findHandlers|Start calculations
1477997395|ERROR|find-user.cpp|10|getUsers|Some error
1478975945|INFO|file.py|22|writeData|Writing data
1478975946|WARNING|file.scala|170|doSomething|just warning
1477007000|ERROR|find-user.cpp|100|push|error


```

The output will be

```
handler.cpp 3
find-user.cpp 2
hello.py 2
do.sh 1

```

-   **[execution time limit] 4 seconds (sh)**
