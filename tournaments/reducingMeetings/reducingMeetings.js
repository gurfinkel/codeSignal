// maximum spanning tree using disjoint set union
/*
E = 0
F = i => X[i] - i ? F(X[i]) : i

X = reducingMeetings = (n, M) => M.sort((a, b) => b[2] - a[2]).map(([a, b, c]) =>
    F(a) - F(b) ? X[F(a, E += c)] = b : 0
) | E
*/

function reducingMeetings(n, meetings) {
    const employees = meetings.reduce((acc, cur) => {
        acc[cur[0]] = acc[cur[0]] || []
        acc[cur[1]] = acc[cur[1]] || []
        acc[cur[0]].push(cur[1])
        acc[cur[1]].push(cur[0])
        return acc
    }, {})
    
    const sorted = meetings.slice().sort((a, b) => a[2] - b[2])
    
    const traverse = (s, list) => {
        const res = []
        const checked = {}
        const dfs = (key) => {
            checked[key] = true
            res.push(key)
            list[key].forEach(c => {
                if (!checked[c]) {
                    return dfs(c)
                }
            })
        }
        dfs(s)
        return res
    }
    
    const reduced = sorted.reduce((acc, cur) => {
        let e1 = cur[0]
        let e2 = cur[1]
        if (employees[e1].length > 1) {
            employees[e1] = employees[e1].filter(x=> x!= e2)
            employees[e2] = employees[e2].filter(x => x != e1)
            if (traverse(e1, employees).length !== n) {
                employees[e1].push(e2)
                employees[e2].push(e1)
                acc += cur[2]
            }
        } else {
            acc += cur[2]
        }
        return acc
    }, 0)
    
    return reduced
}
