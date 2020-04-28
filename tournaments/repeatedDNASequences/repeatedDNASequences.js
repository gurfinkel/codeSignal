
//Basic idea:
// - Count the number of times each sequence appears.
// - If it has appeared twice, record it.
// - Sort them all at the end.

// The problem did not give constraints on the memory requirements;
//  there are 1M potential strings, so I use a histogram of length 1M.
// This solution uses O(|s|) to count the strings,
//  and O(s log s) to sort the output.

// This is optimal computational complexity, although I am very
//  pessimistic about the space optimality.


function repeatedDNASequences(s) {
    //Build our map/histogram
    var symbolMap = {A: 0, C: 1, G: 2, T: 3},
        oneM = (1<<20)-1,
        histogram = new Array(oneM+1),
        output = [];

    //Prepare the string
    var curVal = 0;
    for(var i=0; i<9; ++i)
        curVal = curVal*4 + symbolMap[s[i]];

    for(var i=9, l=s.length; i<l; ++i) {
        curVal = (curVal*4 & oneM) + symbolMap[s[i]];
        histogram[curVal] = -~histogram[curVal];
        if(histogram[curVal] == 2)
            output.push(s.substr(i-9,10));
    }

    return output.sort();
}
