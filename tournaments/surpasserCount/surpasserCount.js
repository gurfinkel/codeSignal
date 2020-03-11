function surpasserCount(a) {

    //binary tree in array
    let arr = [[a[0], 0]]
    let sum = 0;

    for(let i = 1; i < a.length; i++){
        let pos = 0;
        while(arr[pos] != undefined || arr[pos] != null){
            if(arr[pos][0] < a[i]){
                nodesBranchLeft = arr[pos][1]
                sum = (sum + nodesBranchLeft + 1) % (10e9 + 7)
                pos = pos * 2 + 2
            }else{
                arr[pos][1]++
                pos = pos * 2 + 1
            }
        }

        arr[pos] = [a[i], 0]
    }

    return sum
}
