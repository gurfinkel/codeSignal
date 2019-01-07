function applesDistribution(apples, boxCapacity, maxResidue) {
    let ways = 0
    for(let i = 0; i <= boxCapacity; i++){
        if(apples % i <= maxResidue){ ways++ }
    }
    return ways
}
