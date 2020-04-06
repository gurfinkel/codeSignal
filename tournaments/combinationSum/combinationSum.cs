string combinationSum(int[] a, int sum) {
    Array.Sort(a);
    util(new List<int>(), a, sum, 0);

    if (0 == ans.Count) {
        return "Empty";
    }

    var result = new StringBuilder();

    foreach (var item in ans) {
        result.Append('(');
        for (int i = 0; item.Count > i; ++i) {
            if (0 != i) {
                result.Append(' ');
            }
            result.Append(item[i]);
        }
        result.Append(')');
    }

    return result.ToString();
}

List<List<int>> ans = new List<List<int>>();

void util(List<int> soFar, int[] coins, int change, int index){
    if(change == 0){
        ans.Add(soFar);
        return;
    }

    for(int i = index; i < coins.Length; i++){
        if(i > 0 && coins[i] == coins[i-1]) continue;
        int coin = coins[i];
        if(change - coin >= 0){
            var newSoFar = new List<int>(soFar);
            newSoFar.Add(coin);
            util(newSoFar, coins, change - coin, i);
        }
    }
}
