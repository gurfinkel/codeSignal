function setsOfFactors(n) {
    let factors = []
    let map = {}
    
    for(let i = 2; i * i <= n; i++){
        if(n % i == 0){
            factors.push([n / i, i])
        }
    }
    
    let queue = [...factors]
    
    while(queue.length > 0){
        let arr = queue.shift()
        let str = arr.join(",")
        map[str] = 1
        for(let i = 0; i < arr.length; i++){
            for(let j = 2; j * j <= arr[i]; j++){
                let arrToAddToFactor = [...arr]
                if(arr[i] % j == 0){
                    arrToAddToFactor.splice(i, 1)
                    arrToAddToFactor.push(arr[i] / j)
                    arrToAddToFactor.push(j)
                    arrToAddToFactor.sort((a, b) => b - a)
                    if(map[arrToAddToFactor.join(",")] == undefined){
                        queue.push(arrToAddToFactor)
                    }
                }
            }
        }
    }
    
    factors = []
    let keys = Object.keys(map)
    for(let i = 0; i < keys.length; i++){
        factors.push(keys[i].split(",").map(x => parseInt(x)))
    }
    
    factors.sort((a, b) => {
        
        for(let i = 0; i < a.length && i < b.length; i++){
            if(a[i] < b[i]) return 1
            else if(a[i] > b[i]) return -1
        }
        
        if(a.length < b.length){
            return -1
        }else if(a.length > b.length){
            return 1
        }
        return 0
    })
    
    factors.unshift([n, 1])
    
    return factors
}
