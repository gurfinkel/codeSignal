
//Basic idea:
// - Scan forward, keeping a stack of maximum values.
// - Scan backward doing the same thing.
// - Check each value against its two nearest values.
//
// Overall complexity is O(n), since no value can be pushed
//  to the stack more than once.

function nearestGreater(a) {
    
    //Scans forward and returns the distance to
    // the closest greater predecessor
    function scan(e,i) {
        while(this.length && e >= this[this.length-1][0])
            this.pop();
        var ret = this.length ? i-this[this.length-1][1] : 0;
        this.push([e,i]);
        return ret;
    }
    
    //Build the forward and backward scans
    var fwscan = a.map(scan, []),
        bwscan = a.reverse().map(scan, []).reverse();
    
    //Output the list as requested
    return fwscan.map( (e,i) => {
        var b = bwscan[i];
        return b && (!e || b<e) ?
            i+b :
            e ? i-e : -1;
    });
    
}
