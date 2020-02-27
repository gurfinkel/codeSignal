/* Problem:
 *  How many unique ways can we place dominos over a 4xN board?
 *
 * Algorithm:
 *  Analyzing the structure of the tile wave front, we move through
 *  that front sweeping up configurations and adding them as we go
 *  along.
 *
 * Implementation:
 *  Finite State Machine represents the tile wave front transitions.
 *  Priority Queue (heap) order the tile state transitions for X-axis.
 *  Consolidate multiple heap entries that share the same <state,x>.
 *  Continue until no more transitions <= N exist.
 *  Order Queue so that last dequeued item is State 0 (evenly tiled state).
 *
 * How is this Dynamic Programming?
 *  FSM and Heap?! How is this DP? At first blush, it might not be. I
 *  would argue it is. The tile wave front collects up the count of
 *  tile layout. It's a ragged leading edge, some of that edge is
 *  clean and represents the final, completed state of tiling up to
 *  'N'. Other parts of that wave front represent a partial solution
 *  for future values of N. Intermediate values are calculated, summed
 *  and carried along. There's a consolidation section in the
 *  processing loop which grabs all like transistions a sums them into
 *  one transition group (to some new state).
 *
 *  So, the FSM is just an implementation of the subproblem algorithm
 *  moving through intermediate solutions. The Priority Queue (Heap)
 *  allows us to group like subproblems in order to compute a "final"
 *  intermediate solution. We could run the Priority Queue without
 *  consolidation and memoize the values for State 0 in some external
 *  array. This would result in an exponentially increasing heap size.
 *  We avoid that by running the consolidation step.
 *
 *  Subproblems & intermediate calculations == Dynamic Programming
 *
 * Finite State Machine:
 *  Cell := [ State, Columns, <optional multiplier> ]
 *
 *  FSM[0] - "flat" state; all cells tiled to this point
 *            4 transitions; 2 to self, 2 to other states
 *  FSM[1] - staggered horizontal bars        --
 *                                             ==
 *                                            --
 *  FSM[2] - 2 symmetric staggered groupings: |= or =
 *                                            =     |=
 *
 *  FSM states 1 & 2 are not "complete" states. They have ragged
 *  edges. Transitions from these states can go to State 0 or back to
 *  self.
 *
 * Heap code used for Priority Queue is a JS library that comes from
 * code I wrote for solving other problems in this Interview
 * Section. I liked the code enough to turn it into a library. It's
 * patched in at the bottom.
 */

//const heap = require("../lib/heap");

const FSM = [[[0, 1], [0, 2, 4], [1, 2], [2, 2, 2]],
    [[0, 2], [1, 2]],
    [[0, 1], [2, 1]]];

function fillingBlocks(n) {
    const cmp = (a,b) => a.i - b.i || b.st - a.st;
    var H = new Heap(cmp);
    var next;
    
    H.add({ st: 0, i: 0, c: 1 });
    
    while (H.top.i <= n) {
        next = H.pop();
        
        // Consolidation: if next and top match, combine them
        if (H.length && !cmp(next, H.top)) {
            H.top.c += next.c;
            continue;
        }
        
        // State Transitions
        for ([st, di, m] of FSM[next.st])
            H.add({ st, i: next.i + di, c: next.c*(m || 1) });
    }
    
    return next.c;
}



function Heap(cmp_fn) {
    var h = [ undefined ];
    
    var cmp = (a, b) => {
        if (a === undefined || b === undefined)
            return undefined;
        
        // default compare is min-heap; make this b-a for max-heap
        // or just pass in the max heap compare function
        return (cmp_fn || ((a, b) => a-b))(a,b);
    };
    
    var swap = (i, j) => [ h[j], h[i] ] = [ h[i], h[j] ];
    
    var cleanup = i => {
        var j;
        
        if (cmp(h[i], h[j=i>>1]) < 0 || cmp(h[i], h[j=2*i]) > 0 || cmp(h[i], h[++j]) > 0) {
            swap(i,j);
            cleanup(j);
        }
    };
    
    var _delete = i => {
        var j = 2*i;
        
        if (j in h) {
            swap(i, cmp(h[j+1], h[j]) < 0 ? ++j : j);
            _delete(j);
        } else {
            swap(i, j=h.length-1);
            h.pop();
            if (i < j)
                cleanup(i);
        }
    };
    
    return {
        get length() { return h.length - 1; },
        get top()    { return h[~~!this.empty()]; },
        
        empty: function() {
            return !this.length;
        },
        
        add: function(e) {
            h.push(e);
            cleanup(h.length-1);
        },
        
        pop: function() {
            var e = this.top;
            if (!this.empty())
                _delete(1);
            return e;
        },
        
        // Iteration is destructive!!!
        // Elements are drained.
        *[Symbol.iterator]() {
            while (!this.empty())
                yield this.pop();
        }
    }
}
