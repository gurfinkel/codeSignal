int sameElementsNaive(std::vector<int> a, std::vector<int> b) {
    map<int,int> freqCount;
    int same = 0;

    for(auto num:a) freqCount[num]++;

    for(auto num:b){
        if(freqCount[num]){
            same++;
            freqCount[num]--;
        }
    }
    
    return same;
}
