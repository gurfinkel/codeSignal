int greatestCommonPrimeDivisor(int a, int b) {
    vector<int> prime = {2,3,5,7,9,11,13,17,19,23,29,31,37,41,43,47,53,57};
    
    for(int i = prime.size()-1; i>=0; i--){
        if(a%prime[i] || b%prime[i]){
            continue;
        }
        else if(a%prime[i] == 0 && b%prime[i] == 0){
            return prime[i];
        }
    }
    return -1;
}
