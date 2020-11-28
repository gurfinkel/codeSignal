
When visualizing market data over a long period of time, it is often helpful to build an Open-high-low-close (OHLC) chart. However, to build an OHLC chart you first need to prepare some data. For each financial instrument consider each day when it was traded, and find the following prices the instrument had that day:

-   _open price_: the price of the first trade of the day;
-   _high price_: the highest trade of the day;
-   _low price_: the lowest trade of the day;
-   _close price_: the price of the last trade of the day.

Given a stream of trade data ordered by time, write a program to compute the OHLC by day and instrument (see output section for the format details).  
If two trades happen to have equal timestamps, then their order is determined by the order of their timestamps in the  `timestamp`  array.

Example

For

```
timestamp = [1450625399, 1450625400, 1450625500, 
             1450625550, 1451644200, 1451690100, 1451691000]

```

`instrument = ["HPQ", "HPQ", "HPQ", "HPQ", "AAPL", "HPQ", "GOOG"]`,  
`side = ["sell", "buy", "buy", "sell", "buy", "buy", "buy"]`,  
`price = [10, 20.3, 35.5, 8.65, 20, 10, 100.35]`, and  
`size = [10, 1, 2, 3, 5, 1, 10]`, the output should be

```
dailyOHLC(timestamp, instrument, side, price, size) = 
[["2015-12-20", "HPQ", "10.00", "35.50", "8.65", "8.65"],
 ["2016-01-01", "AAPL", "20.00", "20.00", "20.00", "20.00"],
 ["2016-01-01", "GOOG", "100.35", "100.35", "100.35", "100.35"],
 ["2016-01-01", "HPQ", "10.00", "10.00", "10.00", "10.00"]]

```

Input/Output

-   **[execution time limit] 4 seconds (js)**
    
-   **[input] array.integer timestamp**
    
    A nondecreasing sequence of positive integers.  `timestamp[i]`  stands for the  [Unix time](https://en.wikipedia.org/wiki/Unix_time)  when the  `ith`  trade was made.
    
    _Guaranteed constraints:_  
    `1 ≤ timestamp.length ≤ 50`,  
    `666 ≤ timestamp[i] < 2 · 109`.
    
-   **[input] array.string instrument**
    
    Array of the same length as  `timestamp`.  `instrument[i]`  is the  _ticker symbol_  (identifier) for the financial instrument taking part in the  `ith`  trade.
    
    _Guaranteed constraints:_  
    `instrument.length = timestamp.length`,  
    `1 ≤ instrument[i].length ≤ 4`.
    
-   **[input] array.string side**
    
    Array of the same length as  `timestamp`.  `side[i]`  equals either  `"buy"`  or  `"sell"`  depending on whether  `instrument[i]`  was bought or sold during the  `ith`  trade.
    
    _Guaranteed constraints:_  
    `side.length = timestamp.length`.
    
-   **[input] array.float price**
    
    Array of the same length as  `timestamp`.  `price[i]`  is the price of the  `instrument[i]`  during the  `ith`  trade. It is guaranteed that  `price[i]`  has no more than two digits after the decimal point.
    
    _Guaranteed constraints:_  
    `price.length = timestamp.length`,  
    `0.5 ≤ price[i] ≤ 100.5`.
    
-   **[input] array.integer size**
    
    Array of the same length as  `timestamp`.  `size[i]`  equals the number of shares of the  `instrument[i]`  traded during the  `ith`  trade.
    
    _Guaranteed constraints:_  
    `size.length = timestamp.length`,  
    `1 ≤ size[i] ≤ 5 · 105`.
    
-   **[output] array.array.string**
    
    The  `ith`  row of the output should contain the following elements:
    
    -   `output[i][0]`  -  _local server date_  in the  `YYYY-MM-DD`  format;
    -   `output[i][1]`  - a  _ticker symbol_  for some instrument;
    -   `output[i][2]`  - a string corresponding to the  _open price_;
    -   `output[i][3]`  - a string corresponding to the  _high price_;
    -   `output[i][4]`  - a string corresponding to the  _low price_;
    -   `output[i][5]`  - a string corresponding to the  _close price_.
    
    Each string corresponding to the price should contain exactly two digits after the decimal point and at least one digit before.
    
    For each unique pair of a date and an instrument present in the inputs, such that there was a trade of that instrument on that day, there should be exactly one row in the output.
    
    Output rows should be ordered by dates. Rows corresponding to the same date should be ordered in  lexicographical order  for  _ticker symbols_.
