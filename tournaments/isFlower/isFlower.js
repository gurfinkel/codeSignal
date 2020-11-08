function isFlower(adj) {
    let convertToAdjMatrix = new Array(adj.length).fill(new Array())
    convertToAdjMatrix = convertToAdjMatrix.map(v => [])
    
    let isConnectedItself = false
    adj.map((r, ind) => r.map((v, pos) => {
        v && convertToAdjMatrix[ind].push(pos)
        if(v && ind == pos) isConnectedItself = true
    }))
    
    let checkFlowerGroup = new Map()
    
    convertToAdjMatrix.map(v => {
        let total = checkFlowerGroup.get(v.length) || 0
        checkFlowerGroup.set(v.length,  total + 1)
    })
    
    let petals = new Set()
    adj.map((r,i) => {
        let p = r.map((v, j) => v == true ? j : null).filter(v => v != null )
        p.push(i)
        p = p.sort((a,b) => a-b).join("")
        petals.add(p)
    })
    
    if(!isConnectedItself && checkFlowerGroup.size == 1
        && checkFlowerGroup.get(adj.length-1) == adj.length)
        return true
    
    if(!isConnectedItself
        && checkFlowerGroup.size == 2
        && petals.size - 1 <= parseInt(adj.length/2)
        && checkFlowerGroup.get(adj.length-1) == 1)
        return true
    
    return false
}
