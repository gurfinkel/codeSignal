function longestCommonSubstring(s, t) {
    var sh, sl, th, ha,
        i,
        l, m, r,
        found,
        s1;
    /* generate hash for s */
    sh = [ha = 0];
    sl = {};
    for (i = 0; i < s.length; i++) {
        sh[i + 1] = ha = (ha << 1) ^ s.charCodeAt(i);
        if(i > 31) sl[ha] ? sl[ha].push(i) : sl[ha] = [i];
    }
    
    /* generate hash for t */
    th = [ha = 0];
    for (i = 0; i < t.length; i++)
        th[i + 1] = ha = (ha << 1) ^ t.charCodeAt(i);
    
    /* binary search */
    l = 0;
    r = Math.min(s.length, t.length) + 1;
    while (l + 1 < r) {
        /* set middle position and clear found flag. */
        m = l + r >> 1;
        found = false;
        
        if (m < 32) {
            /* for short substrings create position list */
            s1 = {};
            for (i = 0; i + m <= s.length; i++) {
                /* calculate substring hash for each position using simple xor */
                ha = (sh[i] << m) ^ sh[i + m];
                /* store positions indexed by hash values */
                s1[ha] ? s1[ha].push(i) : s1[ha] = [i];
            }
            
            /* find t matches with s by hash values */
            for (i = 0; found == 0 && i + m <= t.length; i++) {
                ha = (th[i] << m) ^ th[i + m];
                if (s1[ha])
                    /* if hash matching, validate positions with substring match
                     * to filter false hits to the first valid match.
                     */
                    found = s1[ha].some(j =>
                        /* debug: ++u && */
                        j + m <= s.length && s.substr(j, m) == t.substr(i, m)
                    );
            }
        } else {
            /* for long substrings use sl object.
             * it save the position list create time.
             * reason: hashes are same if substring length > 31, because js
             * bitwise functions using 32 bit.
             */
            s1 = sl;
            
            /* find matches with s by hash values */
            for (i = 0; found == 0 && i + m <= t.length; i++) {
                ha = m < 32 ? (th[i] << m) ^ th[i + m] : th[i + m];
                if (s1[ha])
                    /* if hash matching, validate positions with substring match
                     * to filter false hits to the first valid match.
                     */
                    found = s1[ha].some(j =>
                        /* debug: ++u && */
                        j - m >= 0 && s.substr(j - m + 1, m) == t.substr(i, m)
                    );
            }
        }
        /* if found move left else move right to middle position */
        found ? l = m : r = m;
        
        /* debug output for watching binary search status and checking false hits count:
        console.log(found, l, m, r, u);
         */
    }
    
    return l;
}

function longestCommonSubstringSuffixTree(s, t) {
    const st = new SuffixTree();
    
    const text = s.length > t.length ? s : t;
    const pattern = s.length > t.length ? t : s;
    
    st.addString(pattern + '#' + text + '$');
    //st.addString(pattern);
    //st.addString(text + '$');
    
    //st.print();
    //console.log(st.findLongestCommonSubstring());
    
    return st.findLongestCommonSubstring().length;
}

class Node {
    constructor() {
        this.transition = {};
        this.suffixLink = null;
    }
    
    addTransition(node, [start, end], t) {
        this.transition[t] = [node, start, end];
    }
    
    isLeaf() {
        return 0 === Object.keys(this.transition).length;
    }
}

class SuffixTree {
    constructor() {
        this.text = '';
        this.sentinel = '#';
        
        this.root = new Node();
        this.bottom = new Node();
        this.root.suffixLink = this.bottom;
        
        this.s = this.root;
        this.k = 0;
        this.i = -1;
    }
    
    
    addString(str) {
        var temp = this.text.length;
        this.text += (temp) ? this.sentinel + str : str;
        
        var [s, k, i] = [this.s, this.k, this.i];
        
        for (var j = temp; this.text.length > j; ++j) {
            this.bottom.addTransition(this.root, [j, j], this.text[j]);
        }
        
        while (this.text[i + 1]) {
            ++i;
            [s, k] = this.update(s, [k, i]);
            [s, k] = this.canonize(s, [k, i]);
        }
        
        [this.s, this.k, this.i] = [s, k, i];
        
        return this;
    }
    
    update(s, [k, i]) {
        var oldr = this.root;
        var [endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i]);
        
        while(!endPoint) {
            r.addTransition(new Node(), [i, Infinity], this.text[i]);
            
            if(oldr !== this.root) {
                oldr.suffixLink = r;
            }
            
            oldr = r;
            [s, k] = this.canonize(s.suffixLink, [k, i - 1]);
            [endPoint, r] = this.testAndSplit(s, [k, i - 1], this.text[i]);
        }
        
        if(oldr !== this.root) {
            oldr.suffixLink = s;
        }
        
        return [s, k];
    }
    
    
    testAndSplit(s, [k, p], t) {
        if (k <= p) {
            var [s2, k2, p2] = s.transition[this.text[k]];
            
            if (t == this.text[k2 + p - k + 1]) {
                return [true, s];
            } else {
                var r = new Node();
                s.addTransition(r, [k2, k2 + p - k], this.text[k2]);
                r.addTransition(s2, [k2 + p - k + 1, p2], this.text[k2 + p - k + 1]);
                
                return [false, r];
            }
        } else {
            if(!s.transition[t]) {
                return [false, s];
            } else {
                return [true, s];
            }
        }
    }
    
    canonize(s, [k, p]) {
        if (p < k) {
            return [s, k];
        } else {
            var [s2, k2, p2] = s.transition[this.text[k]];
            
            while (p2 - k2 <= p - k) {
                k = k + p2 - k2 + 1;
                s = s2;
                
                if (k <= p) {
                    [s2, k2, p2] = s.transition[this.text[k]];
                }
            }
            
            return [s, k];
        }
    }
    
    findLongestCommonSubstring() {
        const [text, root] = [this.text, this.root];
        const indexOfSentinel = text.indexOf(this.sentinel);
        let commonSubstring = '';
        
        if (-1 === indexOfSentinel) {
            return commonSubstring;
        }
        
        (function traverse(node, curStr = '') {
            if (node.isLeaf()) return;
            
            for (const t in node.transition) {
                const [currentNode, startIndex, endIndex] = node.transition[t];
                
                let left = false;
                let right = false;
                
                for (const temp in currentNode.transition) {
                    const [s, a, b] = currentNode.transition[temp];
                    if (indexOfSentinel >= a) {
                        left = true;
                    }
                    if (indexOfSentinel < a) {
                        right = true;
                    }
                }
                
                if (!left || !right) {
                    continue;
                }
                
                if (!currentNode.isLeaf()) {
                    const curSubStr = text.substring(startIndex, endIndex + 1);
                    let curCurStr = curStr;
                    
                    curCurStr = (node === root) ? curSubStr : curCurStr + curSubStr;
                    
                    if (curCurStr.length > commonSubstring.length) {
                        commonSubstring = curCurStr;
                    }
                    
                    traverse(currentNode, curCurStr);
                }
            }
        })(root);
        
        return commonSubstring;
    }
    
    toString() {
        var text = this.text;
        
        function traverse(node, offset = '', ret = '') {
            for(var t in node.transition) {
                var [s, a, b] = node.transition[t];
                ret += offset + '["' + text.substring(a, b + 1) + '", ' + a + ', ' + b + ']' + '\r\n';
                ret += traverse(s, offset+'\t');
            }
            
            return ret;
        }
        
        var res = traverse(this.root);
        
        return res;
    }
    
    print() {
        console.log(this.toString());
    }
}
