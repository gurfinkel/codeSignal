function caterpillarTrees(n, edges) {
    let adjMatrix = new Array(n).fill([])
    adjMatrix = adjMatrix.map(v => new Array(0))
    
    let isVisited = new Array(n).fill(false)
    let res = [0, 0]
    let isConnectIfSelf = {}
    for(const v of edges){
        adjMatrix[v[0]].push(v[1])
        adjMatrix[v[1]].push(v[0])
        if(v[0] == v[1]){
            isConnectIfSelf[v[0]] = 1
        }
    }
    
    let isCaterpillarTree, pathGraph;
    
    let dfsGraph = node => {
        isVisited[node] = true
        pathGraph.push(node)
        
        if(adjMatrix[node].length > 1){
            let count = 0
            for(const n of adjMatrix[node]){
                if(adjMatrix[n].length > 1)
                    count++;
            }
            if(count > 2){
                isCaterpillarTree = false
            }
        }
        //dfs
        for(const n of adjMatrix[node]){
            if(!isVisited[n])
                dfsGraph(n)
        }
        
        return true
    }
    // reference check cycle: https://stackoverrun.com/vi/q/2913150
    let isTree = pathGraph => {
        let isVisited = {}
        for(const node of pathGraph){
            isVisited[node] = false
            if(isConnectIfSelf[node])
                return false
        }
        
        let hasCycle = false;
        let dfsPathGraph = (node, nodeItself)=> {
            isVisited[node] = 1;
            for(const n of adjMatrix[node]){
                if(isVisited[n] == 0){
                    dfsPathGraph(n, node)
                } else if(n != nodeItself){
                    hasCycle = true
                }
            }
            
            isVisited[node] = 2;
        }
        
        for(const node of pathGraph){
            if(!isVisited[node]){
                dfsPathGraph(node, node)
            }
        }
        
        return !hasCycle;
    }
    
    for(let ind = 0; ind < adjMatrix.length; ind++){
        if(!isVisited[ind]){
            // init
            pathGraph = []
            isCaterpillarTree = true
            //running
            dfsGraph(ind)
            // check
            if(isTree(pathGraph)){
                res[0] ++;
                res[1] += isCaterpillarTree ? 1: 0;
            }
        }
    }
    
    return res;
}
